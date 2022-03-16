import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import './App.css';

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 3, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 3, 0);
      }}
      ref={ref}
      position={[0, 3, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="#5817ba" />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry
        attach="geometry"
        args={[100, 100]}
      ></planeBufferGeometry>
      <meshLambertMaterial attach="material" color="red"></meshLambertMaterial>
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars radius={50} />
      <ambientLight intensity={0.6} />
      <spotLight angle={0.3} position={[10, 15, 10]} />
      <Physics>
        <Plane />
        <Box />
      </Physics>
    </Canvas>
  );
}
