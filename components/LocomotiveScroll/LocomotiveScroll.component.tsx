import { useRef} from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// declare const window: any;
// declare var LocomotiveScroll: any;

// export default () => {
//   useEffect(() => {
//     window.LocomotiveScroll = require('locomotive-scroll');

//     const scroll = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true,
//     });
//   }, []);
//   return (
//     <LocomotiveScroll options={{ smooth: true }} data-scroll-container>
//     </LocomotiveScroll>
//   )
// };

export default () => {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
        containerRef:{containerRef}
      }}
    >
      <main data-scroll-container ref={containerRef}>
        <h2 className='test' data-scroll  data-scroll-speed="100">i love you</h2>
      </main>
    </LocomotiveScrollProvider>
  );
};
