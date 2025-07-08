import type {Note, NoteDeleteForm} from "../models/Note.ts";
import {apiClient_2} from "./apiClient.ts";

export const addNote = async (note: Note) => {
    const response = await apiClient_2.post("/notes/addNote", note);
    console.log("return response data",response.data);
    return response.data;
}
export const deleteNote = async (note: NoteDeleteForm) => {
    const response = await apiClient_2.post("/notes/deleteNote", note);
    console.log("return response data",response.data);
    return response.data;
}

export const getAllNote = async () => {
    const response = await apiClient_2.post("/notes/getAll");
    return response.data;
}