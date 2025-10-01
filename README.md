# 📝 Notes App

A simple full-stack web application to create, edit, and delete notes. It consists of a RESTful API built with Java Spring Boot and a frontend developed with Angular. The application uses PostgreSQL as the database.

---

## 📁 Project Structure

```plaintext
CHALLENGE.md
README.md          # You're here
notes-app/
├── backend/       # Spring Boot REST API
├── frontend/      # Angular SPA
├── docker-compose.yml
├── run.sh         # One-line script to run the entire stack

```

## 🚀 How to Run the App
Important: Make sure Docker and Docker Compose are installed and running.

Clone the repository

```bash
git clone https://github.com/your-org/notes-app.git
cd notes-app
```

Grant execution permission to the script (only once)

```bash
chmod +x run.sh
Start the app
```

```bash
./run.sh
The script will:
```

Build and start the backend, frontend, and database

Create the necessary database schema automatically

📦 Technologies Used

To run this project correctly, make sure you have the following installed:

### 🔹 Frontend (Angular)
- **Node.js**: v20.19.0
- **npm**: v10.8.2
- **Angular CLI**: v17.3.7

### 🔹 Backend (Spring Boot)
- **Java**: OpenJDK 21.0.5 (compila con Java 17 configurado en `pom.xml`)
- **Maven**: 3.9.9
- **Spring Boot**: 3.5.0
- **Database**: PostgreSQL (configurado como dependencia runtime)

### 🔹 Docker environment
- **Docker**: v28+
- **Docker Compose**: v2.34+
- **OS**: Linux, macOS or Windows (with WSL2 or Docker Desktop)


## 🌐 Architecture Overview
The app follows a Single Page Application (SPA) model.

Frontend is fully decoupled and consumes the REST API provided by the backend.

The backend follows a layered architecture:

Controller → Service → Repository

All services are containerized and orchestrated via docker-compose.

## 🧪 API Testing
Once the app is running, the backend API is available at:

```bash
http://localhost:8080/api/notes
```

You can test it using:

Postman

curl

Or directly from the frontend interface

🛠️ Development
If you prefer to run frontend and backend separately during development:

```bash
# Backend
cd backend
./mvnw spring-boot:run

# Frontend
cd frontend
npm install
ng serve
```

🧾 License
This project is for evaluation purposes and belongs to sjaegervigo.
