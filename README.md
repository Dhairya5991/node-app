# DevOps Portfolio | React • Node.js • Docker

A **production-ready DevOps Portfolio Web Application** built with **React (Vite)** and **Node.js (Express)**, fully containerized using **Docker** and orchestrated via **docker-compose**.

This project demonstrates **modern frontend development, backend APIs, and DevOps best practices** suitable for real-world deployments and interviews.

---

## Key Highlights

- Modern responsive UI with smooth scrolling
- Hero banner with resume download
- REST API backend with health checks
- Dockerized frontend & backend
- Nginx serving optimized frontend build
- Clean, scalable project structure
- Ready for CI/CD & Kubernetes

---

## Tech Stack

### Frontend
- React 18
- Vite
- CSS3 (Responsive Design)
- Axios

### Backend
- Node.js
- Express.js
- REST APIs
- CORS

### DevOps
- Docker
- Docker Compose
- Nginx
- GitHub (SSH)

---

## Project Structure

```
node-app/
├── frontend/
│   ├── public/
│   │   └── resume.pdf
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── Dockerfile
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## Run Locally (Docker)

```bash
docker-compose up --build
```

### Access URLs
- Frontend → http://localhost:3000
- Backend → http://localhost:5000
- Health → http://localhost:5000/health

---

## API Endpoints

### Health Check
```http
GET /
GET /health
GET /api
```

### Contact API
```http
POST /api/contact
Content-Type: application/json

{
  "name": "Your Name",
  "email": "you@email.com",
  "message": "Hello"
}
```

---

## Useful Docker Commands

```bash
docker-compose up -d --build
docker-compose down
docker ps
docker logs node-app-backend
```

---

## GitHub Setup (SSH)

```bash
git remote add origin git@github.com:Dhairya5991/node-app.git
git branch -M main
git push -u origin main
```

---

## Future Enhancements

- CI/CD using GitHub Actions
- Kubernetes deployment (EKS)
- Nginx reverse proxy
- Monitoring & logging
- Email notifications (Nodemailer)

---

## 👨‍💻 Author

**Dhairyashil Pansare**  
Senior Software Engineer | DevOps Enthusiast  
📍 Pune, India  

---

## 📄 License

This project is open-source and intended for **learning, demonstration, and portfolio use**.
