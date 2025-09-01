from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from uuid import uuid4

app = FastAPI(title="Notes App API")
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development, allow all
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# In-memory storage (for speed)
notes_db = {}

class NoteCreate(BaseModel):
    title: str
    content: str

class NoteUpdate(BaseModel):
    title: str
    content: str

class NoteResponse(BaseModel):
    id: str
    title: str
    content: str

@app.post("/notes", response_model=NoteResponse)
def create_note(note: NoteCreate):
    note_id = str(uuid4())
    notes_db[note_id] = {"title": note.title, "content": note.content}
    return {"id": note_id, **notes_db[note_id]}

@app.get("/notes", response_model=List[NoteResponse])
def get_notes():
    return [{"id": nid, **data} for nid, data in notes_db.items()]

@app.get("/notes/{note_id}", response_model=NoteResponse)
def get_note(note_id: str):
    if note_id not in notes_db:
        raise HTTPException(status_code=404, detail="Note not found")
    return {"id": note_id, **notes_db[note_id]}

@app.put("/notes/{note_id}", response_model=NoteResponse)
def update_note(note_id: str, note: NoteUpdate):
    if note_id not in notes_db:
        raise HTTPException(status_code=404, detail="Note not found")
    notes_db[note_id] = {"title": note.title, "content": note.content}
    return {"id": note_id, **notes_db[note_id]}

@app.delete("/notes/{note_id}")
def delete_note(note_id: str):
    if note_id not in notes_db:
        raise HTTPException(status_code=404, detail="Note not found")
    del notes_db[note_id]
    return {"message": "Note deleted successfully"}
