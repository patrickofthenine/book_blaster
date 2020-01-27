import React, { useRef } from 'react'

const Letter = (props) => {
	let letter = useRef()
	return (
		<letter ref={letter} {...props}></letter>
	)
};

export default Letter