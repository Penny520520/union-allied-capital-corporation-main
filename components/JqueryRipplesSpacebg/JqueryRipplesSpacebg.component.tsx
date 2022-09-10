import React, { useEffect } from 'react';
/// <reference path="../DefinitelyTyped/jquery.d.ts" />
import styles from './JqueryRipplesSpacebg.styles.module.scss';
import $ from 'jquery';

declare const window: any;

export default () => {
  useEffect(() => {
    window.jqueryRipples = require('jquery.ripples');

    ($('#ripppleSpacebg') as any).ripples({
      resolution: 400,
    });
  }, []);

  return <div id="ripppleSpacebg" className={styles.spaceBgImgContainer}></div>;
};