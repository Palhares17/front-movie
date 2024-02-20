"use client";

import Link from 'next/link'
import React from 'react'
import { SearchForm } from '../searchForm'

export const Header = () => {
  return (
    <header className='px-16 py-5 flex justify-between items-center border-b border-solid border-gray-900 bg-black'>
      <Link href="/">
        <h1 className='font-bold text-xl'>My Movies</h1>
      </Link>
      <SearchForm />
      <ul>
        <li>
          <Link href="/categories" className='font-medium'>Categorias</Link>
        </li>
      </ul>
    </header>
  )
}