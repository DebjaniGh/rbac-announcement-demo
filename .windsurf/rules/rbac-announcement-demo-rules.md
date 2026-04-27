---
trigger: manual
---

Purpose
Implement a basic Role-Based Access Control (RBAC) system incrementally so that a developer new to backend
and security concepts can learn step by step.

Constraints

- Use existing Angular app under src/.
- Use existing Express entry point server/index.js.
- Do NOT migrate to NestJS.
- Do NOT introduce a database (use in-memory data).
- JWT-based authentication.
- Authorization must be enforced on the backend.

────────────────────────────────────────────
MILESTONE 0 — Stabilize Existing Scaffolding
────────────────────────────────────────────
Goal
Confirm the Angular + Express setup works before adding concepts.

Tasks

- Do not remove existing Angular components.
- Ensure server/index.js starts an Express app on port 3000.
- Ensure Angular proxy sends /api requests to Express.

Outcome

- Angular app loads
- Express API reachable
- No auth, no RBAC

Learning Focus

- Frontend vs backend responsibilities

────────────────────────────────────────────
MILESTONE 1 — Organize Backend Structure
────────────────────────────────────────────
Goal
Introduce standard backend folder structure without changing behavior.

Tasks
Create folders under server/:

- routes/
- middleware/
- models/

Outcome

- No behavior change
- Clear separation of concerns

Learning Focus

- Why structure matters in backend code

────────────────────────────────────────────
MILESTONE 2 — Create a Simple API Route
────────────────────────────────────────────
Goal
Understand request → response flow.

Tasks

- Create GET /api/health
- Return `{ status: "ok" }`
- Wire the route through server/index.js

Outcome

- Angular can call a backend API

Learning Focus

- Express routing basics

────────────────────────────────────────────
MILESTONE 3 — Login Without Security
────────────────────────────────────────────
Goal
Understand authentication flow before adding JWT.

Tasks

- Create POST /api/auth/login
- Accept username/password
- Return static user object (no JWT)

Outcome

- Login request works
- No protection yet

Learning Focus

- What authentication really means

────────────────────────────────────────────
MILESTONE 4 — Introduce JWT
────────────────────────────────────────────
Goal
Make authentication stateless.

Tasks

- Generate JWT on login
- Include userId and username in payload
- Return token to frontend

Outcome

- Token represents identity

Learning Focus

- Why JWT exists
- Stateless auth

────────────────────────────────────────────
MILESTONE 5 — JWT Authentication Middleware
────────────────────────────────────────────
Goal
Centralize authentication logic.

Tasks

- Create auth.middleware.js
- Verify JWT from Authorization header
- Attach decoded payload to req.user

Outcome

- Requests now have identity context

Learning Focus

- Middleware
- Cross-cutting concerns

────────────────────────────────────────────
MILESTONE 6 — Protect a Route
────────────────────────────────────────────
Goal
Enforce authentication.

Tasks

- Protect GET /api/health using auth middleware
- Return 401 if token missing or invalid

Outcome

- Public vs protected routes

Learning Focus

- 401 Unauthorized
- Security boundaries

────────────────────────────────────────────
MILESTONE 7 — Introduce Roles (Identity Attributes)
────────────────────────────────────────────
Goal
Attach roles to users.

Tasks

- Create User model with roles[]
- Create Role model
- Assign roles during login
- Include roles in JWT

Outcome

- Users now have roles

Learning Focus

- Roles describe _who_ a user is

────────────────────────────────────────────
MILESTONE 8 — Expose Roles to Frontend
────────────────────────────────────────────
Goal
Make frontend role-aware.

Tasks

- Decode JWT in AuthService
- Expose roles to Angular app

Outcome

- UI can see roles
- No authorization yet

Learning Focus

- Data flow from backend to frontend

────────────────────────────────────────────
MILESTONE 9 — Introduce Permissions
────────────────────────────────────────────
Goal
Move beyond roles.

Tasks

- Create Permission model (string-based)
- Attach permissions to roles
- Define permissions like "users:read"

Outcome

- Role → permission mapping exists

Learning Focus

- Why permissions scale better than roles

────────────────────────────────────────────
MILESTONE 10 — RBAC Authorization Middleware
────────────────────────────────────────────
Goal
Implement true authorization.

Tasks

- Create rbac.middleware.js
- Export authorize(permission)
- Check req.user.roles → permissions
- Return 403 if forbidden

Outcome

- Backend enforces RBAC

Learning Focus

- 403 Forbidden
- Authorization vs authentication

────────────────────────────────────────────
MILESTONE 11 — Apply RBAC to Routes
────────────────────────────────────────────
Goal
Secure business APIs.

Tasks

- Apply authorize() to selected routes
- Keep controllers free of RBAC logic

Outcome

- Clean, secure backend

Learning Focus

- Composition of middleware

────────────────────────────────────────────
MILESTONE 12 — Frontend Route Guards
────────────────────────────────────────────
Goal
Prevent invalid navigation.

Tasks

- Create AuthGuard
- Create PermissionGuard
- Use route data for required permissions

Outcome

- UI respects backend rules

Learning Focus

- UX vs security

────────────────────────────────────────────
MILESTONE 13 — UI Permission Awareness
────────────────────────────────────────────
Goal
Improve usability.

Tasks

- Create PermissionService
- Hide or disable unauthorized UI actions

Outcome

- Clear, user-friendly UI

Learning Focus

- Defense-in-depth

────────────────────────────────────────────
MILESTONE 14 — Failure Scenarios
────────────────────────────────────────────
Goal
Build security intuition.

Tasks

- Verify 401 when unauthenticated
- Verify 403 when unauthorized
- Ensure no RBAC logic in controllers

Completion Criteria
Developer can explain:

- Auth vs AuthZ
- Role vs permission
- Why middleware exists
  ``
