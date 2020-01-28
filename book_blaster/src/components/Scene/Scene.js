import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import Letter from '../Letter/Letter';

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

const Scene = props => {
	const getGroupings = (blob) => {
		blob = ( typeof(blob) === 'string' ) ? blob : false;
		return blob
			.split('\n')
			.map( (group)=>{ return group.trim().split(' ') } )
			.flat()
			.filter( (g)=>{ 
				if(g.length > 0){return g};
				return false;
			});
	};

	const getSingles = (blob) => {
		let groups = ( Array.isArray(blob) ) ? blob : getGroupings(blob);
		if (groups){
			return groups.map( (group)=> { 
				return group.split('');
			}).flat();
		}
		return;
	};

	/*
	* Generates a random config for each item in unconfigured array
	*/
	const generateConfigs = (unconfigured) => {
		let ids = [];
		let configured = unconfigured.map( (char)=> {
			//generate IDs
			let id = Math.floor( (1000**Math.random()*1000**Math.random()) * (10**10) )
			while(ids.indexOf(id)>-1){
				id = Math.floor( (1000**Math.random()*1000**Math.random()) * (10**10) )
			}
			ids.push(id);

			//config parameters
			let colors = ['blue', 'green', 'orange', 'red'];
			let pool = [true, false];
			let active = pool[Math.floor(Math.random()*( pool.length))]
			let value = char;
			let max = 7;
			let position = [];
			let i = 0;
			while(i<3){ //3 for x,y,z
				let useNegative = pool[Math.floor(Math.random()*(pool.length))]
				let coordinate = (useNegative) ? -1*Math.floor(max*Math.random()) : Math.floor(max*Math.random())
				position.push(coordinate)
				i++;
			}
			
			let color = colors[Math.floor(Math.random()*colors.length )]
			let scale = [
				2*Math.floor(2*Math.random())+1, 
				2*Math.floor(2*Math.random())+1, 
				2*Math.floor(2*Math.random())+1
			];
			return {
				visible: 	active,
				color: 		color,
				key: 		id,
				position: 	position,
				scale: 		scale,
				value: 		value,
			};
		});
		return configured;
	};

	const getLetters = (configs) => { 
		configs = (configs) ? configs : sceneState.letters
		return configs.map( (config) => {
			return <Letter {...config}/>
		})
	};

	const updateLetters = () => {
		let letters = getLetters()
		let updated = letters.map( (letter)=>{
			/*
			* 
			*/
		})	
		return setSceneState({letters:updated})
	}

	const text = `
		CHAPTER 1. Loomings.
		Call me Ishmael. 
	`;

	const startupConfigs = generateConfigs(getSingles(text));
	
	let letters = getLetters(startupConfigs);
	const [sceneState, setSceneState] = useState({
		letters: letters
	});
	
	let scene = useRef()
	useFrame( ()=>{ updateLetters() } )
	return (
		<scene>
		{sceneState.letters}
		</scene>
	)
}

export default Scene;