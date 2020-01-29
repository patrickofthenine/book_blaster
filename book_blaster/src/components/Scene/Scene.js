import React, { useRef, useState, setState } from 'react';
import { useFrame } from 'react-three-fiber';
import Letter from '../Letter/Letter';
import Box from '../Letter/Box';
import Letters from '../../hoc/Letters';


const Scene = props => {
	const getBox = (config) => {
		return <Box {...config}/>
	}

	const getLetters = (configs) => {
		let letters = (configs) ? configs : props.configs
		return letters.map( (letter)=>{
			return <Letter {...letter}/>
		})
	}
	const getNewColor = (config) => {
		let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
		let index = Math.floor(colors.length* Math.random())
		return colors[index];
	};

	const getNewScale = () => {
		let scales = [
			[2,2,1],
			[4,3,2],
			[3,2,3],
			[2,1,2],
			[3,3,3],
			[5,3,4],
		]
		let index = Math.floor(scales.length* Math.random())
		return scales[index]
	}

	const updateBox = () => {
		if (boxState.config) {
			console.log(boxState.config, sceneState)
			if (sceneState.currentFrameNumber - boxState.config.updated > 30){
				let config = {
					position: [0,-5,-5],
					scale: getNewScale(),
					color: getNewColor(),
					updated: sceneState.currentFrameNumber,
				}
				setBoxState({
					box: getBox(config),
					config: config
				})
			}
		} else {
			let defaultConfig = {
				position: [0,0,-5],
				scale: [2,2,2],
				color: 'blue',
				updated: sceneState.currentFrameNumber,
			};
			setBoxState({
				box: getBox(defaultConfig),
				config: defaultConfig
			});
		}
	};

	const updateScene = () => {
		setSceneState({
			currentFrameNumber: sceneState.currentFrameNumber+1	
		})
	}

	//// states
	const [sceneState, setSceneState] = useState({
		currentFrameNumber: 0,
	})

	const [boxState, setBoxState] = useState({
		box: null,
		config: null,
		configs: props.configs,
	});

	/// one box
	let boxyBrown = null
	if(boxState.box){
		boxyBrown = (
			<Letters>
				<Box {...boxState.config}/>
			</Letters>
		)
	}

	//// many boxes
	let boxes = null;
	if(boxState.configs){
		boxes = (
			<letters>
				{	
					boxState.configs.map( (config)=> {
						return <Box {...config}/>

					})
				}
			</letters>
		)
	}

	useFrame( ()=>{ 
		updateScene()
		updateBox() 
	})
	return (
		<ambientLight>
		{boxyBrown}
		</ambientLight>
	)
}

export default Scene;
