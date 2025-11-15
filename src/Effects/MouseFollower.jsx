import { useEffect, useRef, useState } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 }); // target position (mouse)
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setPosition((prev) => {
        const dx = target.current.x - prev.x;
        const dy = target.current.y - prev.y;

        // Lerp: move fraction of distance
        return {
          x: prev.x + dx * 0.1, // adjust 0.1 for smoothness (smaller = slower)
          y: prev.y + dy * 0.1,
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const dotStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    width: '10px',
    height: '10px',
    backgroundColor: 'white',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
  };

  return <div style={dotStyle}></div>;
};

export default MouseFollower;
