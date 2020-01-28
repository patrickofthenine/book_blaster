import React from 'react'

function Letter(props){
	let mesh = (
		<letter {...props}>
			<boxBufferGeometry attach="geometry" args={props.scale}/>
		</letter>
	)
	return <mesh/>
};

export default Letter