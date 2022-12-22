import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
	<div className="container flex justify-center h-8 mx-auto">
		<ul className="items-stretch hidden font-bold space-x-3 md:flex">
			<li className="flex">
				<Link to='/'><a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Form</a></Link>
			</li>
			<li className="flex">
				<Link to='/table'><a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Table</a></Link>
			</li>
			
			
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
};

export default Navber;