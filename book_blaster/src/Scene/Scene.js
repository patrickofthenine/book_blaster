import React, { useState, setState } from 'react';
import Letter from '../Letter/Letter';

const Scene = (props) => {
	let text = `
		I am aware that down to the present time, the fish styled Lamatins and
		Dugongs (Pig-fish and Sow-fish of the Coffins of Nantucket) are
		included by many naturalists among the whales. But as these pig-fish
		are a noisy, contemptible set, mostly lurking in the mouths of rivers,
		and feeding on wet hay, and especially as they do not spout, I deny
		their credentials as whales; and have presented them with their
		passports to quit the Kingdom of Cetology.
	`;

	const getGroups = (blob) => {
		blob = ( typeof(blob) === 'string' ) ? blob : false;
		return blob
			.split('\n')
			.map( (group)=>{ return group.trim().split(' ') } )
			.flat()
			.filter( (g)=>{ if(g.length > 0){return g} });
	};

	const getSingles = (blob) => {
		let groups = ( Array.isArray(blob) ) ? blob : getGroups(blob);
		if (groups){
			return groups.map( (group)=> { 
				return group.split('');
			}).flat();
		}
		return;
	}
	let blob;
	let groups;
	let singles;

	blob 	= (blob) 	? blob 				: text;
	groups 	= (blob) 	? getGroups(blob) 	: false;
	singles = (groups) 	? getSingles(text) 	: false;

	return (
		<ambientLight>
		<Letter/> 
		</ambientLight>
	);
}

export default Scene;