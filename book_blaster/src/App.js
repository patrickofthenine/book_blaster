import React, { Component } from 'react'
import { Canvas } from 'react-three-fiber'
import Scene from './components/Scene/Scene'

class App extends Component {
	render(){
		return (
		      <Canvas>
			  		<ambientLight />
			  		<pointLight position={[10, 10, 10]} />
			      	<Scene/>
		      </Canvas>
		)
	}
}

export default App;
