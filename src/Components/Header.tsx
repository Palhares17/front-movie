import React from 'react';
import { Container } from '../LayoutComponent/Conteiner';
import Link from 'next/link';
import { BackgroundNav } from '@/LayoutComponent/BackgroundNav';

export const Header = () => {
	return (
		<header className='my-6'>
			<Container>
				<div className='flex justify-between py-4 items-center'>
					<BackgroundNav>
						<h2 className='font-bold text-2xl'>
							<Link href="/" className='bg-gradient-to-r from-orange-100 to-orange-200 text-transparent bg-clip-text px-6'>MyFilms</Link>
						</h2>
					</BackgroundNav>

					<BackgroundNav>
						<nav>
							<ul className='flex items-center gap-6 px-8'>
								<Link href="/" className='font-semibold'>
									início
								</Link>
								<Link href="/movie" className='font-semibold'>
									filmes
								</Link>
								<Link href="/series" className='font-semibold'>
									séries
								</Link>
								<Link href="/category" className='font-semibold'>
									Categorias
								</Link>
							</ul>
						</nav>
					</BackgroundNav>

					<BackgroundNav>
						<button className='flex flex-col gap-1 items-end px-6'>
							<span className='inline-block w-6 bg-white border-white h-[2px]'></span>
							<span className='inline-block w-4 bg-white border-white h-[2px]'></span>
						</button>
					</BackgroundNav>
				</div>
			</Container>
		</header>
	);
};
