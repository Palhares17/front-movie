'use client';

import styles from './styles.module.css';

export default function Trailer({ videoKey }: { videoKey: string }) {
  return (
    <div className={`container margin-32`}>
      <iframe
        width="640"
        height="480"
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
				className={styles.video}
      ></iframe>
    </div>
  );
}
