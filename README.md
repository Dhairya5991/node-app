# DevOps Portfolio – React + Node.js + Docker

A modern, responsive DevOps Portfolio Web Application built using React (Vite) for the frontend
and Node.js (Express) for the backend, fully containerized with Docker and orchestrated using docker-compose.

---

## 🚀 Features

### Frontend
- React + Vite
- Responsive modern UI
- Smooth scrolling navigation
- Hero banner with resume download
- Sections: About, Skills, Experience, Projects, Education, Languages, Management Skills, Contact
- Mobile responsive navbar

### Backend
- Node.js + Express REST API
- Contact form endpoint
- Health check endpoints
- CORS enabled

### DevOps
- Dockerized frontend & backend
- Nginx for frontend production
- docker-compose orchestration

---

## 📁 Project Structure

devops-portfolio/
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

---

## ▶️ Run with Docker

docker-compose up --build

Frontend: http://localhost:3000  
Backend: http://localhost:5000  
Health: http://localhost:5000/health

---

## 🧪 API Endpoints

GET /  
GET /health  
GET /api  

POST /api/contact

---

## 🐳 Useful Commands

docker-compose up -d --build  
docker-compose down  
docker logs node-app-backend  

---

## 👨‍💻 Author

Dhairyashil Pansare  
Senior Software Engineer | DevOps Enthusiast  

---

## 📄 License

Free to use for learning and portfolio purposes.
