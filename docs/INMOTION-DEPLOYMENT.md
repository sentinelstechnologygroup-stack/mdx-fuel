# InMotion deployment

GitHub is the source of truth. The production workflow builds the Vite site
and uploads only `dist/` to cPanel over SFTP.

Add these GitHub Actions secrets before enabling the workflow:

- `INMOTION_SFTP_HOST` — the SFTP hostname from cPanel
- `INMOTION_SFTP_PORT` — normally `22`
- `INMOTION_SFTP_USERNAME`
- `INMOTION_SFTP_PRIVATE_KEY`
- `INMOTION_SFTP_REMOTE_PATH` — normally `/home/CPANEL_USER/public_html`

Use a dedicated SFTP deployment key/user if cPanel supports it. Do not put
cPanel passwords, mail credentials, or API keys in the repository.

The existing Google Workspace MX records must remain unchanged when the
website is moved. Only the web `A`/`CNAME` records should be changed.
