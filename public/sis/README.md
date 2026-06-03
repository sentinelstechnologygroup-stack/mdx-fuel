# SDL SIS Static Site Files

These files enable SDL SIS client-side event tracking for the MDX Fuel static website.

## Files

- `sis-config.js` — site/client configuration and future endpoint setting
- `sis-tracker.js` — lightweight page, link, CTA, phone, email, and form-submit attempt tracking

## Static Build Behavior

For Vite projects, files placed in `public/sis/` are copied into the production build at:

```text
dist/sis/
```

The root `index.html` loads these scripts before the main React bundle.

## Endpoint

The endpoint is intentionally blank until SDL SIS ingestion is connected. With no endpoint configured, events are queued locally in the browser under:

```text
sis_event_queue_v1
```

Do not add secrets or private credentials to these public files.
