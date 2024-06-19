import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingButtonUniversal from '../LoadingButtonUniversal';
import { RiDeleteBin5Line, RiEdit2Line, RiInformationLine } from 'react-icons/ri';
import BackButton from './BackButton';
import { useGlobalState } from '../../GlobalState';

const ManageAuthors = () => {
  const { state } = useGlobalState();
  const [name, setName] = useState('');
  let [description, setDescription] = useState('');
  const [message, setMessage] = useState('Add Author');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [loadingAuthors, setLoadingAuthors] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [authorToEdit, setAuthorToEdit] = useState(null);
  const [authorToDelete, setAuthorToDelete] = useState(null);
  const [confirmAuthorName, setConfirmAuthorName] = useState('');
  const [showHintModal, setShowHintModal] = useState(false);

  const sampleDescriptions = [
    "Rev. Matthew Asuquo is a dedicated minister of God, known for his passionate sermons and community service. He is happily married and enjoys traveling by road to explore new places and cultures. His commitment to faith and family is unwavering.",
    "Dr. Olowoyeye is a highly respected medical doctor with a wealth of experience in patient care. He is committed to improving healthcare and enjoys mentoring young medical professionals. In his free time, he loves reading medical journals and staying updated with advancements in medicine.",
  ];
  

  const token = sessionStorage.getItem('admin_token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    setLoadingAuthors(true);
    try {
      const response = await axios.get(`${state.baseUrl}/author`, {
        headers
      });
      setAuthors(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingAuthors(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(authorToEdit ? 'Update Author' : 'Add Author');
    setError(null);

    if (description.length < 200 || description.length > 250) {
      setError('Description must be between 200 and 250 characters.');
      setIsLoading(false);
      return;
    }

    try {
      if (authorToEdit) {
        await axios.put(`${state.baseUrl}/author/${authorToEdit._id}`, {
          name: authorToEdit.name, // Keep the existing name
          description
        }, {
          headers
        });
        setMessage('Author updated!');
      } else {
        await axios.post(`${state.baseUrl}/author`, {
          name,
          description
        }, {
          headers
        });
        setMessage('Author created!');
      }

      setName('');
      setDescription('');
      setAuthorToEdit(null);
      fetchAuthors(); // Refresh the list after adding/updating an author
    } catch (error) {
      setMessage(error.response ? error.response.data.message : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${state.baseUrl}/author/${authorToDelete._id}`, {
        headers
      });
      setMessage('Author deleted!');
      fetchAuthors(); // Refresh the list after deleting an author
      setShowModal(false); // Close the modal after deleting
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const openEditModal = (author) => {
    setAuthorToEdit(author);
    setName(author.name);
    setDescription(author.description);
  };

  const openDeleteModal = (author) => {
    setAuthorToDelete(author);
    setConfirmAuthorName('');
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setShowModal(false);
    setAuthorToDelete(null);
    setConfirmAuthorName('');
  };

  const getDescriptionBarStyle = () => {
    let length = description.length;
    let color = 'red';
    let width = (length / 250) * 100;

    if (length >= 200 && length <= 250) {
      color = 'green';
    } else if (length >= 100) {
      color = 'orange';
    }

    if (length > 250) {
      width = 100;
      description = description.slice(0, 250);
    }

    return { width: `${width}%`, backgroundColor: color };
  };

  const openHintModal = () => {
    setShowHintModal(true);
  };

  const closeHintModal = () => {
    setShowHintModal(false);
  };

  return (
    <div className="px-6 md:px-16 pt-24 pb-24">
      <div className="mx-auto mt-8 p-8 bg-white border shadow-md rounded-lg">
        <BackButton />
        <h2 className="mb-6 text-3xl font-semibold text-gray-600">{authorToEdit ? 'Edit Author' : 'Create Author'}</h2>
        {error && <p className="text-sm text-red-400 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-lg font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => { 
                setName(e.target.value); 
                setMessage(authorToEdit ? 'Update Author' : 'Add Author');
              }}
              placeholder="Enter author name"
              className="w-full outline-none bg-gray-100 border-none focus:border-none p-2 rounded-md focus:outline-none opacity-50 cursor-not-allowed"
              required
              disabled={!!authorToEdit} // Disable the name input when editing
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-semibold">Description</label>
            <textarea
              value={description}
              onChange={(e) => { 
                setDescription(e.target.value); 
                setMessage(authorToEdit ? 'Update Author' : 'Add Author'); 
                setError(null);
              }}
              placeholder="Enter description"
              className="w-full focus:border-none p-2 bg-gray-100 rounded-md"
              rows="4"
              maxLength={250}
              required
            ></textarea>
            <div className="w-full h-2 rounded-full bg-gray-300 mt-1">
              <div className="h-2 rounded-full" style={getDescriptionBarStyle()}></div>
            </div>
            <button 
              type="button" 
              onClick={openHintModal} 
              className="text-blue-500 mt-2 flex items-center"
            >
              <RiInformationLine className="mr-1" /> Show Sample Descriptions
            </button>
          </div>
          <button
            type="submit"
            className={`w-full py-2 mt-6 flex justify-center bg-darkShade text-white rounded-md shadow-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            <LoadingButtonUniversal
              text={message}
              loading={isLoading} />
          </button>
        </form>

        <h2 className="mb-6 mt-12 text-3xl font-semibold text-gray-600">Authors</h2>
        {loadingAuthors ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4 pl-0">
            {authors.map(author => (
              <div key={author._id} className="ml-0 flex items-center p-4 pt-6 bg-white rounded-md shadow-md relative">
                <div className="flex-grow">
                  <p className="text-xl font-medium text-gray-700">{author.name}</p>
                  <p className="text-gray-500 text-xs">{author.description}</p>
                </div>
                <button
                  onClick={() => openEditModal(author)}
                  className="text-blue-500 border-b-[0px] rounded-full bg-white p-4 shadow-md border-b-blue-700 absolute top-2 right-14"
                >
                  <RiEdit2Line />
                </button>
                {state.superAdmin && (
                  <button
                    onClick={() => openDeleteModal(author)}
                    className="text-red-500 border-b-[0px] rounded-full bg-white p-4 shadow-md border-b-red-700 absolute top-2 right-2"
                  >
                    <RiDeleteBin5Line />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-[0]">
            <div className="bg-white p-8 mx-3 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Confirm Deletion</h2>
              <p className="mb-4">Are you sure you want to delete the author <strong>{authorToDelete.name}</strong>? Please type the name of the author to confirm.</p>
              <input
                type="text"
                value={confirmAuthorName}
                onChange={(e) => setConfirmAuthorName(e.target.value)}
                placeholder="Type author name"
                className="w-full p-2 mb-4 border rounded-md focus:border-none"
              />
              <div className="flex justify-end">
                <button
                  onClick={closeDeleteModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className={`bg-red-500 text-white py-2 px-4 rounded-md ${confirmAuthorName !== authorToDelete.name ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={confirmAuthorName !== authorToDelete.name}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {showHintModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center z-[0]">
            <div className="bg-white p-8  shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sample Descriptions</h2>
              <ul className="">
                {sampleDescriptions.map((desc, index) => (
                  <li key={index} className="mb-2 italic text-gray-900">{desc}</li>
                ))}
              </ul>
              <div className="flex justify-end">
                <button
                  onClick={closeHintModal}
                  className="bg-darkShade text-white py-2 px-4 rounded-md mr-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAuthors;
