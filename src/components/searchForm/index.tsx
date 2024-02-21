'use client';

import { Link, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { type FormEvent, useState } from 'react';

export const SearchForm = () => {
	const [query, setQuery] = useState('');
	const router = useRouter();

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		// Console.log((event.target as HTMLFormElement)["search"].value);

		router.push(`/searchMovie/${query}`);
	};

	return (
		<form className='relative' onSubmit={handleFormSubmit}>
			<input
				type='text'
				name='search'
				id='search'
				value={query}
				onChange={event => {
					setQuery(event.target.value);
				}}
				placeholder='Busque um filme'
				className='border-2 border-solid rounded-full border-gray-900 px-4 py-2 w-96 bg-gray-800 text-white focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out relative z-0 placeholder-gray-400'
			/>
			<Search
				className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-cover'
				size={24}
				color='rgb(156 163 175)'
			/>
		</form>
	);
};
