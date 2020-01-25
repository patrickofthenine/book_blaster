import React from 'react'
import { Canvas } from 'react-three-fiber'
import Scene from './Scene/Scene'

const App = (props) => {
  return (
      <Canvas>
          <Scene/>
      </Canvas>
  )
}

export default App;
