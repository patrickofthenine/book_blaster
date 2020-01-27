import React, { useRef } from 'react';
import Letter from './Letter/Letter';

const Letters = props => {
	let letters = props.letters.map( letter => { 
		return <Letter position={letter.position} key={letter.key} letter={letter}/>
	})
	
	return (
		<div>
			{letters}
		</div>
	)
}

export default Letters;