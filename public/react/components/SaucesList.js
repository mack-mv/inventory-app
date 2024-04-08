import React from 'react';
import { Sauce } from './Sauce';

export const SaucesList = ({sauces, onItemSelected}) => {
	return <>
	<div>
      {sauces.map(sauce => (
        <div key={sauce.id}>
          <a href="#" onClick={() => onItemSelected(sauce.id)}>
            {sauce.name}
          </a>
        </div>
      ))}
    </div>
		{/* {
			sauces.map((sauce, idx) => {
				return <Sauce sauce={sauce} key={idx} />
			})
		} */}
	</>
} 
