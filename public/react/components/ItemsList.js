import React from 'react';
import { Items } from './Items';

export const ItemsList = ({items, onItemSelected}) => {
	return <>
	<div>
      {items.map(item => (
        <div key={item.id}>
          <a href="#" onClick={() => onItemSelected(item.id)}>
            {item.name}
          </a>
        </div>
      ))}
    </div>
		
	</>
} 
