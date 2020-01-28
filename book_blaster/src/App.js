import React from 'react';
import { Canvas } from 'react-three-fiber';
import Scene from './components/Scene/Scene';

const App = props => {
	return (
		<Canvas>
			<ambientLight/>
			<Scene/>
		</Canvas>
	)
}

export default App;
