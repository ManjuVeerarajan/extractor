# Getting Started

### Backend

* REST API built with Spring Boot.
* Retrieves media items from an Elasticsearch index (imago).
* Endpoints: /all (fetch all media) and /filter (search by keyword), both with pagination.

### Frontend

* Displays media items in a grid with thumbnails
* Supports keyword filtering and pagination.

### Prerequisites

* Docker: Install Docker Desktop (includes Docker Compose).
* Java 17: For local backend development (optional, as Docker handles it).
* Node.js 18: For local frontend development (optional).

### Running the Application - Setup and Running with Docker

* git clone <repository-url>
* cd extractor
* from the parent folder run: docker-compose up --build
  *   Builds and starts both containers.
  *  Backend: http://localhost:8080
  * Frontend: http://localhost:3000

### Running the Application - Local Development

#### Backend
* git clone <repository-url>
* cd extractor
* cd backend
* mvn clean install
* java -jar target/extractor-0.0.1-SNAPSHOT.jar
  * Runs on http://localhost:8080.

#### Frontend
* cd ../frontend
* npm install
* npm start
  * Runs on http://localhost:3000.
    
### Access the Application

* Open a browser and navigate to http://localhost:3000
* Use the search bar to filter media items by keyword.
* Click "Show All" to fetch all media.


