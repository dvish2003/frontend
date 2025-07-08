
export type Note = {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    userId?: string;
    userName?:string;
}


export type NoteForm = {
    title: string;
    content: string;

}

export type NoteDeleteForm = {
    _id: string;
}