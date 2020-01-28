import React from 'react'

function Letter(props){
	let mesh = (
		<mesh {...props}>
			<boxBufferGeometry attach="geometry" args={[1,1,1]}/>
		</mesh>
	)
	return <mesh/>
};

export default Letter