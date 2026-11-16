# Technical Notes & Lessons Learned

## 1. Biggest Docker Challenge & How I Solved It
- **Challenge:** After successfully building the multi-stage Docker image, I ran into two issues when starting the container: a naming conflict from an earlier test container, and a port mismatch where the application would not open when mapping host port `5173` to container port `5173`.
- **Solution:** By checking the production stage in the `Dockerfile`, I noticed that **Nginx** serves the built application on internal port `80` rather than Vite's default port `5173`. I resolved both issues by removing the old container (`docker rm -f studyflow-container`) and mapping the ports properly using `-p 5173:80`.

## 2. Key Lesson Learned with Git & GitHub
- **Lesson:** Organizing a repository cleanly from the beginning—separating source code (`src/`), documentation (`docs/`), and ignore rules (`.gitignore`, `.dockerignore`)—makes the project easy to understand and reproduce for any developer. Writing clear, structured commit messages (such as `feat:`, `docker:`, and `docs:`) also creates a meaningful history that reflects real development progress.