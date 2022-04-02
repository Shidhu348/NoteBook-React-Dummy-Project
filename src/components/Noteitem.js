import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;


    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className="d-flex justify-content-between">
                        <i className="fa-solid mx-2 fa-trash-can" onClick={() => { return deleteNote(note._id) }} ></i>
                        <i className="fa-solid mx-2 fa-pen-to-square" onClick={() => { updateNote(note) }} ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
