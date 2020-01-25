import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

const Letter = (props) => {
	let mesh = useRef();
	let active = true;
	useFrame( ()=> (mesh.current.rotation.x = mesh.current.rotation.y += 0.01) )
	return (
		<mesh 
			{...props}
			ref={mesh}
			scale={active ? [2,2,2] : [1,1,1]}
		>
			<boxBufferGeometry attach="geometry" args={[1,1,1]}/>
			<meshStandardMaterial attach="material" color={active ? 'hotpink' : 'orange'}/>
		</mesh>
	)
}

export default Letter