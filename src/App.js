import React, { useState } from 'react';

const App = () => {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      setNames(names.map((n, i) => (i === editingIndex ? name : n)));
      setEditingIndex(null);
    } else {
      setNames([...names, name]);
    }
    setName('');
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setName(names[index]);
  };

  const handleDelete = (index) => {
    setNames(names.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Names List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {names.map((n, index) => (
          <li key={index}>
            {n} &nbsp;
            <button onClick={() => handleEdit(index)}>Edit</button> &nbsp;
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;