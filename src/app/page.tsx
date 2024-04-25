import ButtonDetails from '@/components/functional/button';
import Image from 'next/image';
import styles from './home.module.css';
import Cards from '@/components/functional/cards';
import Slider from '@/components/functional/Slider';

export default function Home() {
  return (
    <main>
      <section>
        <Image
          src="/assets/superman.png"
          width={1956}
          height={897}
          alt="banner"
          className={`${styles.image}`}
        />

        <div className={`${styles.titleFilm} ${styles.position}`}>
          <h1 className="h1-48">Nome do filme</h1>
          <p className={`${styles.width} p-16`}>
            A jornada de Paul Atreides continua. Ele está determinado a buscar
            vingança contra aqueles que destruíram sua família e seu lar. Com a
            ajuda de Chani e dos Fremen, ele embarca em uma jornada espiritual,
            mística e marcial. Se torna Dib, o líder messiânico dos Fremen,
            enquanto luta para evitar um futuro sombrio que ele testemunhou em
            visões. No entanto, suas ações inadvertidamente desencadeiam uma
            Guerra Santa em seu nome, que se espalha pelo universo conhecido.
            Enquanto enfrenta escolhas difíceis entre o amor por Chani e o
            destino de seu povo, Paul precisa usar suas habilidades e
            conhecimentos para evitar o terrível futuro que previu.
          </p>

          <ButtonDetails text="ver detalhes" />
        </div>
      </section>

      <section className={`margin-64`}>
        <h3 className={`h3-32 container`}>Trading</h3>
        <Slider>
          <Cards title="" text="" image="" />
          <Cards title="" text="" image="" />
          <Cards title="" text="" image="" />
          <Cards title="" text="" image="" />
          <Cards title="" text="" image="" />
          <Cards title="" text="" image="" />
          <Cards title="" text="" image="" />
          <Cards title="" text="" image="" />
          <Cards title="" text="" image="" />
          <Cards title="" text="" image="" />
          <Cards title="" text="" image="" />
        </Slider>
      </section>
    </main>
  );
}
