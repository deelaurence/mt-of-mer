import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingButtonUniversal from '../LoadingButtonUniversal';
import { RiDeleteBin5Line } from 'react-icons/ri';
import BackButton from './BackButton';
import { useGlobalState } from '../../GlobalState';

const CreatePaymentTag = () => {
  const {state}= useGlobalState()
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('Add Tag');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentTags, setPaymentTags] = useState([]);
  const [loadingTags, setLoadingTags] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tagToDelete, setTagToDelete] = useState(null);
  const [confirmTagName, setConfirmTagName] = useState('');

  const token = sessionStorage.getItem('admin_token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  useEffect(() => {
    fetchPaymentTags();
  }, []);

  const fetchPaymentTags = async () => {
    setLoadingTags(true);
    try {
      const response = await axios.get(`${state.baseUrl}/admin/payment-tags`, {
        headers
      });
      setPaymentTags(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingTags(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('Add Tag');
    setError(null);

    try {
      await axios.post(`${state.baseUrl}/admin/payment-tags`, {
        tag,
        description
      }, {
        headers
      });

      setMessage('Tag created!');
      setTag('');
      setDescription('');
      fetchPaymentTags(); // Refresh the list after adding a new tag
    } catch (error) {
      setMessage(error.response ? error.response.data.message : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${state.baseUrl}/admin/payment-tags/${tagToDelete._id}`, {
        headers
      });
      setMessage('Tag deleted!');
      fetchPaymentTags(); // Refresh the list after deleting a tag
      setShowModal(false); // Close the modal after deleting
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const openModal = (tag) => {
    setTagToDelete(tag);
    setConfirmTagName('');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTagToDelete(null);
    setConfirmTagName('');
  };

  return (
    <div className="px-6  md:px-16 pt-24 pb-24">
      <div className="mx-auto mt-8 p-8 bg-white border shadow-md rounded-lg">
        
        <BackButton/>
        <h2 className="mb-6 text-3xl font-semibold text-gray-600">Create Payment Tag</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-lg font-semibold">Tag</label>
            <input
              type="text"
              value={tag}
              onChange={(e) => { setTag(e.target.value); setMessage('Add Tag') }}
              placeholder="Enter tag name"
              className="w-full outline-none bg-gray-100 border-none focus:border-none p-2 rounded-md focus:outline-none "
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-semibold">Description</label>
            <textarea
              value={description}
              onChange={(e) => { setDescription(e.target.value); setMessage('Add Tag') }}
              placeholder="Enter description"
              className="w-full focus:border-none p-2 bg-gray-100 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-2 mt-6 flex justify-center bg-blue-500 text-white rounded-md shadow-md ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            <LoadingButtonUniversal
              text={message}
              loading={isLoading} />
          </button>
        </form>

        <h2 className="mb-6 mt-12 text-3xl font-semibold text-gray-600">Payment Tags</h2>
        {loadingTags ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4 pl-0">
            {paymentTags.map(tag => (
              <div key={tag._id} className="ml-0 flex items-center p-4 pt-6 bg-white rounded-md shadow-md relative">
                <div className="flex-grow">
                  <p className="text-xl font-medium text-gray-700">{tag.tag}</p>
                  <p className="text-gray-500 text-xs">{tag.description}</p>
                </div>
                <button
                  onClick={() => openModal(tag)}
                  className="text-red-500 border-b-[0px] rounded-full bg-white p-4 shadow-md border-b-red-700 absolute top-2 right-2 "
                >
                  <RiDeleteBin5Line/>
                </button>
              </div>
            ))}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-[0]">
            <div className="bg-white p-8 mx-3 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Confirm Deletion</h2>
              <p className="mb-4">Are you sure you want to delete the tag <strong>{tagToDelete.tag}</strong>? Please type the name of the tag to confirm.</p>
              <input
                type="text"
                value={confirmTagName}
                onChange={(e) => setConfirmTagName(e.target.value)}
                placeholder="Type tag name"
                className="w-full p-2 mb-4 border rounded-md focus:border-none"
              />
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className={`bg-red-500 text-white py-2 px-4 rounded-md ${confirmTagName !== tagToDelete.tag ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={confirmTagName !== tagToDelete.tag}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePaymentTag;
