import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import Letter from '../Letter/Letter';


const Scene = props => {

	const getLetters = (configs) => {
		let letters = (configs) ? configs : sceneState.configs
		return letters.map( (letter)=>{
			return <Letter {...letter}/>
		})
	}

	//
	const [sceneState, setSceneState] = useState({
		configs: props.configs,
	});

	//useFrame( ()=>{ } )
	let meshes = (
		<mesh> 
		{ 
			sceneState.configs.map( (config)=>{
				return <Letter {...config}/>
			})
		} 
		</mesh>
	)

	// returning a <Box/> from below works...but not our meshes - :/
	return (
		<ambientLight>
		{meshes}
		<Box/>
		</ambientLight>
	)
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  
  return (
    <mesh
      ref={mesh}
     >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
    </mesh>
  )
}

export default Scene;