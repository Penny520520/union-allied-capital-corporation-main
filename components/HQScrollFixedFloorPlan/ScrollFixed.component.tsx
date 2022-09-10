import React, { useEffect, useState } from 'react';
/// <reference path="../DefinitelyTyped/jquery.d.ts" />
import styles from './ScrollFixed.styles.module.scss';
import $ from 'jquery';

export default () => {
  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    autoPlay: true,
  };
  useEffect(() => {
      //by Pixels
      let imgSpace = 300;
      !imgSpace && imgSpace++;
    
      // $(window).resize(function() {
      //   $("body").css(
      //     "height",
      //     $(window).height() + imgSpace * ($(".image").length - 1) + "px"
      //   );
      // });
    
      $("#c1").fadeIn(0);
    
      $(window).scroll(function() {
        var pos = $(document).scrollTop();
        console.log(pos);
        hideAll("c" + (Math.trunc(pos / imgSpace) + 1));
        $("#c" + (Math.trunc(pos / imgSpace) + 1)).fadeIn(0);
      });
    
      function hideAll(exceptMe) {
        $(".image").each(function(i) {
          if ($(this).attr("id") == exceptMe) return;
          $(this).fadeOut(200);
        });
    });
  }, []);

  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isScroll, setScroll] = useState(false);
  const changeHeaderStyle = () => {
    if (typeof window !== 'undefined' && window.scrollY >= (($("#scrollImgContainer") as any).offsetTop)) {
      setScroll(true);
      hideAll("c" + (Math.trunc(pos / imgSpace) + 1));
    } else {
      setScroll(false);
    }
  };
  function hideAll(exceptMe) {
    $(".image").each(function(i) {
      if ($(this).attr("id") == exceptMe) return;
      $(this).fadeOut(200);
    });

  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  useEffect(() => {
    window.addEventListener('scroll', changeHeaderStyle);
    
    return () => window.removeEventListener('scroll', changeHeaderStyle);
  }, []);

  return (
    <div id="scrollImgContainer" className="scrollImgContainer">
      <div id="c1" className="scrollImgDiv">
        <img src="/images/hq-map-spots-1.jpg" />
      </div>
      <div id="c2" className="scrollImgDiv">
        <img src="/images/hq-map-spots-1.jpg" />
      </div>
      <div id="c3" className="scrollImgDiv">
        <img src="/images/hq-map-spots-1.jpg" />
      </div>
    </div>
  );
};
