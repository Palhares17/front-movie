import React from 'react';
import { Container } from '../LayoutComponent/Conteiner';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className='border-b-2 border-gray-700'>
			<Container>
				<div className='flex justify-between py-4 items-center'>
					<h2 className='font-bold text-2xl'>
						<Link href="/" className='bg-gradient-to-r from-orange-100 to-orange-200 text-transparent bg-clip-text'>MyFilms</Link>
					</h2>

					<nav>
						<ul className='flex items-center gap-6'>
							<Link href="/category" className='font-semibold'>
								Categorias
							</Link>
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
};
