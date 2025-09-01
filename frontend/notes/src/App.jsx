import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesList from "./compo/NotesList";
import NoteForm from "./compo/NoteForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex justify-center relative" style={{ 
        backgroundImage: 'url(/bg1.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl p-8 my-8 mx-4 min-h-[80vh]">
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="/note/:id" element={<NoteForm />} />
          </Routes>
        </div>
      </div>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
