import React from 'react';
import 'flickity/dist/flickity.min.css';
// import styles from './Flickity.styles.module.scss';
import Flickity from 'react-flickity-component';
import Image from 'next/image';

export default () => {
  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    autoPlay: true,
  };
  return (
    <Flickity
      className="mapCarousel" // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate={true} // default false
      static // default false
    >
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-developer-1.png"
          width={612}
          height={439}
          alt="places"
        />
      </div>
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-developer-2.png"
          width={612}
          height={439}
          alt="places"
        />
      </div>
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-developer-3.png"
          width={612}
          height={439}
          alt="places"
        />
      </div>
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-developer-4.png"
          width={612}
          height={439}
          alt="places"
        />
      </div>
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-developer-5.png"
          width={612}
          height={439}
          alt="places"
        />
      </div>
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-developer-6.png"
          width={612}
          height={439}
          alt="places"
        />
      </div>
    </Flickity>
  );
};
