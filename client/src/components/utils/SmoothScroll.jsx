import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;