import React, { useEffect, useState } from 'react'

const MouseFollower = () => {
    const [position, setPosition] = useState({x:0,y:0});

    useEffect(() => {
      const follower = (e) => {
        setPosition({x: e.clientX, y: e.clientY})
      }
      window.addEventListener('mousemove', follower)
      return () => {
        window.removeEventListener('mousemove', follower)
      }
    }, [])
    const dotStyle = {
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '10px',
        height: '10px',
        backgroundColor: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-10%, -10%)',
        zIndex: 9999,
        transition: 'top 0.05s, left 0.05s', // smooth follow
      };
  return <div style={dotStyle}></div>
}

export default MouseFollower