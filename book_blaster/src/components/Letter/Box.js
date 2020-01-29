import React from 'react';

function Box(props) {
  // This reference will give us direct access to the mesh
  return (
    <mesh {...props}>
      <boxBufferGeometry attach="geometry" args={props.scale} />
      <meshStandardMaterial attach="material" color={props.color}/>
    </mesh>
  )
}

export default Box;