import React from 'react';
import { useFrame } from 'react-three-fiber';
import Scene from './components/Scene/Scene';

const App = props => {
	return <Scene frame={useFrame}/>
}

export default App;
