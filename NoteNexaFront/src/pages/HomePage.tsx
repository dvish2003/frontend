import { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import type {Note, NoteDeleteForm, NoteForm} from "../models/Note.ts";
import {addNote, deleteNote, getAllNote} from "../service/noteService.ts";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";


export default function HomePage() {
  const MySwal = withReactContent(Swal);

  const [notes, setNotes] = useState<Note[]>([]);
  const [, setNote_1] = useState<Note[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState<NoteForm>({
    title: '',
    content: ''
  });

  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth") === "true";

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);


  useEffect(() => {
    loadAllNotes()
  }, []);

  const loadAllNotes = async () => {
    const response = await getAllNote();
    const email = localStorage.getItem('email') as string;

    if (response.status === 200) {

        setNote_1(response.data);

        //filter use emailsetNotes(response.data)
        const filteredNotes = response.data.filter((note: Note) => note.userName === email);
        setNotes(filteredNotes);
    }
  }

  const showErrorAlert = (title: string, html: string) => {
    return MySwal.fire({
      title: `<strong>${title}</strong>`,
      html: `<i>${html}</i>`,
      icon: 'error',
      background: '#1F2937',
      color: '#F3F4F6',
      confirmButtonText: 'OK',
      confirmButtonColor: '#F59E0B',
      buttonsStyling: false,
      customClass: {
        container: 'dark',
        popup: 'bg-gray-800 rounded-xl border border-gray-700',
        title: 'text-2xl font-bold text-white',
        htmlContainer: 'text-gray-300',
        confirmButton: 'bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/20'
      }
    });
  };

  const filteredNotes = notes.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNote = () => {
    setCurrentNote(null);
    setFormData({ title: '', content: '' });
    setIsModalOpen(true);
  };

  const handleEditNote = (note: Note) => {
    setCurrentNote(note);
    setFormData({ title: note.title, content: note.content });
    setIsModalOpen(true);
  };

  const handleDeleteNote = async (id: string) => {
  console.log("dddddddddddd",id)

    const note:NoteDeleteForm = {
        _id: id
    }
    const response = await deleteNote(note);
    if (response.status === 200) {
      setNotes(notes.filter(note => note._id !== id));
      MySwal.fire({
        title: 'Success',
        text: 'Note deleted successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#1F2937',
        color: '#F3F4F6',
        confirmButtonColor: '#F59E0B',
      });
      loadAllNotes();
    } else {
      showErrorAlert('Error', response.message);
    }

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  const userId:string  = localStorage.getItem('userId') as string;
  const email:string = localStorage.getItem('email') as string;
    if (currentNote) {
      setNotes(notes.map(note =>
          note._id === currentNote._id
              ? { ...note, title: formData.title, content: formData.content, updatedAt: new Date() }
              : note
      ));
    } else {
      const newNote: Note = {
        _id:"",
        title: formData.title,
        content: formData.content,
        createdAt:"",
        userId:userId,
        userName: email
      };

      if(newNote.title != null && newNote.content != null){
       const response =  addNote(newNote)
        response.then((data) => {
          if (data.status === 200) {
            setNotes(prevNotes => [...prevNotes, data.data]);
            loadAllNotes();
            setFormData({ title: '', content: '' });
            MySwal.fire({
              title: 'Success',
              text: 'Note added successfully!',
              icon: 'success',
              confirmButtonText: 'OK',
              background: '#1F2937',
              color: '#F3F4F6',
              confirmButtonColor: '#F59E0B',
            });
          } else {
            showErrorAlert('Error', data.message);
          }
        }).catch((error) => {
          console.error("Error adding note:", error);
          showErrorAlert('Error', 'Failed to add note. Please try again.');
        });
      }

    }
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 overflow-y-hidden">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold">Your Notes</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search notes..."
                    className="bg-gray-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                  onClick={handleAddNote}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
              >
                <FiPlus />
                <span>Add Note</span>
              </button>
            </div>
          </div>

          {filteredNotes.length === 0 ? (
              <div className="text-center py-12 rounded-xl bg-gray-800">
                <div className="w-64 h-64 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                  <FiPlus className="text-4xl text-gray-500" />
                </div>
                <h3 className="text-xl font-medium mb-2">No notes found</h3>
                <p className="text-gray-400">
                  {searchTerm ? 'Try a different search term' : 'Create your first note by clicking the Add Note button'}
                </p>
              </div>
          ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNotes.map((note) => (
                    <motion.div
                        key={note._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-xl overflow-hidden shadow-lg bg-gray-800"
                    >
                      <div
                          className="h-2 w-full"
                          style={{ backgroundColor:'#E5E7EB' }}
                      />
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold line-clamp-1">{note.title}</h3>
                          <div className="flex space-x-2">
                            <button
                                onClick={() => handleEditNote(note)}
                                className="p-2 rounded-full hover:bg-gray-700"
                            >
                              <FiEdit2 className="text-blue-500" />
                            </button>
                            <button
                                onClick={() => handleDeleteNote(note._id)}
                                className="p-2 rounded-full hover:bg-gray-700"
                            >
                              <FiTrash2 className="text-red-500" />
                            </button>
                          </div>
                        </div>
                        <p className="mb-4 text-gray-300 line-clamp-3">
                          {note.content}
                        </p>
                        <p className="text-xs text-gray-500">
                          Last updated: {note.createdAt}
                        </p>
                      </div>
                    </motion.div>
                ))}
              </div>
          )}
        </main>

        {/* Note Modal */}
        <AnimatePresence>
          {isModalOpen && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                  onClick={() => setIsModalOpen(false)}
              >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="w-full max-w-md rounded-xl shadow-2xl bg-gray-800"
                    onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-4">
                      {currentNote ? 'Edit Note' : 'Add New Note'}
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-300">
                          Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Note title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block mb-2 font-medium text-gray-300">
                          Content
                        </label>
                        <textarea
                            name="content"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Write your note here..."
                            rows={5}
                            value={formData.content}
                            onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                        >
                          {currentNote ? 'Update Note' : 'Save Note'}
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}