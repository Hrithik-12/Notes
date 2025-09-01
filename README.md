# 📝 Notes App

A modern, full-stack notes application built with React and FastAPI, featuring a beautiful UI and real-time note management capabilities.

## 🌐 Live Demo

- **Frontend**: [https://notes-lovat-delta.vercel.app/](https://notes-lovat-delta.vercel.app/)
- **Backend API**: [https://notes-42li.onrender.com](https://notes-42li.onrender.com)

## ✨ Features

- **📝 Create & Edit Notes**: Add new notes with title and content
- **🗑️ Delete Notes**: Remove unwanted notes instantly
- **📤 Share Notes**: Copy shareable links for your notes
- **🎨 Modern UI**: Beautiful, responsive design with gradient buttons
- **⚡ Real-time Updates**: Instant feedback with toast notifications
- **📱 Responsive Design**: Works perfectly on desktop and mobile
- **🔒 Data Persistence**: Notes stored securely in the backend

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Beautiful toast notifications

### Backend
- **FastAPI** - Modern Python web framework
- **Pydantic** - Data validation and serialization
- **Uvicorn** - ASGI server
- **CORS** - Cross-origin resource sharing support

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- Git

### Frontend Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd frontend/notes

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload
```

The backend API will be available at `http://localhost:8000`

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/notes` | Get all notes |
| `POST` | `/notes` | Create a new note |
| `GET` | `/notes/{id}` | Get a specific note |
| `PUT` | `/notes/{id}` | Update a note |
| `DELETE` | `/notes/{id}` | Delete a note |

### Example API Usage

```bash
# Create a note
curl -X POST "https://notes-42li.onrender.com/notes" \
  -H "Content-Type: application/json" \
  -d '{"title": "My Note", "content": "This is my note content"}'

# Get all notes
curl "https://notes-42li.onrender.com/notes"
```

## 🎨 UI Features

- **Glassmorphism Design**: Semi-transparent cards with backdrop blur
- **Gradient Buttons**: Beautiful gradient effects on all interactive elements
- **Smooth Animations**: Subtle hover effects and transitions
- **Responsive Layout**: Adapts perfectly to all screen sizes
- **Modern Typography**: Clean, readable fonts and spacing

## 🚀 Deployment

### Frontend (Vercel)
- Automatic deployments from Git
- Global CDN for fast loading
- Custom domain support

### Backend (Render)
- Automatic deployments from Git
- Free tier available
- Built-in SSL certificates

## 📁 Project Structure

```
notes-app/
├── frontend/
│   └── notes/
│       ├── src/
│       │   ├── compo/
│       │   │   ├── NotesList.jsx
│       │   │   └── NoteForm.jsx
│       │   ├── App.jsx
│       │   ├── api.js
│       │   └── main.jsx
│       ├── public/
│       └── package.json
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .gitignore
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using modern web technologies
- Deployed on Vercel and Render for global accessibility
- Inspired by the need for a simple, beautiful notes application

---

**Made with ❤️ by [Hrithik Garg]**


