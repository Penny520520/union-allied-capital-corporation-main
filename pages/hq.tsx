/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Accordion,
  Button,
  Carousel,
  // ListGroup,
} from 'react-bootstrap';
import { fetch } from '~/packages';
import { RenderEitherOr } from '~/utils';
// import { strings } from '~/localization';
// import { Source } from '~/enums';
import { Typography } from '~/components';
import { useBoolean, useFormResponse } from '~/hooks';
import { FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';
// import ReactPlayer from 'react-player';
// import hqLogo from 'public/images/High-Point-Park_LOGO_white.svg';
// import logo from 'public/images/HPPLogo.svg';
import styles from 'styles/pages/HQ.styles.module.scss';
/// <reference path="../DefinitelyTyped/jquery.d.ts" />
import $ from 'jquery';
import dynamic from 'next/dynamic';
//import scrollstyles from '~/components/LocomotiveScroll/LocomotiveScroll.styles.module.scss';
// import {
//   LocomotiveScrollProvider,
//   useLocomotiveScroll,
// } from 'react-locomotive-scroll';
// import lomotiveScrollObject from 'react-locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.min.css';
// import Script from 'next/script';
// import Head from 'next/head';
// import router from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DynamicJqueryDiamonds = dynamic(
  () => import('../components/JqueryRipples/JqueryRipples.component'),
  { ssr: false }
);
// const DynamicJqueryRippleSpace = dynamic(
//   () =>
//     import('../components/JqueryRipplesSpacebg/JqueryRipplesSpacebg.component'),
//   { ssr: false }
// );
const FlickityCarousel = dynamic(
  () => import('../components/FlickityCarouselAmenities/flickity.component'),
  { ssr: false }
);
const FlickityCarouselMap = dynamic(
  () => import('../components/FlickityCarouselMap/flickity.component'),
  { ssr: false }
);
const FlickityCarouselDeveloper = dynamic(
  () => import('../components/FlickityCarouselDeveloper/flickity.component'),
  { ssr: false }
);
// const LocomotiveScroll = dynamic(
//   () => import('../components/LocomotiveScroll/LocomotiveScroll.component'),
//   { ssr: false }
// );
const MailchimpSubscribe = dynamic(
  () => import('../components/HqMailchimp/NewsletterSubscribe.component'),
  { ssr: false }
);
declare const window: any;
// declare const isScrollChild: any;

function Header(): JSX.Element {
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isScroll, setScroll] = useState(false);
  const changeHeaderStyle = () => {
    if (typeof window !== 'undefined' && window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  useEffect(() => {
    window.addEventListener('scroll', changeHeaderStyle);
    return () => window.removeEventListener('scroll', changeHeaderStyle);
  }, []);
  return (
    <>
      <Container
        className={
          isScroll ? styles.headerContainerActive : styles.headerContainer
        }
      >
        <Row className={styles.header}>
          <Col xs="7">
            <Link href="/hq" passHref>
              <Image
                src="/images/HQ_LOGO_V1-white--03.png"
                alt="HQ LOGO"
                width={141}
                height={82.94}
                className={styles.hqLogoWhite}
              />
            </Link>
          </Col>
          <Col xs="5">
            <Navbar
              collapseOnSelect
              className={styles.navbarContainer}
              expand="lg"
            >
              <Navbar.Toggle />
              <Navbar.Collapse className={styles.navbarCollapse}>
                <Nav className={styles.navbarDropDown}>
                  <Nav.Link href="/hq" className={styles.navBtn}>
                    HOME
                  </Nav.Link>
                  <Nav.Link href="#location" className={styles.navBtn}>
                    LOCATION
                  </Nav.Link>
                  <Nav.Link href="#building" className={styles.navBtn}>
                    BUILDING
                  </Nav.Link>
                  <Nav.Link href="#amenitiesfeatures" className={styles.navBtn}>
                    AMENITIES & FEATURES
                  </Nav.Link>
                  <Nav.Link href="#siteplan" className={styles.navBtn}>
                    SITEPLAN
                  </Nav.Link>
                  <Nav.Link href="#floorplans" className={styles.navBtn}>
                    FLOORPLANS
                  </Nav.Link>
                  <Nav.Link href="#team" className={styles.navBtn}>
                    TEAM
                  </Nav.Link>
                  <Nav.Link href="#register" className={styles.registerBtn}>
                    REGISTER
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}
function HeroBanner(): JSX.Element {
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isScroll, setScroll] = useState(false);
  const hideBnrIntro = () => {
    if (
      typeof window !== 'undefined' &&
      window.scrollY >= window.innerHeight - 168.94
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  useEffect(() => {
    window.addEventListener('scroll', hideBnrIntro);
    return () => window.removeEventListener('scroll', hideBnrIntro);
  }, []);
  return (
    <>
      <div id="" className={styles.bnr}>
        {/* <div id="bgimg" className={styles.bgImgContainer}></div> */}
        <div className={styles.bnrIntroContainer}>
          <div className={isScroll ? styles.bnrIntroActive : styles.bnrIntro}>
            <div className={styles.headline}>
              <h1
                className={styles.headHone}
                data-aos="fade-down"
                data-aos-delay="50"
              >
                <span className={styles.cHeaderTitleLine}>TAKE YOUR</span>
                <br />
                <span className={styles.cHeaderTitleLine}>BUSINESS TO</span>
                <br />
                <span className={styles.cHeaderTitleLine}>NEW HEIGHTS</span>
              </h1>
              <div
                className={styles.address}
                data-aos="fade-up"
                data-aos-delay="550"
              >
                8290 ROSS STREET, VANCOUVER, BC
              </div>
            </div>
            <Link href="#opportunity">
              <a className={styles.arrowDownContainer} href="#">
                <Image
                  src="/images/arrow-down.png"
                  width={57}
                  height={57}
                  className="arrowdown"
                  alt="scroll-icon"
                  data-aos="fade-up"
                  data-aos-delay="1550"
                  data-aos-offset="0"
                />
              </a>
            </Link>
            <Link href="https://www.unionallied.ca/">
              <a className={styles.unionalliedlogoContianer} target="_blank">
                <Image
                  src="/images/Union-allied-logo-grayscale.png"
                  width={243}
                  height={39.62}
                  className="arrowdown"
                  alt="scroll-icon"
                  data-aos="fade-up"
                  data-aos-delay="1550"
                  data-aos-offset="0"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <DynamicJqueryDiamonds />
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('DOMContentLoaded', () => {
              setTimeout(() => {
                ($('.cHeaderTitleLine') as any).css({
                  opacity: '1',
                  transform: 'none',
                  'transition-delay': '0.8s',
                });
              }, 200);
            });
    `,
        }}
      ></script> */}
    </>
  );
}
function Opportunity(): JSX.Element {
  // // const { scroll } = useLocomotiveScroll()

  return (
    //      <LocomotiveScrollProvider
    //       options={{
    //         smooth: true,
    //       }}
    //       containeRef={containerRef}
    //     >
    <section id="opportunity" className={styles.opportunity}>
      <Container className={styles.opportunityContainer}>
        {/* <LocomotiveScroll/> */}
        <Row className={styles.header} data-aos="fade-up" data-aos-delay="50">
          <Col xs="6">
            <h2 className={styles.headHtwo}>OPPORTUNITY</h2>
          </Col>
          <Col xs="6" className={styles.opportunityIntro}>
            <Row>
              <Col xs="6">
                <h3 className={styles.headHthree}>
                  30 LIGHT INDUSTRIAL STRATA UNITS
                </h3>
              </Col>
              <Col xs="6">
                <h3 className={styles.headHthree}>
                  TRUE Multi-level building TOTALLING 120,000 SQFT
                </h3>
              </Col>
            </Row>
          </Col>
        </Row>
        <Image
          src="/images/HQ-strata-units.jpg"
          width={1780}
          height={1016}
          layout="responsive"
          alt="OPPORTUNITY"
          // className={styles.hqStrataUnits}
          data-aos="fade-right"
          data-aos-delay="100"
        />
        <Row
          className={styles.opportunityDetail}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Col xs="4">
            <h4 className={styles.headH4}>
              HQ is south vancouver’s newest industrial development, featuring a
              limited opportunity of 30 light industrial strata units.
            </h4>
          </Col>
          <Col xs="5">
            <p className={styles.paragraph}>
              Take the next step in your business journey with modern light
              industrial space from 2,800 SF and up, including second floor
              mezzanine, high ceilings and grade loading.
            </p>
            <p className={styles.paragraph}>
              Built to elevate your business, HQ’s modern design and efficient
              layout provides a rare opportunity to own industrial space in
              Metro Vancouver’s low vacancy landscape.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    // </LocomotiveScrollProvider>
  );
}
function Location(): JSX.Element {
  return (
    <section id="location" className={styles.hqLocation}>
      <Container className={styles.locationContainer}>
        <Row className={styles.locationRow}>
          <Col xs="6">
            <h2
              className={styles.headHtwo}
              data-aos="fade-right"
              data-aos-delay="50"
            >
              LOCATION
            </h2>
          </Col>
          <Col xs="6" data-aos="fade-left" data-aos-delay="50">
            <h3 className={styles.headHthree}>
              8290 ROSS STREEET, VANCOUVER, BC
            </h3>
            <p className={styles.paragraph}>
              Step away from SE Marine Drive and Knight Street, HQ is centrally
              located on the corner of Ross Street and East Kent Avenue North in
              East Vancouver’s industrial area. Located along one of East
              Vancouver’s primary transit routes, HQ is one of the most
              accessible industrial developments in the area. Its convenient
              location provides easy access to the Lower Mainland via major
              highways and arterial roads, it makes it easy for your clients,
              customers and workforce to get to you by car or bus.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
function Building(): JSX.Element {
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  // const [isMouseOver, setMouseOver] = useState(false);
  // function handleMouseEvent(this: any) {
  //   // $("#listItemContainer")
  //   $('.headH5Con').on('mouseover', function(e) {
  //     e.preventDefault();
  //   if($(this).hasClass('headH5)){
  //     $(this).removeClass('listItemsAcitve');
  //   } else {
  //     $(this).addClass('listItemsAcitve');
  //     $(this).removeClass('headH5');
  //   }
  //   }
  // }
  // function handleMouseEventLeave() {
  //   setMouseOver(isMouseOver);
  // }

  const nextIcon = (
    <span aria-hidden="true" className={styles.carouselControlNextIcon} />
  );
  const prevIcon = (
    <span aria-hidden="false" className={styles.carouselControlPrevIcon} />
  );

  //eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  // useEffect(() => {
  //   // $('.headH5Con').on('mouseenter', function(e) {
  //   //   e.preventDefault();
  //   // if($(this).hasClass('headH5)){
  //   //   $(this).removeClass('listItemsAcitve');
  //   // } else {
  //   //   $(this).addClass('listItemsAcitve');
  //   // }

  //   ($('.headH5Con') as any).addEventListener('mouseover', () =>
  //     $(this).removeClass('headH5Con');
  //     $(this).addClass('listItemsAcitve');
  //   );
  //   ($('.listItemsAcitve') as any).addEventListener('mouseleft', () =>
  //     $(this).removeClass('listItemsAcitve');
  //     $(this).addClass('headH5Con');
  //   );

  // }, []);

  return (
    <section id="building" className={styles.building}>
      <div>
        <Image
          src="/images/HQ_MAP.jpg"
          width={1920}
          height={1064}
          layout="responsive"
          alt="HQ Map"
          className={styles.hqMap}
        />
        <Container className={styles.sidebar}>
          <Row className={styles.sidebarContainer}>
            <Col xs="3" className={styles.headH5Con}>
              <h5 className={styles.headH5}>RESTAURANT</h5>
              <div className={styles.listItemsContainer}>
                <ul className={styles.listItems}>
                  <li className={styles.item}>1. Northern Cafe</li>
                  <li className={styles.item}>
                    2. Flamingo Chinese Restaurant
                  </li>
                  <li className={styles.item}>3. Dosa Corner</li>
                  <li className={styles.item}>4. Subway</li>
                  <li className={styles.item}>5. Tandoori Raj Restaurant</li>
                </ul>
              </div>
            </Col>
            <Col xs="3" className={styles.headH5Con}>
              <h5 className={styles.headH5}>SHOPPING & SERVICES</h5>
              <div className={styles.listItemsContainer}>
                <ul className={styles.listItems}>
                  <li className={styles.item}>6. 1010Tires.com</li>
                  <li className={styles.item}>7. U-Haul Moving & Storage</li>
                  <li className={styles.item}>8. Fabricland</li>
                  <li className={styles.item}>9. Real Canadian Superstore</li>
                  <li className={styles.item}>10. Marks Marine Pharmacy</li>
                </ul>
              </div>
            </Col>
            <Col xs="3" className={styles.headH5Con}>
              <h5 className={styles.headH5}>BUSINESS & OFFICE</h5>
              <div className={styles.listItemsContainer}>
                <ul className={styles.listItems}>
                  <li className={styles.item}>11. Purdys Chocolatier Office</li>
                  <li className={styles.item}>12. SUBWAY Office</li>
                  <li className={styles.item}>13. White Spot Ltd. Office</li>
                  <li className={styles.item}>14. Skretting Head Office</li>
                  <li className={styles.item}>15. Intria Corporate office</li>
                </ul>
              </div>
            </Col>
            <Col xs="3" className={styles.headH5Con}>
              <h5 className={styles.headH5}>RECREATION</h5>
              <div className={styles.listItemsContainer}>
                <ul className={styles.listItems}>
                  <li className={styles.item}>16. Ross Park</li>
                  <li className={styles.item}>17. 6Pack Indoor Beach</li>
                  <li className={styles.item}>18. Badminton Vancouver</li>
                  <li className={styles.item}>19. George Park</li>
                  <li className={styles.item}>
                    20. Moberly Park Tennis Courts
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* flickity */}
      <Container className={styles.amenitiesItems}>
        <FlickityCarouselMap />
      </Container>
      <div className={styles.hasapcebg}>
        <Container className={styles.hqspace}>
          <h2
            className={styles.headHtwo}
            data-aos="fade-down"
            data-aos-delay="650"
          >
            THE SPACES
          </h2>
          <Carousel
            className={styles.spaceCarouselContainer}
            nextIcon={nextIcon}
            prevIcon={prevIcon}
            indicators={false}
            data-aos="fade-left"
            data-aos-delay="700"
          >
            <Carousel.Item>
              <Image
                src="/images/hq-spaces-1-l.jpg"
                width={1673}
                height={950}
                layout="responsive"
                alt="Aerial View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/images/hq-spaces-2-l.jpg"
                width={1673}
                height={950}
                layout="responsive"
                alt="Dollhouse-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/images/hq-spaces-3-l.jpg"
                width={1673}
                height={950}
                layout="responsive"
                alt="Dollhouse-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/images/hq-spaces-4-l.jpg"
                width={1673}
                height={950}
                layout="responsive"
                alt="Street View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/images/hq-spaces-5-l.jpg"
                width={1673}
                height={950}
                layout="responsive"
                alt="Street View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/images/hq-spaces-6-l.jpg"
                width={1673}
                height={950}
                layout="responsive"
                alt="Street View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/images/hq-spaces-7-l.jpg"
                width={1673}
                height={950}
                layout="responsive"
                alt="Street View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/images/hq-spaces-8-l.jpg"
                width={1673}
                height={950}
                layout="responsive"
                alt="Street View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/images/hq-spaces-9-l.jpg"
                width={1673}
                height={950}
                layout="responsive"
                alt="Street View"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="/images/hq-spaces-10-l.jpg"
                width={1673}
                height={950}
                layout="responsive"
                alt="Street View"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
        {/* <DynamicJqueryRippleSpace /> */}
      </div>
    </section>
  );
}
function Amenities(): JSX.Element {
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  // const [isMouseOver, setMouseOver] = useState(false);
  // function handleMouseEvent() {
  //   setMouseOver(!isMouseOver);
  // }
  // function handleMouseEventLeave() {
  //   setMouseOver(isMouseOver);
  // }
  return (
    <section id="amenitiesfeatures" className={styles.hqAmenities}>
      <h2 className={styles.headHtwo} data-aos="fade-up" data-aos-delay="650">
        AMENITIES
      </h2>
      <Image
        src="/images/hq-amenities-view.jpg"
        width={1920}
        height={1080}
        layout="responsive"
        alt="AMENITIES VIEW"
        className={styles.hqMap}
        data-aos="fade-right"
        data-aos-delay="750"
        // eslint-disable-next-line react/jsx-no-comment-textnodes
      />
      <div className={styles.hqCalloutBtn}>
        <Image
          src="/images/hq-callout-btn.png"
          width={57}
          height={57}
          alt="AMENITIES VIEW"
          className={styles.calloutIcon}
          data-aos="fade-up"
          data-aos-delay="1850"
        />
        <div className={styles.calloutItem}>
          <p className={styles.paragraph}>
            Rooftop amenity deck with an outdoor kitchen, BBQ, and lounge areas
            for entertaining
          </p>
        </div>
      </div>
      <div className={styles.hqCalloutBtn}>
        <Image
          src="/images/hq-callout-btn.png"
          width={57}
          height={57}
          alt="AMENITIES VIEW"
          className={styles.calloutIcon}
          data-aos="fade-up"
          data-aos-delay="1750"
        />
        <div className={styles.calloutItem}>
          <p className={styles.paragraph}>Generous common cooridor</p>
        </div>
      </div>
      <div className={styles.hqCalloutBtn}>
        <Image
          src="/images/hq-callout-btn.png"
          width={57}
          height={57}
          alt="AMENITIES VIEW"
          className={styles.calloutIcon}
          data-aos="fade-up"
          data-aos-delay="1750"
        />
        <div className={styles.calloutItem}>
          <p className={styles.paragraph}>
            Secured parkade & Convenient end-of-trip facilities
          </p>
        </div>
      </div>
      {/* flickity */}
      <Container
        className={styles.amenitiesItems}
        data-aos="fade-left"
        data-aos-delay="250"
      >
        <FlickityCarousel />
      </Container>
    </section>
  );
}
function Feature(): JSX.Element {
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isFirstClick, setFirstClick] = useState(true);
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isSecondClick, setSecondClick] = useState(false);
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isThirdClick, setThirdClick] = useState(false);
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isFourClick, setFourClick] = useState(false);
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isFiveClick, setFiveClick] = useState(false);
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isSixClick, setSixClick] = useState(false);
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isSevenClick, setSevenClick] = useState(false);
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isEightClick, setEightClick] = useState(false);
  function firstHanderClick() {
    setFirstClick(true);
    setSecondClick(false);
    setThirdClick(false);
    setFourClick(false);
    setFiveClick(false);
    setSixClick(false);
    setSevenClick(false);
    setEightClick(false);
  }
  function secondHanderClick() {
    setFirstClick(false);
    setSecondClick(true);
    setThirdClick(false);
    setFourClick(false);
    setFiveClick(false);
    setSixClick(false);
    setSevenClick(false);
    setEightClick(false);
  }
  function thirdHanderClick() {
    setFirstClick(false);
    setSecondClick(false);
    setThirdClick(true);
    setFourClick(false);
    setFiveClick(false);
    setSixClick(false);
    setSevenClick(false);
    setEightClick(false);
  }
  function fourHanderClick() {
    setFirstClick(false);
    setSecondClick(false);
    setThirdClick(false);
    setFourClick(true);
    setFiveClick(false);
    setSixClick(false);
    setSevenClick(false);
    setEightClick(false);
  }
  function fiveHanderClick() {
    setFirstClick(false);
    setSecondClick(false);
    setThirdClick(false);
    setFourClick(false);
    setFiveClick(true);
    setSixClick(false);
    setSevenClick(false);
    setEightClick(false);
  }
  function sixHanderClick() {
    setFirstClick(false);
    setSecondClick(false);
    setThirdClick(false);
    setFourClick(false);
    setFiveClick(false);
    setSixClick(true);
    setSevenClick(false);
    setEightClick(false);
  }
  function sevenHanderClick() {
    setFirstClick(false);
    setSecondClick(false);
    setThirdClick(false);
    setFourClick(false);
    setFiveClick(false);
    setSixClick(false);
    setSevenClick(true);
    setEightClick(false);
  }
  function eightHanderClick() {
    setFirstClick(false);
    setSecondClick(false);
    setThirdClick(false);
    setFourClick(false);
    setFiveClick(false);
    setSixClick(false);
    setSevenClick(false);
    setEightClick(true);
  }

  // function FBClickedHandler() {}

  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  // useEffect(() => {
  //   const allClickBtn = document.getElementById('#clickFPBtn1');
  //   console.log(allClickBtn);

  //   for (let i = 0; i < 2; i++) {
  //     console.log(i);
  //     // (allClickBtn[i] as HTMLElement).setAttribute('index', i);
  //     // allClickBtn[i].onclick = function () {
  //     //   const currClickBtn = allClickBtn[this.getAttribute('index')].src;
  //     //   document.querySelector('.floorplanImg').src = currClickBtn;

  //     //   for (let i = 0; i < allClickBtn.length; i++) {
  //     //     allClickBtn[i].style.border = '2px solid white';
  //     //   }
  //     //   this.style.border = '2px solid black';
  //     // };
  //     // const FBClickedHandler = (event: React.MouseEvent<HTMLImageElement>) => {
  //     //   event.stopPropagation();
  //     //   const img = event.allClickBtn[this.getAttribute('index')].src;
  //     //   document.querySelector('.floorplanImg').src = currClickBtn;
  //     //   for (let i = 0; i < allClickBtn.length; i++) {
  //     //     allClickBtn[i].style.border = '2px solid white';
  //     //   }
  //     //   this.style.border = '2px solid black';
  //     // };
  //   }
  // }, []);

  return (
    <section id="features" className={styles.featureContainer}>
      <h2
        className={styles.headHtwo}
        data-aos="fade-down"
        data-aos-delay="1050"
      >
        UNIT FEATURES
      </h2>
      <Container className={styles.featureList}>
        <Row className={styles.featureRow}>
          <Col xs="12" md="6" data-aos="fade-right" data-aos-delay="13500">
            <div className={styles.featureBox}>
              <div className={styles.featureIconBg}>
                <Image
                  src="/images/hq-parking-white.png"
                  width={88}
                  height={88}
                  layout="fixed"
                  alt="parking"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>PARKING</div>
                <div className={styles.featureTextTwo}>
                  2 parking stalls with every unit with an opportunity to
                  purchase 2 more stalls per unit. (*Secured underground parkade
                  100 spots)
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureIconBg}>
                <Image
                  src="/images/hq-warehouse.png"
                  width={88}
                  height={88}
                  layout="fixed"
                  alt="parking"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>LOADING DOOR</div>
                <div className={styles.featureTextTwo}>
                  Grade level loading per unit
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureIconBg}>
                <Image
                  src="/images/hq-ladder-white.png"
                  width={88}
                  height={88}
                  layout="fixed"
                  alt="parking"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>CEILING HEIGHT</div>
                <div className={styles.featureTextTwo}>
                  • 14’ ceiling clear heights under mezzanine <br /> • 9’
                  ceiling clear
                  <br />
                  heights in warehouse <br /> • 24’ ceiling clear double heights
                  warehouse
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureIconBg}>
                <Image
                  src="/images/hq-trolley.png"
                  width={88}
                  height={88}
                  layout="fixed"
                  alt="parking"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>FLOOR LOAD</div>
                <div className={styles.featureTextTwo}>
                  Heavy floor load capacity:
                  <br />
                  • 350 lbs/sf main floor
                  <br />• 100 lbs/sf mezzanine
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureIconBg}>
                <Image
                  src="/images/hq-washroom-white.png"
                  width={88}
                  height={88}
                  layout="fixed"
                  alt="parking"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>WASHROOM</div>
                <div className={styles.featureTextTwo}>
                  Fully finished accessible washroom
                </div>
              </div>
            </div>
          </Col>
          <Col xs="12" md="6" data-aos="fade-left" data-aos-delay="1350">
            <div className={styles.featureBox}>
              <div className={styles.featureIconBg}>
                <Image
                  src="/images/hq-electric-power.png"
                  width={88}
                  height={88}
                  layout="fixed"
                  alt="parking"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>ELECTRICAL SERVICE</div>
                <div className={styles.featureTextTwo}>
                  600 volt, 100 amp per unit
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureIconBg}>
                <Image
                  src="/images/hq-metal-whiteline.png"
                  width={88}
                  height={88}
                  layout="fixed"
                  alt="parking"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>CONSTRUCTION</div>
                <div className={styles.featureTextTwo}>
                  Composite structure of steel and concrete
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureIconBg}>
                <Image
                  src="/images/hq-elevator-copy-white.png"
                  width={88}
                  height={88}
                  layout="fixed"
                  alt="parking"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>ELEVATOR</div>
                <div className={styles.featureTextTwo}>
                  Elevator access to all floors
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureIconBg}>
                <Image
                  src="/images/hq-sprinkler.png"
                  width={88}
                  height={88}
                  layout="fixed"
                  alt="parking"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>SPRINKLERS</div>
                <div className={styles.featureTextTwo}>
                  Fully sprinklered for base building
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureIconBg}>
                <Image
                  src="/images/hq-garage-white.png"
                  width={88}
                  height={88}
                  layout="fixed"
                  alt="parking"
                  className={styles.featureIcon}
                />
              </div>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>DRIVEWAY</div>
                <div className={styles.featureTextTwo}>
                  Drive directly up to all units
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Row
        className={styles.zoningText}
        data-aos="fade-up"
        data-aos-delay="1550"
      >
        <Col xs="5">
          <h2 className={styles.headHtwo}>ZONING</h2>
        </Col>
        <Col xs="5">
          <h3 className={styles.headHthree}>
            I2 ZONING LIGHT INDUSTRIAL / <br />
            COMMERCIAL USES
          </h3>
        </Col>
      </Row>
      <Container
        className={styles.featureList}
        data-aos="fade-up"
        data-aos-delay="1750"
      >
        <Row className={styles.zoningfeatureList}>
          <Col xs="12" md="5">
            <div className={styles.featureBox}>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextTwo}>
                  Warehouse / Cold Storage (*Bylaw conditional uses)
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextTwo}>Wholesale (Class A)</div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextTwo}>Manufacturing</div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextTwo}>Trade School</div>
              </div>
            </div>
          </Col>
          <Col xs="12" md="5" className={styles.zoningfeatureColright}>
            <div className={styles.featureBox}>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextTwo}>Laboratories</div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextTwo}>
                  Sales, Rentals & Repairs (various products)
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextTwo}>Daycare</div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextTwo}>
                  Vehicle Dealership (*Bylaw conditional uses)
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextTwo}>
                  *Contact Listing Agents for full zoning schedule
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <h2
        id="floorplans"
        className={styles.headHtwo}
        data-aos="fade-up"
        data-aos-delay="1850"
      >
        FLOORPLANS
      </h2>
      <Container id="floorplanContainer" className={styles.floorplanContainer}>
        <Row className={styles.floorplanRow}>
          <Col xs="12" lg="8" data-aos="fade-right" data-aos-delay="2150">
            <div
              className={
                isFirstClick ? styles.floorplanImg : styles.floorplanImgInactive
              }
            >
              <Image
                src="/images/hq-siteplan-1.jpg"
                width={1171.31}
                height={1000}
                layout="responsive"
                alt="location-map"
              />
            </div>
            <div
              className={
                isSecondClick
                  ? styles.floorplanImg
                  : styles.floorplanImgInactive
              }
            >
              <Image
                src="/images/hq-siteplan-2.jpg"
                width={1181.31}
                height={1000}
                layout="responsive"
                alt="location-map"
              />
            </div>
            <div
              className={
                isThirdClick ? styles.floorplanImg : styles.floorplanImgInactive
              }
            >
              <Image
                src="/images/hq-siteplan-3.jpg"
                width={1181.31}
                height={1000}
                layout="responsive"
                alt="location-map"
              />
            </div>
            <div
              className={
                isFourClick ? styles.floorplanImg : styles.floorplanImgInactive
              }
            >
              <Image
                src="/images/hq-siteplan-4.jpg"
                width={1181.31}
                height={1000}
                layout="responsive"
                alt="location-map"
              />
            </div>
            <div
              className={
                isFiveClick ? styles.floorplanImg : styles.floorplanImgInactive
              }
            >
              <Image
                src="/images/hq-siteplan-5.jpg"
                width={1181.31}
                height={1000}
                layout="responsive"
                alt="location-map"
              />
            </div>
            <div
              className={
                isSixClick ? styles.floorplanImg : styles.floorplanImgInactive
              }
            >
              <Image
                src="/images/hq-floorplan-6.jpg"
                width={1181.31}
                height={1000}
                layout="responsive"
                alt="location-map"
              />
            </div>
            <div
              className={
                isSevenClick ? styles.floorplanImg : styles.floorplanImgInactive
              }
            >
              <Image
                src="/images/hq-siteplan-7.jpg"
                width={1181.31}
                height={1000}
                layout="responsive"
                alt="location-map"
              />
            </div>
            <div
              className={
                isEightClick ? styles.floorplanImg : styles.floorplanImgInactive
              }
            >
              <Image
                src="/images/hq-floorplan-8.jpg"
                width={1181.31}
                height={1000}
                layout="responsive"
                alt="location-map"
              />
            </div>
          </Col>
          <Col
            xs="12"
            lg="3"
            className={styles.fbBtnList}
            data-aos="fade-left"
            data-aos-delay="2150"
          >
            <button
              className={
                isFirstClick ? styles.clickFPBtnActive : styles.clickFPBtn
              }
              onClick={firstHanderClick}
            >
              <Image
                src="/images/hq-floorplan-transparentIcon.png"
                width={57}
                height={57}
                layout="fixed"
                alt="parking"
                className={styles.fbBtnIcon}
              />
              <div className={styles.featureTextOne}>LEVEL 1</div>
            </button>
            <button
              className={
                isSecondClick ? styles.clickFPBtnActive : styles.clickFPBtn
              }
              onClick={secondHanderClick}
            >
              <Image
                src="/images/hq-floorplan-transparentIcon.png"
                width={57}
                height={57}
                layout="fixed"
                alt="parking"
                className={styles.fbBtnIcon}
              />
              <div className={styles.featureTextOne}>LEVEL 2</div>
            </button>
            <button
              className={
                isThirdClick ? styles.clickFPBtnActive : styles.clickFPBtn
              }
              onClick={thirdHanderClick}
            >
              <Image
                src="/images/hq-floorplan-transparentIcon.png"
                width={57}
                height={57}
                layout="fixed"
                alt="parking"
                className={styles.fbBtnIcon}
              />
              <div className={styles.featureTextOne}>LEVEL 3</div>
            </button>
            <button
              className={
                isFourClick ? styles.clickFPBtnActive : styles.clickFPBtn
              }
              onClick={fourHanderClick}
            >
              <Image
                src="/images/hq-floorplan-transparentIcon.png"
                width={57}
                height={57}
                layout="fixed"
                alt="parking"
                className={styles.fbBtnIcon}
              />
              <div className={styles.featureTextOne}>LEVEL 4</div>
            </button>
            <button
              className={
                isFiveClick ? styles.clickFPBtnActive : styles.clickFPBtn
              }
              onClick={fiveHanderClick}
            >
              <Image
                src="/images/hq-floorplan-transparentIcon.png"
                width={57}
                height={57}
                layout="fixed"
                alt="parking"
                className={styles.fbBtnIcon}
              />
              <div className={styles.featureTextOne}>LEVEL 5</div>
            </button>
            <button
              className={
                isSixClick ? styles.clickFPBtnActive : styles.clickFPBtn
              }
              onClick={sixHanderClick}
            >
              <Image
                src="/images/hq-floorplan-transparentIcon.png"
                width={57}
                height={57}
                layout="fixed"
                alt="parking"
                className={styles.fbBtnIcon}
              />
              <div className={styles.featureTextOne}>PARKCADE</div>
            </button>
            <button
              className={
                isSevenClick ? styles.clickFPBtnActive : styles.clickFPBtn
              }
              onClick={sevenHanderClick}
            >
              <Image
                src="/images/hq-floorplan-transparentIcon.png"
                width={57}
                height={57}
                layout="fixed"
                alt="parking"
                className={styles.fbBtnIcon}
              />
              <div className={styles.featureTextOne}>FLOORPLAN A</div>
            </button>
            <button
              className={
                isEightClick ? styles.clickFPBtnActive : styles.clickFPBtn
              }
              onClick={eightHanderClick}
            >
              <Image
                src="/images/hq-floorplan-transparentIcon.png"
                width={57}
                height={57}
                layout="fixed"
                alt="parking"
                className={styles.fbBtnIcon}
              />
              <div className={styles.featureTextOne}>FLOORPLAN B</div>
            </button>
            <a
              className={styles.fbDownload}
              download={true}
              href="/Projects/HQ_SITEPLAN_For-download.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              DOWNLOAD ALL PLANS
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
function Ownership(): JSX.Element {
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isFinancialAdClick, setFinancialAdClick] = useState(false);
  function financialAdClickHandler() {
    setFinancialAdClick(!isFinancialAdClick);
  }
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isFinancialCeClick, setFinancialCeClick] = useState(false);
  function financialCeClickHandler() {
    setFinancialCeClick(!isFinancialCeClick);
  }
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isExerciseClick, setExerciseClick] = useState(false);
  function exerciseClickHandler() {
    setExerciseClick(!isExerciseClick);
  }
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isRewardClick, setRewardClick] = useState(false);
  function rewardClickHandler() {
    setRewardClick(!isRewardClick);
  }
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isEquityClick, setEquityClick] = useState(false);
  function equityClickHandler() {
    setEquityClick(!isEquityClick);
  }
  return (
    <section className={styles.hqLocation}>
      <Container className={styles.locationContainer}>
        <Row className={styles.locationRow}>
          <Col xs="6">
            <h2
              className={styles.headHtwo}
              data-aos="fade-right"
              data-aos-delay="500"
            >
              OWNERSHIP
              <br />
              BENEFITS
            </h2>
          </Col>
          <Col xs="6" data-aos="fade-left" data-aos-delay="500">
            <Accordion
              className={styles.accordionContainer}
              defaultActiveKey="0"
            >
              <Accordion.Item eventKey="0" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={financialAdClickHandler}
                  className={
                    isFinancialAdClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}></div> REALIZE FINANCIAL
                  ADVANTAGES
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>
                      Capital investments bring long-term value, operating
                      expenses and mortgage interest expenses can be written
                      off, and capital costs allowances provide tax savings.
                    </div>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={financialCeClickHandler}
                  className={
                    isFinancialCeClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}></div> ENJOY FINANCIAL
                  CERTAINTY
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>
                      Fixed interest rates mean you can lock in monthly
                      payments.
                    </div>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={exerciseClickHandler}
                  className={
                    isExerciseClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}></div> EXERCISE CONTROL
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>
                      Avoid annual rent escalations and have a say in your
                      operating expenses.
                    </div>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={rewardClickHandler}
                  className={
                    isRewardClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}></div> GAIN REWARDS
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>
                      Property ownership means you have a long-term investment
                      that can be leased or sold.
                    </div>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={equityClickHandler}
                  className={
                    isEquityClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}></div> BUILD EQUITY
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>
                      As you pay down your principal, your equity grows.
                    </div>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Developer(): JSX.Element {
  return (
    <section id="team" className={styles.developerContainer}>
      <Container className={styles.projectRowOne}>
        <Row
          className={styles.zoningText}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Col xs="6">
            <h2 className={styles.headHtwo}>DEVELOPER</h2>
          </Col>
          <Col xs="5">
            <h3 className={styles.headHthree}>
              WELCOME TO A NEW WORLD OF CONCRETE, <br />
              GLASS AND STEEL.
            </h3>
          </Col>
        </Row>
        <Row
          className={styles.zoningText}
          data-aos="fade-left"
          data-aos-delay="750"
        >
          <FlickityCarouselDeveloper />
        </Row>
        <Row
          className={styles.zoningText}
          data-aos="fade-up"
          data-aos-delay="950"
        >
          <Col xs="6">
            <a className={styles.unionLogoBottom} target="_blank">
              <Image
                src="/images/Union-allied-logo-grayscale.png"
                width={452.78}
                height={73.83}
                className={styles.unionLogoBottom}
                alt="scroll-icon"
                data-aos="fade-left"
                data-aos-delay="750"
              />
            </a>
          </Col>
          <Col xs="5">
            <p className={styles.paragraph}>
              We are reimagining the possibilities of commercial, industrial and
              residential development with excellent ideas. We identify and
              invest in real estate in developed urban centres. By locating
              areas that exhibit drivers of intensification and generating real
              estate, we build valued properties.
            </p>
            <p>UNIONALLIED.CA</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
function Register(): JSX.Element {
  return (
    <section
      className={styles.registerForm}
      data-aos="fade-right"
      data-aos-delay="550"
    >
      <h2 className={styles.headHtwo}>REGISTER</h2>
      <h3 className={styles.headHthree}>FOR EXCLUSIVE INFO & UPDATES ON HQ.</h3>
      <div></div>
      <MailchimpSubscribe data-aos="fade-right" data-aos-delay="750" />
    </section>
  );
}
function Footer(): JSX.Element {
  return (
    <section className={styles.footer} data-aos="fade-up" data-aos-delay="550">
      <Container className={styles.footercontainer}>
        <Row className={styles.footerRow}>
          <Col xs="3">
            <Link href="/hq" passHref>
              <Image
                src="/images/HQ_LOGO_V1-white--03.png"
                alt="HQ LOGO"
                width={141}
                height={82.94}
                className={styles.hqLogoWhite}
              />
            </Link>
          </Col>
          <Col xs="8">
            <p>SITE BY A_LAB CREATIVE</p>
            <p>
              © 2022 Union Allied Capital Corporation. This is not an offering
              for sale. Any such offering can only be made with an information
              summary. All materials, measurements, specifications, renderings
              and layouts are preliminary and displayed for illustrative
              purposes only. The information contained herein is subject to
              change at any time without notice.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default function HQ() {
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      debounceDelay: 550,
      once: true,
    });
  }, []);
  return (
    <main className={styles.page}>
      <Header />
      <HeroBanner />
      <Opportunity />
      <Location />
      <Building />
      <Amenities />
      <Feature />
      <Ownership />
      <Developer />
      {/* <div className={styles.bgContainer}>
        <div className={styles.footerOverlay}>
          <Image
            // width={1920.5}
            // height={1900}
            layout="fill"
            objectFit="cover"
            src="/images/HPP-website-BG.svg"
            alt="HPP-Bg"
          />
        </div> */}
      <Register />
      <Footer />
      {/* </div> */}
    </main>
  );
}
