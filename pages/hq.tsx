import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  // Accordion,
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
import dynamic from 'next/dynamic';

const DynamicJqueryDiamonds = dynamic(
  () => import('../components/JqueryRipples/JqueryRipples.component'),
  { ssr: false }
);

function Header(): JSX.Element {
  return (
    <Container className={styles.headerContainer}>
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
  );
}
function HeroBanner(): JSX.Element {
  return (
    <>
      <DynamicJqueryDiamonds />
      <section id="home" className={styles.hero}>
        {/* <div id="bgimg" className={styles.bgImgContainer}></div> */}
        <div className={styles.bnrIntroContainer}>
          <div className={styles.bnrIntro}>
            <div className={styles.headline}>
              <h1 className={styles.headHone}>
                TAKE YOUR
                <br />
                BUSINESS TO
                <br />
                NEW HEIGHTS
              </h1>
              <div className={styles.address}>
                8290 ROSS STREET, VANCOUVER, BC
              </div>
            </div>
            <Link href="#opportunity">
              <a className={styles.arrowDownContainer}>
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
              <a className={styles.unionalliedlogoContianer} target="_blank">
                <Image
                  src="/images/Union-allied-logo-grayscale.png"
                  width={243}
                  height={39.62}
                  className="arrowdown"
                  alt="scroll-icon"
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
function Opportunity(): JSX.Element {
  return (
    <section id="opportunity" className={styles.opportunity}>
      <Container className={styles.opportunityContainer}>
        <Row className={styles.header}>
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
          className={styles.hqStrataUnits}
        />
        <Row className={styles.opportunityDetail}>
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
  );
}
function Location(): JSX.Element {
  return (
    <section id="location" className={styles.location}>
      <Container className={styles.locationContainer}>
        <Row className={styles.locationRow}>
          <Col xs="6">
            <h2 className={styles.headHtwo}>LOCATION</h2>
          </Col>
          <Col xs="6">
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
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseEvent() {
    setMouseOver(!isMouseOver);
  }
  function handleMouseEventLeave() {
    setMouseOver(isMouseOver);
  }

  const nextIcon = (
    <span aria-hidden="true" className={styles.carouselControlNextIcon} />
  );
  const prevIcon = (
    <span aria-hidden="false" className={styles.carouselControlPrevIcon} />
  );

  return (
    <section id="building" className={styles.building}>
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
          </Col>
          <Col
            xs="3"
            className={isMouseOver ? styles.listItemsAcitve : styles.headH5Con}
            onMouseOver={handleMouseEvent}
            onMouseLeave={handleMouseEventLeave}
          >
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
          </Col>
          <Col xs="3" className={styles.headH5Con}>
            <h5 className={styles.headH5}>RECREATION</h5>
          </Col>
        </Row>
      </Container>
      <Carousel
        className={styles.carouselContainer}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
        indicators={false}
      >
        <Carousel.Item>
          <Image
            src="/images/Aerial View.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Aerial View"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/Dollhouse-1.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Dollhouse-1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/Dollhouse-2.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Dollhouse-2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/Street View.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Street View"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

function Feature(): JSX.Element {
  return (
    <section id="features" className={styles.featureContainer}>
      <Image
        src="/images/UNIT FEATURES.svg"
        width={1621}
        height={197}
        layout="responsive"
        alt="feature"
      />

      <Container className={styles.featureList}>
        <Row>
          <Col xs="12" md="6">
            <div className={styles.featureBox}>
              <Image
                src="/images/parking.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="parking"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>PARKING</div>
                <div className={styles.featureTextTwo}>
                  2 parking stalls per unit
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/electric-power.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="electric-power"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>ELECTRICAL SERVICE</div>
                <div className={styles.featureTextTwo}>
                  100 amp, 600 volt, 3 phase with potential upgrade up to 200
                  amp
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/warehouse.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="warehouse"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>LOADING DOOR</div>
                <div className={styles.featureTextTwo}>
                  Grade level loading per unit (10’x14’)
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/pipe.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="pipe"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>DRAINAGE</div>
                <div className={styles.featureTextTwo}>
                  *contact Listing Agents for details
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/ladder.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="ladder"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>CEILING HEIGHTS</div>
                <div className={styles.featureTextTwo}>
                  • 30’ clear heights in warehouse
                </div>
                <div className={styles.featureTextTwo}>
                  • 18’ clear heights under mezzanine
                </div>
                <div className={styles.featureTextTwo}>
                  • 11’ clear heights in mezzanine
                </div>
              </div>
            </div>
          </Col>
          <Col xs="12" md="6">
            <div className={styles.featureBox}>
              <Image
                src="/images/spotlight.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="spotlight"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>LIGHTING</div>
                <div className={styles.featureTextTwo}>
                  High efficiency LED lighting
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/sprinkler.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="sprinkler"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>SPRINKLERS</div>
                <div className={styles.featureTextTwo}>ESFR Sprinklers</div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/lamp.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="lamp"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>SKYLIGHTS</div>
                <div className={styles.featureTextTwo}>
                  3 skylights per unit
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/brick-wall.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="brick-wall"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>CONSTRUCTION</div>
                <div className={styles.featureTextTwo}>Concrete tilt up</div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/push-cart.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="push-cart"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>FLOOR LOAD</div>
                <div className={styles.featureTextTwo}>
                  Heavy floor load capacity
                </div>
                <div className={styles.featureTextTwo}>
                  • 350 lbs/sf main floor
                </div>
                <div className={styles.featureTextTwo}>
                  • 100 lbs/sf mezzanine
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <section id="siteplan" className={styles.floorContainer}>
        <Image
          src="/images/SITEPLAN.svg"
          width={1695}
          height={216}
          layout="responsive"
          alt="floor"
        />
        <div
          style={{
            paddingTop: '69px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/images/Siteplan-overview-V4.svg"
            width={1520}
            height={800}
            // layout="intrinsic"
            alt="floorPlan"
            className={styles.floorPlan}
          />
        </div>
        <div className={styles.floorBtnBox}>
          <Button className={styles.floorBtn}>
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              target="_blank"
              href="/images/A211108_UAC_High-Point-Park_SITEPLAN_V4.pdf"
            >
              DOWNLOAD ALL PLANS
            </a>
          </Button>
        </div>
      </section> */}
    </section>
  );
}

function Gallery(): JSX.Element {
  const nextIcon = (
    <span aria-hidden="true" className={styles.carouselControlNextIcon} />
  );
  const prevIcon = (
    <span aria-hidden="false" className={styles.carouselControlPrevIcon} />
  );
  return (
    <section>
      <div className={styles.galleryContainer}>
        <Container className={styles.projectRowOne}>
          <Image
            src="/images/OVERVIEW.svg"
            width={1656}
            height={216}
            layout="responsive"
            alt="gallery"
          />
          <Row className={styles.projectRowOneText}>
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
                <div className={styles.projectHeading}>
                  METRO VANCOUVER AND BURNABY AREA INDUSTRIAL OVERVIEW &
                  STATISTICS, Q4 2021
                </div>
              </div>
            </Col>
            <Col md="12" lg="6" className={styles.projectTextBox}>
              <div className={styles.projectText}>
                <p>
                  As of Q4 2021, Metro Vancouver remains to be North America’s
                  tightest industrial market for six consecutive quarters.
                  Availability of space, land use issues, increased e-commerce
                  demand due to the ongoing pandemic, and labour proximity have
                  all been contributing factors in the rapid price appreciation
                  of industrial assets and land. With the lowest vacancy rate in
                  North America at 0.5%, the region’s average rental rate has
                  increased by 97% in the past seven years and industrial
                  investment has reached record highs in the same time frame,
                  reaching $2.3B in 2021.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Carousel
        className={styles.carouselContainer}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
        indicators={false}
      >
        <Carousel.Item>
          <Image
            src="/images/Aerial View.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Aerial View"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/Dollhouse-1.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Dollhouse-1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/Dollhouse-2.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Dollhouse-2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/Street View.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Street View"
          />
        </Carousel.Item>
      </Carousel>
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
export default function HighPointPark() {
  return (
    <main className={styles.page}>
      <Header />
      <HeroBanner />
      <Opportunity />
      <Location />
      <Building />
      <Feature />
      <Gallery />
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
