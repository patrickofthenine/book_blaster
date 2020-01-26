import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import Letters from '../Letters/Letters';

const Scene = () => {
	const getGroupings = (blob) => {
		blob = ( typeof(blob) === 'string' ) ? blob : false;
		return blob
			.split('\n')
			.map( (group)=>{ return group.trim().split(' ') } )
			.flat()
			.filter( (g)=>{ if(g.length > 0){return g}; return; });
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
			let colors = ['blue', 'green', 'orange', 'red'];
			let pool = [true, false, false, true, true, false];

			//generate IDs
			let id = Math.floor( (1000**Math.random()*1000**Math.random()) * (10**10) )
			while(ids.indexOf(id)>-1){
				id = Math.floor( (1000**Math.random()*1000**Math.random()) * (10**10) )
			}
			ids.push(id);

			//config parameters
			let active = pool[Math.floor(Math.random()*( pool.length))]
			let value = char;
			let max = unconfigured.length;
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
				3*Math.floor(2*Math.random())+1, 
				3*Math.floor(2*Math.random())+1, 
				3*Math.floor(2*Math.random())+1
			];
			return {
				active: 	active,
				color: 		color,
				id: 		id,
				position: 	position,
				scale: 		scale,
				value: 		value,
			};
		});
		return configured;
	};

	const rotateMeshes = () => {
		let rotated = sceneState.letters.map( (mesh)=>{
			let spin = Math.random()
			while(mesh.position){
				mesh.position += spin;
			};
		});
		return setSceneState({'letters':rotated});
	};

	const text = `
		I am aware that down to the present time, the fish styled Lamatins and
		Dugongs (Pig-fish and Sow-fish of the Coffins of Nantucket) are
		included by many naturalists among the whales. But as these pig-fish
	`;
	const words 	= generateConfigs(getGroupings(text));
	const letters = generateConfigs(getSingles(text));

	const [sceneState, setSceneState] = useState({
		letters: letters
	});
	
	useFrame( ()=> {rotateMeshes() })
	return(
		<Letters letters={sceneState.letters}>
		</Letters>
	);
}

export default Scene;