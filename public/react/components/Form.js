import React, { useState } from 'react';

// function for the form
function ItemForm({initialState}) {
    const [formState, setFormState] = useState(initialState || {
        name: '',
        description: '',
        price: '',
        image: '',
      });

// add your change event so that whatever field is typed into or updated is correctly updated.
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

// add your submit event so that you prevent default browser behavior, send POST request, and clear inputs after submit
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(initialState ? `/api/items/${initialState.id}` : '/api/items', {
        method: initialState ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      const data = await response.json();
      console.log(data);
  
      setFormState({
        name: '',
        description: '',
        price: '',
        image: '',
      });
    } catch(error){
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" onChange={handleChange} />
      </label>
      <input type="submit" value="Add Item" />
    </form>
  );
}

export default ItemForm;