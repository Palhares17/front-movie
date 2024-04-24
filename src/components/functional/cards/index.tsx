import Image from 'next/image';
import styles from './styles.module.css';

interface TypeCard {
  title: string;
  text: string;
  image: string;
}

export default function Cards({ title, text, image }: TypeCard) {
  return (
    <div className={`margin-32 ${styles.card}`}>
      <Image
        src="/assets/superman.png"
        alt="Picture of the author"
        width={300}
        height={380}
        className={`${styles.image} ${styles.hover}`}
      />
      <h4 className={styles.nameFilm}>Nome do filme</h4>
      <p className={styles.category}>Comédia | 2024</p>
    </div>
  );
}
