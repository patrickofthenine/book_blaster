import React, { useRef, useState } from 'react'

const Letter = (props) => {
	let letter = useRef();
	letter.current = useState(props)
	
	return (
		<letter key={letter.current.id} ref={letter} {...letter.current}>
			<boxBufferGeometry attach="geometry" args={letter.current.scale}/>
			<meshStandardMaterial attach="material" color={letter.current.color}/>
		</letter>
	)
};

export default Letter