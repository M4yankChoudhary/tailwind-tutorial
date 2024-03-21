import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [gradientStyle, setGradientStyle] 
  = useState({
    background: 
    'linear-gradient(to right, #ff0000, #0000ff)',
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.pageX;
      const windowWidth = window.innerWidth;
      const percentageX = (mouseX / windowWidth) * 100;
      const gradient = 
      `linear-gradient(to right,
      #ff0000 ${percentageX}%,
      #0000ff)`;
      setGradientStyle({ background: gradient });
    };
    window.addEventListener('mousemove',
    handleMouseMove);

    return () => {
      window.removeEventListener('mousemove',
      handleMouseMove);
    };
  }, []);

  return <div className="
  bg-black 
  h-screen 
  flex 
  items-center 
  justify-center">
    <button
    style={gradientStyle}
    className='bg-transparent
    hover:bg-transparent
    text-white 
    font-bold 
    py-2 px-4 
    rounded-full 
    shadow-md 
    transition 
    duration-300 
    ease-in-out'>Mouse Following Button</button>
  </div>

}

export default App;
