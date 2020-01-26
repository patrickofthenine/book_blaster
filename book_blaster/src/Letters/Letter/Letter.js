import React, { useRef } from 'react'

const Letter = (props) => {
	let letter = useRef();
	let config = props
	return (
		<letter ref={letter} {...config}>
			<boxBufferGeometry attach="geometry" args={config.scale}/>
			<meshStandardMaterial attach="material" color={config.color}/>
		</letter>
	)
};

export default Letter