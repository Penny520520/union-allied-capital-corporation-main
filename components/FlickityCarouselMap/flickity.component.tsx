import React from 'react';
import 'flickity/dist/flickity.min.css';
import Flickity from 'react-flickity-component';

export default () => {
  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    autoPlay: true,
  };
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate={true} // default false
      static // default false
    >
      <Image src="/images/hq-map-spots-1.jpg" width={716} height={507} />
      <Image src="/images/hq-map-spots-2.jpg" width={418} height={507} />
      <Image src="/images/hq-map-spots-3.jpg" width={681} height={507} />
      <Image src="/images/hq-map-spots-4.jpg" width={729} height={507} />
      
    </Flickity>
  );
};