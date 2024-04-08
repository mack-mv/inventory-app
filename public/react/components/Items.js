import React, {useState, useEffect} from 'react';
import apiURL from '../api';





const ItemView = ({ sauceId, onClose }) => {
  const [sauce, setSauces] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      
        const response = await fetch(`${apiURL}/sauces/${sauceId}`);
        const itemData = await response.json();
        setSauces(itemData);
       
    };

    fetchItem();
  }, [sauceId]); 

  if (!sauce) {
    return <div>Loading...</div>;
  }

  return (
    <div className='modal'>
      <button onClick={onClose}>Close</button>
      <h1>{sauce.name}</h1>
      <p>{sauce.description}</p>
      {/* Add more item details here */}
    </div>
  );
};

export default ItemView;

