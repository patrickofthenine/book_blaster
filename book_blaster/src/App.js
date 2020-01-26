import React, { Component } from 'react'
import { Canvas } from 'react-three-fiber'
import Scene from './Scene/Scene'

class App extends Component {
	render(){
		return (
		      <Canvas>
			  		<ambientLight />
			      	<Scene/>
		      </Canvas>
		)
	}
}

export default App;
