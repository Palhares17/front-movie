import React from 'react'

export const SearchForm = () => {
  const [query, setQuery] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
  }

  return (
    <input
      type="text"
      name="search"
      id="search"
      value={query}
      onChange={handleInputChange}
      placeholder="Busque um filme"
      className='border-2 border-solid rounded-full border-gray-900 px-4 py-2 w-96 bg-gray-800 text-white focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out'
    />
  )
}
