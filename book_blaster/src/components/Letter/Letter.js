import React, { useRef } from 'react'

function Letter(props){
	let letter = useRef()
	let mesh = (
		<mesh ref={letter} {...props}>
			<boxBufferGeometry attach="geometry" args={[1,1,1]}/>
		</mesh>
	)
	return <mesh/>
};

export default Letter