// CubeScene.jsx
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'
export default function CubeScene() {
  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight intensity={0.6} />
      <mesh>
        <boxGeometry/>
        <meshStandardMaterial color="white"/>
      </mesh>
    </Canvas>
  );
}
