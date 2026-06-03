
(function () {
  const config = window.SIS_CONFIG || {};
  if (!config.enabled) return;

  const QUEUE_KEY = "sis_event_queue_v2";
  const VISITOR_KEY = "sis_visitor_id";
  const SESSION_KEY = "sis_session_id";

  const uuid = () => Math.random().toString(36).slice(2) + Date.now();

  const visitorId = localStorage.getItem(VISITOR_KEY) || uuid();
  localStorage.setItem(VISITOR_KEY, visitorId);

  const sessionId = sessionStorage.getItem(SESSION_KEY) || uuid();
  sessionStorage.setItem(SESSION_KEY, sessionId);

  function queue(event){
    const q = JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
    q.push(event);
    localStorage.setItem(QUEUE_KEY, JSON.stringify(q.slice(-500)));
  }

  function track(eventName,payload={}){
    queue({
      eventName,
      visitorId,
      sessionId,
      url: location.href,
      path: location.pathname,
      timestamp: new Date().toISOString(),
      payload
    });
  }

  track("page_view",{title:document.title});

  [30,60,120,300].forEach(sec=>setTimeout(()=>track("time_on_page",{seconds:sec}),sec*1000));

  const marks=[25,50,75,100], fired={};
  window.addEventListener("scroll",()=>{
    const pct=Math.round(((window.scrollY+window.innerHeight)/document.documentElement.scrollHeight)*100);
    marks.forEach(m=>{
      if(pct>=m && !fired[m]){ fired[m]=true; track("scroll_depth",{percent:m}); }
    });
  });

  document.addEventListener("submit",e=>track("form_submit_attempt",{formId:e.target.id||""}));
  document.addEventListener("click",e=>{
    const a=e.target.closest("a");
    if(!a) return;
    const href=a.getAttribute("href")||"";
    if(href.startsWith("tel:")) track("phone_click",{href});
    else if(href.startsWith("mailto:")) track("email_click",{href});
    else track("link_click",{href});
  });
})();
