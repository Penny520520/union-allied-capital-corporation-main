import React from 'react';
import 'flickity/dist/flickity.min.css';
import Flickity from 'react-flickity-component';
import Image from 'next/image';
import styles from './Flickity.styles.module.scss';

export default () => {
  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    groupCells: false,
    // autoPlay: true,
  };
  return (
    <Flickity
      className={styles.mapCarousel} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate={true} // default false
      static // default false
    >
      <div className={styles.groupCell1} style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-map-spots-1.jpg"
          width={716}
          height={507}
          layout="fixed"
          alt="places"
        />
      </div>
      <div className={styles.groupCell2} style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-map-spots-2.jpg"
          width={418}
          height={507}
          layout="fixed"
          alt="places"
        />
      </div>
      <div className={styles.groupCell3} style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-map-spots-3.jpg"
          width={681}
          height={507}
          layout="fixed"
          alt="places"
        />
      </div>
      <div className={styles.groupCell4} style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-map-spots-4.jpg"
          width={729}
          height={507}
          layout="fixed"
          alt="places"
        />
      </div>
    </Flickity>
  );
};
