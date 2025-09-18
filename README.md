# NetRunner
An uncensored LLM specifically trained with CTF writeups to assist in cybersecurity competitions and help solve challenges.
<div align="left">
  <img height="300" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGV0M3pobTlmM2JtazRzMndneXdkOWp1YjhkYjBqdzZsMGZqaDFjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdYt5HYinIx13ji/giphy.gif"  />
</div>

## Overview

NetRunner is an AI assistant designed to support cybersecurity professionals and CTF participants by leveraging knowledge from historical CTF writeups and solutions. The system provides intelligent assistance for solving cybersecurity challenges through a web-based interface.

## Project Structure

```
WebProyecto/
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── InputArea.tsx
│   │   │   └── MessagesBox.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
├── README.md
└── Design_Document_NetRunner.txt
```

### Directory Structure Description

- **frontend/src/components/**: Reusable UI components
  - `Header.tsx` - Navigation and header component
  - `InputArea.tsx` - Chat input interface
  - `MessagesBox.tsx` - Message display component
- **frontend/src/pages/**: Main application pages
  - `Home.tsx` - Main chat interface
  - `Login.tsx` - User authentication page
  - `Register.tsx` - User registration page
- **frontend/src/assets/**: Static assets and images
- **frontend/public/**: Public static files served directly
- **App.tsx**: Main application component with routing logic
- **Configuration files**: TypeScript, Vite, and Tailwind configurations

## Tech Stack
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="python logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" alt="postgresql logo"  />
</div>


### Frontend
- **React** - Modern UI framework
- **TypeScript/TSX** - Type-safe development
- Minimalist design with black and red color palette
- Chat-based interface similar to modern LLMs

### Backend (Planned)
- **Express.js** - REST API server (to be implemented)
- **PostgreSQL** - Primary database (to be implemented)
- **Prisma ORM** - Database management and queries (to be implemented)
- **Python** - AI model microservice (to be implemented)
- **scikit-learn** - Machine learning framework (to be implemented)

## Architecture
The application will follow a microservices architecture:

- **Frontend**: React application for user interaction (currently implemented)
- **Backend API**: Express.js server handling requests and user management (planned)
- **AI Service**: Python microservice for LLM inference (planned)
- **Database**: PostgreSQL with user profiles and conversation management (planned)

## Data Model
- **Training Data**: CTF writeups and solutions in .md/.json format
- **Database**: User profiles, authentication, and conversation history
- **Normalized database design** following 3NF principles

## Current Features

- Chat-based interface UI components
- Login and Register page templates
- Responsive design with Tailwind CSS
- TypeScript implementation for type safety

## Planned Features

- User authentication and profile management
- Conversation history and context preservation
- Fine-tuned LLM trained on CTF-specific data
- RESTful API for frontend-backend communication

## Development Roadmap

1. **Phase 1**: Frontend development (React + TypeScript)
2. **Phase 2**: Backend and database implementation
3. **Phase 3**: Data collection and model preparation
4. **Phase 4**: LLM fine-tuning and training
5. **Phase 5**: Python-Express integration

## Limitations

- Hardware constraints may affect model performance
- Model accuracy depends on training data quality
- The AI cannot autonomously participate in CTFs as a competitor

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/netrunner.git
cd netrunner

# Install frontend dependencies
cd frontend
npm install

# Run development server
npm run dev
```

## Current Status

This project is in early development. Currently implemented:
- Frontend UI components and pages
- Basic routing structure
- TypeScript configuration
- Tailwind CSS styling

Next steps: Backend development and AI model integration.

## Author

José Antonio Villafaña Montes de Oca

---

*NetRunner - Empowering cybersecurity through AI assistance*