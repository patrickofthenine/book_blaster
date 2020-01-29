import React from 'react'

function Letter(props){
	let mesh = (
		<mesh 
			position={props.position}
		{...props}>
			<boxBufferGeometry attach="geometry" args={props.scale}/>
		</mesh>
	)
	return <mesh/>
};

export default Letter