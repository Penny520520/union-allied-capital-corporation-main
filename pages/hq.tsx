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
// import $ from 'jquery';
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
// const LocomotiveScroll = dynamic(
//   () => import('../components/LocomotiveScroll/LocomotiveScroll.component'),
//   { ssr: false }
// );
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
                data-aos-delay="500"
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
                data-aos-delay="1500"
              >
                8290 ROSS STREET, VANCOUVER, BC
              </div>
            </div>
            <Link href="#opportunity">
              <a
                className={styles.arrowDownContainer}
                href="#"
                data-aos="fade-up-right"
                data-aos-delay="2500"
                data-aos-offset="0"
              >
                <Image
                  src="/images/arrow-down.png"
                  width={57}
                  height={57}
                  className="arrowdown"
                  alt="scroll-icon"
                />
              </a>
            </Link>
            <Link href="https://www.unionallied.ca/">
              <a
                className={styles.unionalliedlogoContianer}
                target="_blank"
                data-aos="fade-up-left"
                data-aos-delay="2500"
                data-aos-offset="0"
              >
                <Image
                  src="/images/Union-allied-logo-grayscale.png"
                  width={243}
                  height={39.62}
                  className="arrowdown"
                  alt="scroll-icon"
                  data-aos="fade-up-left"
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
    <section
      id="opportunity"
      className={styles.opportunity}
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <Container className={styles.opportunityContainer}>
        {/* <LocomotiveScroll/> */}
        <Row className={styles.header}>
          <Col xs="6">
            <h2
              className={styles.headHtwo}
              data-aos="fade-right"
              data-aos-delay="500"
            >
              OPPORTUNITY
            </h2>
          </Col>
          <Col
            xs="6"
            className={styles.opportunityIntro}
            data-aos="fade-left"
            data-aos-delay="1500"
          >
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
          data-aos="fade-up"
          data-aos-delay="2500"
        />
        <Row className={styles.opportunityDetail}>
          <Col xs="4">
            <h4
              className={styles.headH4}
              data-aos="fade-right"
              data-aos-delay="500"
            >
              HQ is south vancouver’s newest industrial development, featuring a
              limited opportunity of 30 light industrial strata units.
            </h4>
          </Col>
          <Col xs="5" data-aos="fade-left" data-aos-delay="1500">
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
              data-aos-delay="500"
            >
              LOCATION
            </h2>
          </Col>
          <Col xs="6">
            <h3
              className={styles.headHthree}
              data-aos="fade-down"
              data-aos-delay="1500"
            >
              8290 ROSS STREEET, VANCOUVER, BC
            </h3>
            <p
              className={styles.paragraph}
              data-aos="fade-up"
              data-aos-delay="2500"
            >
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
            data-aos="fade-right"
            data-aos-delay="500"
          >
            THE SPACES
          </h2>
          <Carousel
            className={styles.spaceCarouselContainer}
            nextIcon={nextIcon}
            prevIcon={prevIcon}
            indicators={false}
            data-aos="fade-left"
            data-aos-delay="1500"
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
      <h2 className={styles.headHtwo} data-aos="fade-down" data-aos-delay="500">
        AMENITIES
      </h2>
      <Image
        src="/images/hq-amenities-view.jpg"
        width={1920}
        height={1080}
        layout="responsive"
        alt="AMENITIES VIEW"
        className={styles.hqMap}
        data-aos="fade-up"
        data-aos-delay="1500"
        // eslint-disable-next-line react/jsx-no-comment-textnodes
      />
      <div
        className={styles.hqCalloutBtn}
        data-aos="fade-up"
        data-aos-delay="2000"
      >
        <Image
          src="/images/hq-callout-btn.png"
          width={57}
          height={57}
          alt="AMENITIES VIEW"
          className={styles.calloutIcon}
        />
        <div className={styles.calloutItem}>
          <p className={styles.paragraph}>
            Rooftop amenity deck with an outdoor kitchen, BBQ, and lounge areas
            for entertaining
          </p>
        </div>
      </div>
      <div
        className={styles.hqCalloutBtn}
        data-aos="fade-up"
        data-aos-delay="2000"
      >
        <Image
          src="/images/hq-callout-btn.png"
          width={57}
          height={57}
          alt="AMENITIES VIEW"
          className={styles.calloutIcon}
        />
        <div className={styles.calloutItem}>
          <p className={styles.paragraph}>Generous common cooridor</p>
        </div>
      </div>
      <div
        className={styles.hqCalloutBtn}
        data-aos="fade-up"
        data-aos-delay="2000"
      >
        <Image
          src="/images/hq-callout-btn.png"
          width={57}
          height={57}
          alt="AMENITIES VIEW"
          className={styles.calloutIcon}
        />
        <div className={styles.calloutItem}>
          <p className={styles.paragraph}>
            Secured parkade & Convenient end-of-trip facilities
          </p>
        </div>
      </div>
      {/* flickity */}
      <Container className={styles.amenitiesItems}>
        <FlickityCarousel />
      </Container>
    </section>
  );
}
function Feature(): JSX.Element {
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isFoodClick, setFoodClick] = useState(false);
  function foodClickHandler() {
    setFoodClick(!isFoodClick);
  }
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isShopClick, setShopClick] = useState(false);
  function shopClickHandler() {
    setShopClick(!isShopClick);
  }
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isBusClick, setBusClick] = useState(false);
  function busClickHandler() {
    setBusClick(!isBusClick);
  }
  return (
    <section
      id="features"
      className={styles.featureContainer}
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <h2
        className={styles.headHtwo}
        data-aos="fade-down"
        data-aos-delay="1500"
      >
        UNIT FEATURES
      </h2>
      <Container className={styles.featureList}>
        <Row className={styles.featureRow}>
          <Col xs="12" md="6" data-aos="fade-right" data-aos-delay="2500">
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
          <Col xs="12" md="6" data-aos="fade-left" data-aos-delay="3500">
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
      <Row className={styles.zoningText}>
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
      <Container className={styles.featureList}>
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
      <h2 className={styles.headHtwo}>FLOORPLANS</h2>
      <Container id="floorplanContainer" className={styles.floorplanContainer}>
        <Row>
          <Col xs="12" lg="8">
            <Image
              src="/images/map.svg"
              width={1145.11}
              height={835.93}
              layout="responsive"
              alt="location-map"
            />
          </Col>
          <Col xs="12" lg="4">
            <Accordion
              className={styles.accordionContainer}
              defaultActiveKey="0"
            >
              <Accordion.Item eventKey="0" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={foodClickHandler}
                  className={
                    isFoodClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}>
                    <Image
                      src="/images/arrow.svg"
                      width={47}
                      height={20}
                      layout="fixed"
                      alt="arrow"
                    />
                  </div>{' '}
                  FOOD & DRINK
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>1. Cactus Club</div>
                    <div className={styles.locationText}>2. White Spot</div>
                    <div className={styles.locationText}>3. Boston Pizza</div>
                    <div className={styles.locationText}>4. McDonald’s</div>
                    <div className={styles.locationText}>5. Pokerrito</div>
                    <div className={styles.locationText}>6. Tim Hortons</div>
                    <div className={styles.locationText}>7. Starbucks</div>
                    <div className={styles.locationText}>
                      8. Mucho Burrito Fresh Mexican Grill
                    </div>

                    <div className={styles.locationText}>
                      9. Barcelos Flame Grilled Chicken
                    </div>
                    <div className={styles.locationText}>10. Subway</div>
                    <div className={styles.locationText}>
                      11. COBS Bread Bakery
                    </div>
                    <div className={styles.locationText}>12. Pizza Hut</div>
                    <div className={styles.locationText}>13. Nandos</div>
                    <div className={styles.locationText}>14. A&W</div>
                    <div className={styles.locationText}>
                      15. Kirin Seafood Restaurant
                    </div>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={shopClickHandler}
                  className={
                    isShopClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}>
                    <Image
                      src="/images/arrow.svg"
                      width={47}
                      height={20}
                      layout="fixed"
                      alt="arrow"
                    />
                  </div>{' '}
                  SHOPPING & SERVICES
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>16. Vancity</div>
                    <div className={styles.locationText}>17. TD Bank</div>
                    <div className={styles.locationText}>18. Canadian Tire</div>
                    <div className={styles.locationText}>19. London Drugs</div>
                    <div className={styles.locationText}>20. Purolator</div>
                    <div className={styles.locationText}>21. Mark’ss</div>
                    <div className={styles.locationText}>22. Save-On-Foods</div>
                    <div className={styles.locationText}>
                      23. Kin’s Farm Market
                    </div>

                    <div className={styles.locationText}>
                      24. Winners / HomeSense
                    </div>
                    <div className={styles.locationText}>25. PetSmart</div>
                    <div className={styles.locationText}>26. Staples</div>
                    <div className={styles.locationText}>
                      27. Sungiven Foods
                    </div>
                    <div className={styles.locationText}>28. Shell</div>
                    <div className={styles.locationText}>
                      29. Riverway Golf Course
                    </div>
                    <div className={styles.locationText}>
                      30. Starlight Casino
                    </div>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={busClickHandler}
                  className={
                    isBusClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}>
                    <Image
                      src="/images/arrow.svg"
                      width={47}
                      height={20}
                      layout="fixed"
                      alt="arrow"
                    />
                  </div>{' '}
                  BUSINESS & OFFICE
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>
                      31. Best Buy Canadian Headquarters
                    </div>
                    <div className={styles.locationText}>
                      32. Ritchie Bros. Auctioneers
                    </div>
                    <div className={styles.locationText}>
                      33. Amazon Fulfillment Center
                    </div>
                    <div className={styles.locationText}>
                      34. Ballard Power Systems Inc
                    </div>
                    <div className={styles.locationText}>
                      35. Milwaukee Factory Service Centre
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
    <section id="location" className={styles.hqLocation}>
      <Container className={styles.locationContainer}>
        <Row className={styles.locationRow}>
          <Col xs="6">
            <h2 className={styles.headHtwo}>
              OWNERSHIP
              <br />
              BENEFITS
            </h2>
          </Col>
          <Col xs="6">
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
      <Image
        src="/images/TEAM.svg"
        width={1675}
        height={216}
        layout="responsive"
        alt="team"
      />
      <Container className={styles.projectRowOne}>
        <Row className={styles.developerRowOneText}>
          <Col md="12" lg="6">
            <div className={styles.projectHeadingBox}>
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>

              <div className={styles.developerHeading}>DEVELOPER</div>
            </div>
            <div className={styles.developerTextBox}>
              <Image
                src="/images/Union-allied-logo.svg"
                width={293.25}
                height={47.82}
                alt="Union-allied-logo"
              />
              <div className={styles.developerSubtitle}>
                WELCOME TO A NEW WORLD OF CONCRETE, GLASS AND STEEL.
              </div>
              <div className={styles.developerText}>
                <p>
                  We are reimagining the possibilities of commercial, industrial
                  and residential development with exellent ideas. We identify
                  and invest in real estate in developed urban centres. By
                  locating areas that exhibit drivers of intensification and
                  generating real estate, we build valued properties.
                </p>
              </div>
              <Link href="https://www.unionallied.ca/">
                <a className={styles.developerLink} target="_blank">
                  UNIONALLIED.CA
                </a>
              </Link>
            </div>
          </Col>
          <Col md="12" lg="6" className={styles.developerTextBoxEmpty}>
            <div className={styles.projectHeadingBox}>
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>
              <div className={styles.developerHeading}>SALES & MARKETING</div>
            </div>
            <div className={styles.developerTextBox}>
              <Image
                src="/images/Avison_logo.svg"
                width={146}
                height={103.5}
                layout="fixed"
                alt="Avison_logo"
              />
              <div className={styles.developerText}>
                <p>
                  Avison Young creates real economic, social and environmental
                  value as a global real estate advisor, powered by people. Our
                  integrated talent realizes the full potential of real estate
                  by using global intelligence platforms that provide clients
                  with insights and advantage. Together, we can create healthy,
                  productive workplaces for employees, cities that are centres
                  for prosperity for their citizens, and built spaces and places
                  that create a net benefit to the economy, the environment and
                  the community.
                </p>
              </div>
              <Link href="https://www.avisonyoung.ca/">
                <a className={styles.developerLink} target="_blank">
                  avisonyoung.ca
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
interface IContactPageFormElements extends HTMLFormControlsCollection {
  agreeToBeContacted: HTMLInputElement;
  companyName: HTMLInputElement;
  email: HTMLInputElement;
  firstName: HTMLInputElement;
  inquiry: HTMLTextAreaElement;
  lastName: HTMLInputElement;
  phoneNumber: HTMLInputElement;
  source: HTMLSelectElement;
  areYouAgentYes: HTMLInputElement;
  areYouAgentNo: HTMLInputElement;
  agentName: HTMLInputElement;
  broker: HTMLInputElement;
  withAgent: HTMLInputElement;
}
interface IContactPageFormElement extends HTMLFormElement {
  readonly elements: IContactPageFormElements;
}
function Register(): JSX.Element {
  const [submitting, submittingActions] = useBoolean();
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [areYouAgent, setAreAgent] = useState(false);
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [withAgent, setWithAgent] = useState(false);
  function areAgentHandler(event: any) {
    if (event.target.checked) {
      setAreAgent(true);
    }
  }
  function notAgentHandler(event: any) {
    if (event.target.checked) {
      setAreAgent(false);
    }
  }
  function withAgentHandler(event: any) {
    if (event.target.checked) {
      setWithAgent(true);
    }
  }
  function notWithAgentHandler(event: any) {
    if (event.target.checked) {
      setWithAgent(false);
    }
  }
  const { form, responseMessage, setResponseMessage } = useFormResponse();
  async function formSubmitHandler(
    event: FormEvent<IContactPageFormElement>
  ): Promise<void> {
    submittingActions.setTrue();
    event.preventDefault();

    const response = await fetch(`/api/contact`, {
      body: JSON.stringify({
        agreeToBeContacted:
          event.currentTarget.elements.agreeToBeContacted.checked,
        email: event.currentTarget.elements.email.value,
        firstName: event.currentTarget.elements.firstName.value,
        lastName: event.currentTarget.elements.lastName.value,
        phoneNumber:
          event.currentTarget.elements.phoneNumber.value || undefined,
        source: event.currentTarget.elements.source.value || undefined,
        // areYouAgent: event.currentTarget.elements.areYouAgent.value,
        areYouAgent: areYouAgent,
        withAgent: withAgent,
        broker: event.currentTarget.elements.broker.value || undefined,
        // withAgent: event.currentTarget.elements.withAgent.checked,
        agentName: event.currentTarget.elements.agentName.value || undefined,
      }),
      method: `POST`,
    });
    const json = await response.json();

    setResponseMessage(response.ok ? json.data : json.error);

    submittingActions.setFalse();
  }
  return (
    <section id="register" className={styles.registerContainer}>
      <Image
        src="/images/REGISTER.svg"
        width={1665}
        height={216}
        layout="responsive"
        alt="REGISTER"
      />
      <Container className={styles.projectRowOne}>
        <Row className={styles.developerRowOneText}>
          <Col md="12" lg="6">
            <div className={styles.projectHeadingBox}>
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>
              <div className={styles.registerHeading}>
                FOR EXCLUSIVE INFO AND UPDATES ON HIGH POINT PARK.
              </div>
            </div>
          </Col>
          <Col md="12" lg="6" className={styles.developerTextBoxEmpty}></Col>
        </Row>
        <form
          className={styles.contactPageForm}
          ref={form}
          onSubmit={formSubmitHandler}
        >
          <fieldset
            className={styles.contactPageFormFieldset}
            disabled={submitting}
          >
            <Row className={styles.registerRowOne}>
              <Col md="12" lg="6" className={styles.registerColLeft}>
                <label htmlFor="firstName" className={styles.registerFormLabel}>
                  * First Name
                </label>
                <input
                  id="firstName"
                  autoComplete="given-name"
                  className={styles.registerFormInput}
                  name="firstName"
                  required={true}
                  type="text"
                />
                <label htmlFor="email" className={styles.registerFormLabel}>
                  * Email Address
                </label>
                <input
                  id="email"
                  autoComplete="email"
                  className={styles.registerFormInput}
                  name="email"
                  required={true}
                  type="email"
                />
                <label
                  htmlFor="mce-source"
                  className={styles.registerFormLabel}
                >
                  How did you hear about us?
                </label>
                {/* <Select
                  label={strings.contactPageFormSourcePlaceholder}
                  name="source"
                  options={Object.values(Source).map(source => ({
                    name: source,
                    value: source,
                  }))}
                /> */}
                <select
                  id="mce-source"
                  name="source"
                  className={styles.registerSelect}
                >
                  <option className={styles.registerOption} value=""></option>
                  <option
                    className={styles.registerOption}
                    value="Friends and Family"
                  >
                    Friends and Family
                  </option>
                  <option className={styles.registerOption} value="Realtor">
                    Realtor
                  </option>
                  <option
                    className={styles.registerOption}
                    value="Signage / Walk by / Drive by"
                  >
                    Signage / Walk by / Drive by
                  </option>
                  <option
                    className={styles.registerOption}
                    value="Online Search"
                  >
                    Online Search
                  </option>
                  <option
                    className={styles.registerOption}
                    value="Social Media"
                  >
                    Social Media
                  </option>
                </select>
                <label
                  htmlFor="areYouAgentYes"
                  className={styles.registerFormLabel}
                >
                  * Are you working with an Agent / Realtor?
                </label>
                <div className={styles.registerCheckbox}>
                  <div style={{ paddingRight: '55px' }}>
                    <input
                      className={styles.registerCheckboxInput}
                      name="areYouAgentYes"
                      onClick={withAgentHandler}
                      placeholder="Yes"
                      type="checkbox"
                    />
                    <label
                      className={styles.registerCheckBoxLabel}
                      htmlFor="areYouAgentYes"
                    >
                      Yes
                    </label>
                  </div>
                  <div>
                    <input
                      className={styles.registerCheckboxInput}
                      name="areYouAgentNo"
                      onClick={notWithAgentHandler}
                      type="checkbox"
                    />
                    <label
                      htmlFor="areYouAgentNo"
                      className={styles.registerCheckBoxLabel}
                    >
                      No
                    </label>
                  </div>
                </div>
                <label htmlFor="agentName" className={styles.registerFormLabel}>
                  Agent / Realtor Name
                </label>
                <input
                  id="agentName"
                  name="agentName"
                  type="text"
                  className={styles.registerFormInput}
                />
              </Col>
              <Col md="12" lg="6" className={styles.registerColRight}>
                <label htmlFor="lastName" className={styles.registerFormLabel}>
                  * Last Name
                </label>
                <input
                  autoComplete="family-name"
                  className={styles.registerFormInput}
                  name="lastName"
                  required={true}
                  type="text"
                />
                <label
                  htmlFor="phoneNumber"
                  className={styles.registerFormLabel}
                >
                  Phone Number
                </label>
                <input
                  className={styles.registerFormInput}
                  name="phoneNumber"
                  required={true}
                  type="tel"
                />
                <label
                  htmlFor="areYouAgentYes"
                  className={styles.registerFormLabel}
                >
                  * Are you an Agent?
                </label>
                <div className={styles.registerCheckbox}>
                  <div style={{ paddingRight: '55px' }}>
                    <input
                      className={styles.registerCheckboxInput}
                      name="areYouAgentYes"
                      onClick={areAgentHandler}
                      placeholder="Yes"
                      type="checkbox"
                    />
                    <label
                      className={styles.registerCheckBoxLabel}
                      htmlFor="areYouAgentYes"
                    >
                      Yes
                    </label>
                  </div>
                  <div>
                    <input
                      className={styles.registerCheckboxInput}
                      name="areYouAgentNo"
                      onClick={notAgentHandler}
                      type="checkbox"
                    />
                    <label
                      htmlFor="areYouAgentNo"
                      className={styles.registerCheckBoxLabel}
                    >
                      No
                    </label>
                  </div>
                </div>
                <label htmlFor="broker" className={styles.registerFormLabel}>
                  Employee / Broker
                </label>
                <input
                  className={styles.registerFormInput}
                  name="broker"
                  type="text"
                />
                <section className={styles.registerCheckbox}>
                  <input
                    className={styles.registerCheckboxInput}
                    id="checkbox"
                    name="agreeToBeContacted"
                    type="checkbox"
                  />
                  <label
                    htmlFor="checkbox"
                    className={styles.registerAgreeLabel}
                  >
                    I agree to allow Union Allied and its affiliates to contact
                    me and send me information via email, phone, or SMS. I
                    understand I can unsubscribe at any time.
                  </label>
                </section>
                <Button
                  className={styles.registerSubmitBtn}
                  disabled={submitting}
                  type="submit"
                >
                  SUBMIT
                </Button>
              </Col>
            </Row>

            <section className={styles.responseMessage}>
              <RenderEitherOr
                ifTrue={responseMessage}
                thenRender={message => {
                  return <Typography>{message}</Typography>;
                }}
              />
            </section>
          </fieldset>
        </form>
      </Container>
    </section>
  );
}
function Contact(): JSX.Element {
  return (
    <section className={styles.registerContainer}>
      <Container className={styles.projectRowOne}>
        <Row className={styles.contactRowOne}>
          <Col className={styles.registerColLeft} md="12" lg="6">
            <div className={styles.projectHeadingBox}>
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>
              <div className={styles.registerHeading}>
                FOR MORE INFORMATION, PLEASE CONTACT:
              </div>
            </div>
          </Col>
          <Col
            md="12"
            lg="6"
            className={`${styles.registerColRight} ${styles.contactColRight}`}
          >
            <div>
              <div
                className={`${styles.contactText} ${styles.contactName} ${styles.contactTextTwo}`}
              >
                Kevin Kassautzki
              </div>
              <div
                className={`${styles.contactText} ${styles.contactPhone} ${styles.contactTextTwo}`}
              >
                604 646 8393
              </div>
              <div className={styles.contactText}>
                kevin.kassautzki@avisonyoung.com
              </div>
              <div className={styles.contactSpacer}></div>
            </div>
            <div>
              <div className={styles.contactSpacerTwo}></div>
              <div
                className={`${styles.contactText} ${styles.contactName} ${styles.contactTextTwo}`}
              >
                Ryan Kerr*
              </div>
              <div
                className={`${styles.contactText} ${styles.contactPhone} ${styles.contactTextTwo}`}
              >
                604 647 5094
              </div>
              <div className={styles.contactText}>
                ryan.kerr@avisonyoung.com
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
function Footer(): JSX.Element {
  return (
    <section className={styles.footerSecion}>
      {/* <div>
        <Image
          width={1920}
          height={428}
          layout="responsive"
          objectFit="cover"
          src="/images/footerOverlay.svg"
          alt="footerOverlay"
        />
      </div> */}
      <div className={styles.footerContainer}>
        <Image
          width={352.53}
          height={57.48}
          src="/images/Union-allied-logo2.svg"
          alt="Union-allied-logo2"
        />

        <div className={styles.footerLinkBox}>
          <div>TERMS OF USE</div>
          <div className={styles.footerLinkSpace}>|</div>
          <div>PRIVACY POLICY</div>
          <div className={styles.footerLinkSpace}>|</div>
          <div>
            <a
              className={styles.footerLink}
              href="https://www.alabcreative.ca/"
              target="_blank"
              rel="noreferrer"
            >
              SITE BY A_LAB CREATIVE
            </a>
          </div>
        </div>
        <div className={styles.footerText}>
          © 2022 Union Allied Capital Corporation. This is not an offering for
          sale. Any such offering can only be made with an information summary.
          All materials, measurements, specifications, renderings and layouts
          are preliminary and displayed for illustrative purposes only. The
          information contained herein is subject to change at any time without
          notice.
        </div>
      </div>
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
      <div className={styles.bgContainer}>
        <div className={styles.footerOverlay}>
          <Image
            // width={1920.5}
            // height={1900}
            layout="fill"
            objectFit="cover"
            src="/images/HPP-website-BG.svg"
            alt="HPP-Bg"
          />
        </div>
        <Register />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
