import React, { useEffect, useMemo, useState } from 'react';
import { getUsersService } from './services/userService';

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const getUsersPlaceholder = async () => {
    const usersData = await getUsersService();
    setUsers(usersData);
  }

  const showDetail = (name, address) => {
    alert(`nombre ${name} Dirección ${address.street}`);
  }

  const filterUsers = useMemo(() => {
    return users.filter((user) => user.name.toUpperCase().includes(filter.toUpperCase()));
  }, [users, filter]);

  useEffect(() => {
    getUsersPlaceholder();
    return () => {
      setUsers([]);
    }
  }, []);

  return (
    <div>
      <input type="text" value={filter} onChange={(ev) => setFilter(ev.target.value) } />
      <ul>
        {Object.keys(users).map((key, user) => {
          const { name, email, address } = users[user];
          return <div key={key}>
              <li>{name} - {email}</li>
              <button onClick={() => showDetail(name,address)}>Details</button>
          </div>
        })}
      </ul>
      <ul>
        {filterUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
  </div>
  );
}

export default App;