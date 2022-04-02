import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6246ace417c7bd957f02b7ca",
            "user": "6246888bfe1bb1422abe858e",
            "title": "My title",
            "description": "This is first notes",
            "tag": "personal",
            "date": "2022-04-01T07:42:28.598Z",
            "__v": 0
        },
        {
            "_id": "6246ace417c7bd957f02b7cc",
            "user": "6246888bfe1bb1422abe858e",
            "title": "My title",
            "description": "This is second notes",
            "tag": "personal",
            "date": "2022-04-01T07:42:28.764Z",
            "__v": 0
        },
        {
            "_id": "6246ace417c7bd957f02b7ce",
            "user": "6246888bfe1bb1422abe858e",
            "title": "My title",
            "description": "This is first notes",
            "tag": "personal",
            "date": "2022-04-01T07:42:28.913Z",
            "__v": 0
        },
        {
            "_id": "6246ace517c7bd957f02b7d0",
            "user": "6246888bfe1bb1422abe858e",
            "title": "My title",
            "description": "This is first notes",
            "tag": "personal",
            "date": "2022-04-01T07:42:29.060Z",
            "__v": 0
        },
        {
            "_id": "6246ace517c7bd957f02b7d2",
            "user": "6246888bfe1bb1422abe858e",
            "title": "My title",
            "description": "This is first notes",
            "tag": "personal",
            "date": "2022-04-01T07:42:29.215Z",
            "__v": 0
        },
        {
            "_id": "6246ace517c7bd957f02b7d3",
            "user": "6246888bfe1bb1422abe858e",
            "title": "My title",
            "description": "This is first notes",
            "tag": "personal",
            "date": "2022-04-01T07:42:29.060Z",
            "__v": 0
        },
        {
            "_id": "6246ace517c7bd957f02b7d4",
            "user": "6246888bfe1bb1422abe858e",
            "title": "My title",
            "description": "This is first notes",
            "tag": "personal",
            "date": "2022-04-01T07:42:29.215Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)


    // Add a Note
    const addNote = (title, description, tag) => {

        // Todo API call
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
    const deleteNote = (id) => {
        // Todo API call
        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(newNotes)
    }


    // Edit a note
    const editNote = (id, title, description, tag) => {

    }



    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;