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
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;