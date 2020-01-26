import React, { useRef } from 'react';
import Letter from './Letter/Letter';

const Letters = (props) => {
	let letters = useRef();
	let meshes = props.letters.map( letter => {
		return <Letter key={letter.id} {...letter} />
	})

	return (
		<letters ref={letters}>
			{meshes}
		</letters>
	)
}

export default Letters;