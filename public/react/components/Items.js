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

  return (
    <div className='modal'>
      <button onClick={onClose}>Close</button>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      {/* Add more item details here */}
    </div>
  );
};

export default itemView;

