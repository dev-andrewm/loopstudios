import styles from './Home.module.css';
import imageInteractive from '../../../img/desktop/image-interactive.jpg';
import deepEarth from '../../../img/desktop/image-deep-earth.jpg';
import nightArcade from '../../../img/desktop/image-night-arcade.jpg';
import soccerTeam from '../../../img/desktop/image-soccer-team.jpg';
import grid from '../../../img/desktop/image-grid.jpg';
import fromAbove from '../../../img/desktop/image-from-above.jpg';
import pocketBorealis from '../../../img/desktop/image-pocket-borealis.jpg';
import curiosity from '../../../img/desktop/image-curiosity.jpg';
import fisheye from '../../../img/desktop/image-fisheye.jpg';

import deepEarthM from '../../../img/mobile/image-deep-earth.jpg';
import nightArcadeM from '../../../img/mobile/image-night-arcade.jpg';
import soccerTeamM from '../../../img/mobile/image-soccer-team.jpg';
import gridM from '../../../img/mobile/image-grid.jpg';
import fromAboveM from '../../../img/mobile/image-from-above.jpg';
import pocketBorealisM from '../../../img/mobile/image-pocket-borealis.jpg';
import curiosityM from '../../../img/mobile/image-curiosity.jpg';
import fisheyeM from '../../../img/mobile/image-fisheye.jpg';

import ImageCard from '../../layout/imageCard/ImageCard';

const Home = ({ isSmallScreen }) => {
  const imgs = [
    {
      imgDesktop: deepEarth,
      imgMobile: deepEarthM,
      alt: 'deep earth',
      txt: 'deep',
      txt2: 'earth',
    },
    {
      imgDesktop: nightArcade,
      imgMobile: nightArcadeM,
      alt: 'night arcade',
      txt: 'night',
      txt2: 'arcade',
    },
    {
      imgDesktop: soccerTeam,
      imgMobile: soccerTeamM,
      alt: 'soccer team VR',
      txt: 'soccer',
      txt2: 'team vr',
    },
    {
      imgDesktop: grid,
      imgMobile: gridM,
      alt: 'the grid',
      txt: 'the',
      txt2: 'grid',
    },
    {
      imgDesktop: fromAbove,
      imgMobile: fromAboveM,
      alt: 'from up above VR',
      txt: 'from up',
      txt2: 'above vr',
    },
    {
      imgDesktop: pocketBorealis,
      imgMobile: pocketBorealisM,
      alt: 'pocket borealis',
      txt: 'pocket',
      txt2: 'borealis',
    },
    {
      imgDesktop: curiosity,
      imgMobile: curiosityM,
      alt: 'the curiosity',
      txt: 'the',
      txt2: 'curiosity',
    },
    {
      imgDesktop: fisheye,
      imgMobile: fisheyeM,
      alt: 'make it fisheye',
      txt: 'make it',
      txt2: 'fisheye',
    },
  ];

  return (
    <div className={styles.main_container}>
      <section className={styles.interactive_container}>
        <div className={styles.img_container}>
          <img src={imageInteractive} alt="imagem iterativa" />
        </div>
        <div className={styles.info_container}>
          <h2>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section className={styles.creations_container}>
        <div className={styles.title_container}>
          <h2>Our creations</h2>
          <button>See all</button>
        </div>
        <div className={styles.imgs_container}>
          {imgs.map((img, index) => {
            return (
              <ImageCard
                img={isSmallScreen ? img.imgMobile : img.imgDesktop}
                alt={img.alt}
                txt={img.txt}
                txt2={img.txt2}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
