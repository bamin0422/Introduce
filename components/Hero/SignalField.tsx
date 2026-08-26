"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * SignalField — "Learn once, write anywhere"를 시각화한 3D 신호 격자.
 * 중앙의 소스 노드에서 각 플랫폼 노드로 펄스가 흘러간다.
 * 마우스 위치에 따라 카메라가 살짝 기울어지고, 격자는 천천히 호흡한다.
 */

export const PLATFORMS = [
  { label: "Android", pos: [-3.2, 1.6, -0.6] },
  { label: "Web", pos: [3.0, 1.9, -0.2] },
  { label: "Electron", pos: [-2.6, -1.8, 0.4] },
  { label: "MCP", pos: [2.8, -1.6, 0.2] },
  { label: "Skills", pos: [0.2, 2.6, -1.2] },
  { label: "WebView", pos: [-0.4, -2.7, -0.8] },
] as const;

const ACCENT = new THREE.Color("#1F6FEB");
const SIGNAL = new THREE.Color("#14B8A6");
const INK = new THREE.Color("#0B1F33");

function Lattice({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, count } = useMemo(() => {
    const cols = 26;
    const rows = 16;
    const arr = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        arr[i++] = (x / (cols - 1) - 0.5) * 12;
        arr[i++] = (y / (rows - 1) - 0.5) * 7;
        arr[i++] = -2;
      }
    }
    return { positions: arr, count: cols * rows };
  }, []);
  const base = useMemo(() => positions.slice(), [positions]);

  useFrame(({ clock }) => {
    if (!ref.current || reduced) return;
    const t = clock.elapsedTime;
    const attr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      const x = base[i * 3];
      const y = base[i * 3 + 1];
      attr.array[i * 3 + 2] =
        -2 + Math.sin(x * 0.6 + t * 0.7) * 0.25 + Math.cos(y * 0.8 + t * 0.5) * 0.2;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.035} color={INK} transparent opacity={0.28} sizeAttenuation />
    </points>
  );
}

function Pulse({
  to,
  delay,
  reduced,
}: {
  to: THREE.Vector3;
  delay: number;
  reduced: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const from = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    if (reduced) {
      ref.current.position.copy(to);
      return;
    }
    const period = 3.6;
    const p = ((clock.elapsedTime + delay) % period) / period;
    const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
    ref.current.position.lerpVectors(from, to, eased);
    const s = 1 - Math.abs(p - 0.5) * 1.2;
    ref.current.scale.setScalar(Math.max(0.2, s));
    (ref.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0.1, s);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshBasicMaterial color={SIGNAL} transparent opacity={0.9} />
    </mesh>
  );
}

function Node({
  pos,
  index,
  reduced,
}: {
  pos: THREE.Vector3;
  index: number;
  reduced: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current || reduced) return;
    const t = clock.elapsedTime;
    ref.current.position.set(
      pos.x + Math.sin(t * 0.5 + index) * 0.12,
      pos.y + Math.cos(t * 0.6 + index * 1.7) * 0.12,
      pos.z
    );
  });
  return (
    <group ref={ref} position={pos}>
      <mesh>
        <ringGeometry args={[0.13, 0.17, 32]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.9} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <circleGeometry args={[0.06, 24]} />
        <meshBasicMaterial color={ACCENT} />
      </mesh>
    </group>
  );
}

function Source({ reduced }: { reduced: boolean }) {
  const ring = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ring.current || reduced) return;
    const t = clock.elapsedTime % 2.4;
    const s = 1 + t * 0.9;
    ring.current.scale.setScalar(s);
    (ring.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.6 - t * 0.25);
  });
  return (
    <group>
      <mesh>
        <circleGeometry args={[0.16, 32]} />
        <meshBasicMaterial color={INK} />
      </mesh>
      <mesh ref={ring}>
        <ringGeometry args={[0.2, 0.22, 48]} />
        <meshBasicMaterial color={SIGNAL} transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Rig({ reduced }: { reduced: boolean }) {
  const { camera, pointer } = useThree();
  useFrame(() => {
    if (reduced) return;
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene({ reduced, offsetX }: { reduced: boolean; offsetX: number }) {
  const targets = useMemo(
    () => PLATFORMS.map((p) => new THREE.Vector3(...(p.pos as unknown as [number, number, number]))),
    []
  );
  return (
    <group position={[offsetX, 0.2, 0]}>
      <Rig reduced={reduced} />
      <Lattice reduced={reduced} />
      {targets.map((t, i) => (
        <Line
          key={i}
          points={[new THREE.Vector3(0, 0, 0), t]}
          color="#1F6FEB"
          lineWidth={1}
          transparent
          opacity={0.18}
        />
      ))}
      {targets.map((t, i) => (
        <Node key={i} pos={t} index={i} reduced={reduced} />
      ))}
      {targets.map((t, i) => (
        <Pulse key={i} to={t} delay={i * 0.6} reduced={reduced} />
      ))}
      <Source reduced={reduced} />
    </group>
  );
}

export default function SignalField({ reduced, offsetX = 0 }: { reduced: boolean; offsetX?: number }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduced ? "demand" : "always"}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden
    >
      <Scene reduced={reduced} offsetX={offsetX} />
    </Canvas>
  );
}
