import React from 'react';
import 'flickity/dist/flickity.min.css';
import Flickity from 'react-flickity-component';

export default () => {
  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    autoPlay: true
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
      <img src="/images/hq-map-spots-1.jpg" />
      <img src="/images/hq-map-spots-2.jpg" />
      <img src="/images/hq-map-spots-3.jpg" />
      <img src="/images/hq-map-spots-4.jpg" />
    </Flickity>
  );
};
