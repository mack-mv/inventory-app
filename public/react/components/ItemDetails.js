import React, { useState, useEffect } from 'react';
import api from '../api';

function ItemDetails({ match }){
    const [item, setItem] = useState({});

    useEffect(() => {
        const fetchItemDetails = async () => {
        const response = await api.get(`/items/${match.params.id}`);
        setItem(response.data);
        }
        fetchItemDetails();
    },[match.params.id]);

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
        <img src={item.image} alt={item.name} />
        </div>
    );
}

export default ItemDetails;