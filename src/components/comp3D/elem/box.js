import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Box = ({ position = [] }) => {
    const ref = useRef();
    const [crate] = useLoader(TextureLoader, ["3d/crate.gif"]);

    useFrame(() => {
        ref.current.rotation.y += 0.001;
    }, []);
    return (
        <mesh position={position} ref={ref} castShadow>
            <boxGeometry args={[1, 2, 2]} />
            <meshStandardMaterial map={crate} />
        </mesh>
    );
};

export default Box;
