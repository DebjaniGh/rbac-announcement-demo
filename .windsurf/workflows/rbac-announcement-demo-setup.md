1. Plan / TODO
Confirm project name (default: rbac-announcement-demo).
Confirm Angular version and package manager.
Confirm port 3000 for Express API and Angular proxy config.

2. Initialize repos
Angular app: ng new rbac-announcement-demo --routing --style=css

Then cd rbac-announcement-demo. Then install the npm packages using npm install.

Express API: create server/ at project root with its own package.json; install express and cors if needed.

3. Install UI library

Run ng add @ng-bootstrap/ng-bootstrap. (Angular‑native Bootstrap components; requires Bootstrap CSS + Popper—ng add handles wiring.)

4. Dev Proxy

Add proxy.conf.json in Angular app root:
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true
  }
}
Update angular.json to use the proxy:
"serve": {
  "options": {
    "proxyConfig": "proxy.conf.json"
  }
}

5. Express server

Create server/index.js with basic Express setup and CORS. 
app.post('/api/feedback', (req,res)=>res.json({ ok:true, ...req.body }));
app.listen(3000, ()=>console.log('API on 3000'));
(Idiomatic route methods as per Express routing guide.)

6. Angular feature code
Generate components announcement-banner and feedback-modal.
FeedbackService using HttpClient.post('/api/feedback', body).
Wire <app-announcement-banner> into app.component.html.
Banner behavior: reads ANNOUNCEMENT_MESSAGE from environment.ts, shows if not dismissed, and persists dismissal.

7. Modal with NG Bootstrap
8. Tests - Add announcement-banner.component.spec.ts with HttpClientTestingModule and HttpTestingController. Cover: render, dismiss, open modal, submit POST expectation.

9. Scripts & Run
Add NPM scripts: 
In root: "start:server": "node server/index.js".
In Angular app: keep ng serve default.
Start both (two terminals) or add a concurrent script if you prefer.

10. Docs & Commit

docs/announcement.md with usage/props.
Commit: feat: add announcement banner + feedback modal (Angular+Express).
