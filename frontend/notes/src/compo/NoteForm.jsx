import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";
import toast from "react-hot-toast";

export default function NoteForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    const res = await API.get(`/notes/${id}`);
    setTitle(res.data.title);
    setContent(res.data.content);
  };

  const updateNote = async () => {
    if (!title || !content) {
      toast.error("Both fields are required!");
      return;
    }
    await API.put(`/notes/${id}`, { title, content });
    toast.success("Note updated!");
    navigate("/");
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">✏️ Edit Note</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Title</label>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm placeholder-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Content</label>
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm placeholder-gray-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          onClick={updateNote}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          💾 Update Note
        </button>
      </div>
    </div>
  );
}
