import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Earth = ({isMobile}) => {
  
  const earth = useGLTF('../assets/earth/scene.gltf');

  return (
    <>
    {isMobile ? (
      <primitive
      object={earth.scene}
      scale={4.5}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
      />
    ) : (
      <primitive
      object={earth.scene}
      scale={5}
      position={[0, -7, 0]}
      rotation={[0, 0, 0]}
      />
    )}

    </>
  )
}

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    }

    // Initial setup
    handleResize();

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render
  
  return (
    <Canvas
    shadows
    frameloop="demand"
    gl={{ preserveDrawingBuffer: true }}
    camera={{ 
      fov: isMobile ? 60 : Math.atan(1) * (180 / Math.PI) * 2,
      near: 0.1,
      far: 200,
      position: isMobile ? [-4, 3, 6] : [0, 0, 10]
     }}
    >
      <ambientLight intensity={3}/>
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas