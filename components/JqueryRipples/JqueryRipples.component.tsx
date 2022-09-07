import React, { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import { Typography, Accordion } from '~/components';
/// <reference path="../DefinitelyTyped/jquery.d.ts" />
import dynamic from 'next/dynamic';
import styles from './JqueryRipples.styles.module.scss';
import $ from 'jquery';

declare const window: any;

export default () => {
  useEffect(() => {
    window.jqueryRipples = require('jquery.ripples');

    ($('#home') as any).ripples({
      resolution: 400,
    });
  }, []);

  return <div id="home" className={styles.bgImgContainer}></div>;
};
