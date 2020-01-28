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
      onPointerOut={e => setHover(false)}>
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
			console.log(position)
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

	const rotateLetters = () => {
		let rotated = sceneState.letters.map( (letter)=>{
			console.log('letter', letter)
			return letter;
		});
		return setSceneState({'letterConfigs':rotated})
	};

	const getLetters = (configs) => { 
			configs = (configs) ? configs : sceneState.letterConfigs;
			return configs.map( (config) => {
				return <Letter position={[5,5,-10]} {...config}/>
			})
	};
	const text = `
		CHAPTER 1. Loomings.
		Call me Ishmael. 
	`;

	const startupConfigs = generateConfigs(getSingles(text));
	const startupLetters = getLetters(startupConfigs);
	const [sceneState, setSceneState] = useState({
		letterConfigs: startupConfigs,
		letters: startupLetters
	});

	useFrame( ()=>{ rotateLetters() });

	let scene = useRef()
	let letters = getLetters()
	console.log('letters', letters)
	return (
		<scene>
		{letters}
		</scene>
	)
}

export default Scene;