import React, { useRef, useState } from 'react';
import Letter from './Letter/Letter';

const Letters = (props) => {
	let letters = useRef();
	let meshes = props.letters.map( letter => {
		return <Letter key={letter.id} {...letter} />
	})
	
	letters.current = useState({'letters':meshes})

	return (
		<letters ref={letters} {...letters.current} />
	)
}

export default Letters;