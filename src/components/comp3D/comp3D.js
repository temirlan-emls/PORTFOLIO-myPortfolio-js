import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows } from "@react-three/drei";
import Box from "./elem/box";

function Comp3D() {
    softShadows();
    return (
        <>
            <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} />
                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
                <group>
                    <mesh
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -3, 0]}
                    >
                        <planeBufferGeometry
                            attach="geometry"
                            args={[100, 100]}
                        />
                        <shadowMaterial
                            attach="material"
                            opacity={0.3}
                            color="black"
                        />
                    </mesh>
                </group>

                <Box position={[0, 0.1, 0]} />
            </Canvas>
        </>
    );
}

export default Comp3D;
