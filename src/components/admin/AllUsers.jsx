import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalState } from '../../GlobalState';
import BackButton from './BackButton';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { state } = useGlobalState();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = sessionStorage.getItem('admin_token');

      try {
        const response = await axios.get(`${state.baseUrl}/admin/users`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setUsers(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  const generateRandomColor = () => {
    const colors = [
      'bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="px-6 bg-darkShade md:px-16 pt-24 pb-24">
      <div className="mx-auto mt-8 p-2 py-12 bg-lightShade border shadow-md rounded-lg">
          <BackButton/>  
        <h2 className="mb-6 px-4 py-6 text-6xl  font-semibold text-gray-600">Active Users.</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <ul className="space-y-4">
          {users.map(user => (
            <li key={user.id} className="flex items-center p-4  rounded-md ">
              <div className={`w-[40px] h-[40px] flex items-center justify-center rounded-full text-white font-bold text-lg ${generateRandomColor()}`}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="ml-4">
                <p className="text-xl font-medium text-gray-700">{user.name}</p>
                <p className="text-gray-500 text-xs">{user.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
