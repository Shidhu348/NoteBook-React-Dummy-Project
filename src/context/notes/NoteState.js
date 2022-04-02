import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


    // Fetch All Notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0Njg4OGJmZTFiYjE0MjJhYmU4NThlIn0sImlhdCI6MTY0ODc5MDYwMX0.BxPRI-tEJ5phqRWu_S6xlxoOvb7TjILL54f41TDUsWc"
            },
        });
        const json = await response.json();
        console.log(json)
        setNotes(json);
    }


    // Add a Note
    const addNote = async (title, description, tag) => {

        // Todo API call
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0Njg4OGJmZTFiYjE0MjJhYmU4NThlIn0sImlhdCI6MTY0ODc5MDYwMX0.BxPRI-tEJ5phqRWu_S6xlxoOvb7TjILL54f41TDUsWc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json;
        console.log(json);

        console.log("Adding a new note")
        const note = {
            "_id": "6246ace517c7bd957f02b7d4",
            "user": "6246888bfe1bb1422abe858e",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-04-01T07:42:29.215Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }


    // Delete a Note
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0Njg4OGJmZTFiYjE0MjJhYmU4NThlIn0sImlhdCI6MTY0ODc5MDYwMX0.BxPRI-tEJ5phqRWu_S6xlxoOvb7TjILL54f41TDUsWc"
            },
        });
        const json = response.json;
        console.log(json);

        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(newNotes)
    }


    // Edit a note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0Njg4OGJmZTFiYjE0MjJhYmU4NThlIn0sImlhdCI6MTY0ODc5MDYwMX0.BxPRI-tEJ5phqRWu_S6xlxoOvb7TjILL54f41TDUsWc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json;
        console.log(json);
        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title
                element.description = description
                element.tag = tag
            }

        }
    }



    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;