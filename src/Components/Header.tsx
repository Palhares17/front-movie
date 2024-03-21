'use client';

import React from 'react';
import { Container } from '../LayoutComponent/Conteiner';
import Link from 'next/link';
import { BackgroundNav } from '@/LayoutComponent/BackgroundNav';
import styles from './Header.module.css';

export const Header = () => {
	// const [isOpen, setIsOpen] = React.useState(false);

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

					<button className={styles.Button} >
						<div className='flex flex-col gap-2 items-end px-6'>
							<span className={styles.menu}></span>
						</div>
					</button>
				</div>
			</Container>
		</header>
	);
};
