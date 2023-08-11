import React from 'react';
import styles from './ImageCard.module.css';

export const ImageCard = ({ img, alt, txt, txt2 }) => {
  return (
    <figure className={styles.fig}>
      <img src={img} alt={alt} />
      <figcaption>
        <p>{txt}</p>
        <p>{txt2}</p>
      </figcaption>
    </figure>
  );
};

export default ImageCard;
