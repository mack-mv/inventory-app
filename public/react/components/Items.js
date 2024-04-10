import React, {useState, useEffect} from 'react';
import apiURL from '../api';
import ItemForm from './Form';


// Alex - added onDelete and onUpdate to the props
const ItemView = ({ itemId, onClose, onDelete, onUpdate }) => {
  const [item, setItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(!isEditing);
  
  useEffect(() => {
    const fetchItem = async () => {
      
        const response = await fetch(`${apiURL}/items/${itemId}`);
        const itemData = await response.json();
        setItem(itemData);
       
    };

    fetchItem();
  }, [itemId]); 

  if (!item) {
    return <div>Loading...</div>;
  }
// Alex - added deleteItem function
  return (
    <div className='modal'>
      <button onClick={() => onDelete(item.id)}>Delete</button>   
      <button onClick={onClose}>Close</button>
      {isEditing ? (
            <ItemForm initialState={item}
              onSave={item => {
              onUpdate(item);
              setIsEditing(false);
            }
            }/>
          ) : (
            <>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <button onClick={handleEdit}>Edit</button>
            </>
          )}
        </div>
  );
};

export default ItemView;

