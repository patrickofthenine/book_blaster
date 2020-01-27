import React from 'react';
import Letter from './Letter/Letter';

const Letters = (props) => {
	let meshes = props.letters.map( letter => {
		return <Letter {...letter} />
	})
	
	return (
		<letters>
		{meshes}
		</letters>
	)
}

export default Letters;