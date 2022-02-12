import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function CryptoCoin(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/glbs/CryptoCoin.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials.Stonks} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.OuterCoin}
        // rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Coin}
        // rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/glbs/CryptoCoin.glb')