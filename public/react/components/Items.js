import React, {useState, useEffect} from 'react';
import apiURL from '../api';


const itemView = ({ itemId, onClose }) => {
  const [item, setItem] = useState(null);

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
      <button onClick={() => deleteItem(item.id)}>Delete</button>   
      <button onClick={onClose}>Close</button>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      {/* Add more item details here */}
    </div>
  );
};

export default itemView;

