import { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function NotesList() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    const res = await API.get("/notes");
    setNotes(res.data);
    setLoading(false);
  };

  const addNote = async () => {
    if (!title || !content) {
      toast.error("Both fields are required!");
      return;
    }
    await API.post("/notes", { title, content });
    setTitle("");
    setContent("");
    toast.success("Note added!");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    toast.success("Note deleted!");
    fetchNotes();
  };

  const copyLink = (id) => {
    navigator.clipboard.writeText(`${window.location.origin}/note/${id}`);
    toast.success("Link copied!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center"> Notes App</h1>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Add New Note</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Title</label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm placeholder-gray-400"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Content</label>
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm placeholder-gray-400"
              placeholder="Enter note content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button
            onClick={addNote}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            ✨ Add Note
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : notes.length === 0 ? (
        <p className="text-center text-gray-500">No notes yet. Add one!</p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note) => (
            <li
              key={note.id}
              className="border p-4 rounded flex justify-between items-center shadow-sm"
            >
              <div>
                <p className="font-semibold">{note.title}</p>
                <p className="text-gray-600">{note.content}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/note/${note.id}`}
                  className="bg-gradient-to-r from-amber-400 to-amber-500 text-gray-800 px-4 py-2.5 rounded-lg font-medium hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-sm hover:shadow-md border border-amber-300/30"
                >
                   Edit
                </Link>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2.5 rounded-lg font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-sm hover:shadow-md border border-rose-400/30"
                >
                   Delete
                </button>
                <button
                  onClick={() => copyLink(note.id)}
                  className="bg-gradient-to-r from-slate-500 to-slate-600 text-white px-4 py-2.5 rounded-lg font-medium hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-sm hover:shadow-md border border-slate-400/30"
                >
                   Share
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
