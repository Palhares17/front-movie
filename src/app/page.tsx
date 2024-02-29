import Image from 'next/image';
import { Container } from '../LayoutComponent/Conteiner';

export default function Home() {
	return (
		<main>
			<Container>
				<section className='my-16'>
					<h1 className='text-5xl font-bold text-pretty'>
						Bem vindo, veja os filmes disponíveis.
					</h1>
				</section>
			</Container>
		</main>
	);
}
