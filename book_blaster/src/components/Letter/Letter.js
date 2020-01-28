import React from 'react'

function Letter(props){
	console.log('props', props.scale)
	let mesh = (
		<mesh {...props}>
			<boxBufferGeometry attach="geometry" args={[2,2,2]}/>
		</mesh>
	)
	return <mesh/>
};

export default Letter