# StudyFlow Board (React Edition)

A clean, responsive task and course tracker web application designed to help university students organize their labs, assignments, and daily study goals. Built with React and Vite, and containerized using a multi-stage Docker setup with Nginx.

## Features
- **Task Management:** Add new tasks with specific course categories (`OS Lab`, `Design`, `Programming`), mark tasks as completed, and delete tasks.
- **Live Statistics:** Real-time counters tracking Total, Pending, and Completed tasks.
- **Task Filtering:** Quickly filter tasks by `All`, `Pending`, or `Completed` status.
- **Dark Mode:** Built-in theme toggle for comfortable viewing in low-light environments.
- **Persistent Storage:** Automatically saves all tasks in the browser's `localStorage`.

## Tech Stack
- **Frontend:** React 18, Vite, CSS3
- **Web Server (Production):** Nginx (Alpine)
- **Containerization:** Docker (Multi-stage build)

## Repository Structure
```text
StudyFlow-Board-react/
├── docs/
│   ├── screenshots/       # Proof of Docker build, container run, UI, and Git commits
│   └── notes.md           # Technical notes and lessons learned
├── public/                # Static assets
├── src/                   # React source code (App.jsx, App.css, main.jsx)
├── .dockerignore          # Files excluded from Docker build context
├── .gitignore             # Files excluded from Git version control
├── Dockerfile             # Multi-stage Docker configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation

### 1. Clone the Repository
```bash
git clone [https://github.com/ahmadalbess/StudyFlow-Board-react.git](https://github.com/YOUR_USERNAME/StudyFlow-Board-react.git)
cd StudyFlow-Board-react