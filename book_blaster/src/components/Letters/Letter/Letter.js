import React, { useRef } from 'react'

const Letter = props => {
	let letter = useRef();
	let mesh = (
		<letter ref={letter} position={props.position}>
			<boxBufferGeometry 		attach="geometry" args={props.scale}/>
			<meshStandardMaterial 	attach="material" color={props.color}/>
		</letter>
	)
	return (
		<letter/>
	);
};

export default Letter