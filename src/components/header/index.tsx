import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header>
      <h1>My Movies</h1>
      <ul>
        <li>
          <Link href="/categories">Categorias</Link>
        </li>
      </ul>
    </header>
  )
}
