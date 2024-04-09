import React, { useState, useEffect } from 'react';
import { itemsList } from './ItemsList';
import itemView from './Items';
// import and prepend the api url to any fetch calls
import apiURL from '../api';


export const App = () => {

	const [items, setitems] = useState([]);
	const [selectedItem, setSelectedItem] = useState(null);

	async function fetchitems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setitems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchitems();
	}, []);

	return (
		<main>	
      <h1>Items Store</h1>
      <h2>All things 🔥</h2>
	  <itemsList items={itemsList} onItemSelected={setSelectedItem} />
      {selectedItem && (
        <itemView itemId={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
		</main>
	)
}