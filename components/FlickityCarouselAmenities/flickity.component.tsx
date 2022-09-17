import React from 'react';
import 'flickity/dist/flickity.min.css';
// import styles from './Flickity.styles.module.scss';
import Flickity from 'react-flickity-component';
import Image from 'next/image';

export default () => {
  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    // autoPlay: true
  };
  return (
    <Flickity
      className="amenitiesCarousel" // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate={true} // default false
      static // default false
    >
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-amenities-1.jpg"
          width={899}
          height={610}
          alt="amenities"
        />
      </div>
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-amenities-2.jpg"
          width={899}
          height={610}
          alt="amenities"
        />
      </div>
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-amenities-3.jpg"
          width={899}
          height={610}
          alt="amenities"
        />
      </div>
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-amenities-4.jpg"
          width={899}
          height={610}
          alt="amenities"
        />
      </div>
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-amenities-5.jpg"
          width={899}
          height={610}
          alt="amenities"
        />
      </div>
      <div className="groupCell" style={{ marginRight: '20px' }}>
        <Image
          src="/images/hq-amenities-6.jpg"
          width={899}
          height={610}
          alt="amenities"
        />
      </div>
    </Flickity>
  );
};
