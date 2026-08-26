"use client";
import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/** 히어로 칩에도 쓰는 플랫폼 목록 */
export const PLATFORMS = [
  { label: "Android" },
  { label: "Web" },
  { label: "Electron" },
  { label: "MCP" },
  { label: "Skills" },
  { label: "WebView" },
] as const;

const BLUE = "#1F6FEB";
const TEAL = "#14B8A6";
// 유리 틴트는 연하게 — 화면 콘텐츠가 색을 담당한다
const GLASS_BLUE = "#dbeafe";
const GLASS_TEAL = "#ccfbf1";
const NAVY = "#0B1F33";

type ScreenKind = "code" | "dashboard" | "chat" | "mobile";

/** 화면 콘텐츠를 캔버스로 그려 텍스처로 만든다 — 실제 글자는 없고 코드/차트/카드 형태의 막대만 */
function makeScreen(kind: ScreenKind, w = 512, h = 320): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  const rnd = (seed: number) => {
    let s = seed;
    return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  };
  const r = rnd(kind.length * 17 + w);
  const rr = (x: number, y: number, ww: number, hh: number, rad: number, fill: string) => {
    g.fillStyle = fill;
    g.beginPath();
    g.roundRect(x, y, ww, hh, rad);
    g.fill();
  };
  if (kind === "code") {
    g.fillStyle = NAVY;
    g.fillRect(0, 0, w, h);
    rr(0, 0, w, 26, 0, "#12294a");
    ["#ff5f57", "#febc2e", "#28c840"].forEach((col, i) => rr(12 + i * 18, 8, 10, 10, 5, col));
    const cols = ["#7dd3fc", "#5eead4", "#f9a8d4", "#e2e8f0", "#93c5fd"];
    for (let y = 44; y < h - 10; y += 22) {
      let x = 20 + Math.floor(r() * 3) * 22;
      const n = 2 + Math.floor(r() * 4);
      for (let i = 0; i < n; i++) {
        const len = 30 + r() * 90;
        rr(x, y, len, 10, 5, cols[Math.floor(r() * cols.length)]);
        x += len + 10;
      }
    }
  } else if (kind === "dashboard") {
    g.fillStyle = "#f6fbfb";
    g.fillRect(0, 0, w, h);
    rr(0, 0, w, 36, 0, "#ffffff");
    rr(16, 12, 90, 12, 6, "#cbd5e1");
    for (let i = 0; i < 3; i++) rr(16 + i * 160, 52, 144, 64, 12, "#ffffff");
    for (let i = 0; i < 3; i++) rr(28 + i * 160, 64, 50, 8, 4, "#94a3b8");
    for (let i = 0; i < 3; i++) rr(28 + i * 160, 84, 80, 16, 6, i === 1 ? TEAL : BLUE);
    rr(16, 132, w - 32, h - 148, 12, "#ffffff");
    g.strokeStyle = TEAL;
    g.lineWidth = 4;
    g.beginPath();
    let py = 240;
    for (let x = 32; x < w - 32; x += 40) {
      py = 200 + Math.sin(x / 50) * 30 + r() * 20;
      x === 32 ? g.moveTo(x, py) : g.lineTo(x, py);
    }
    g.stroke();
    g.fillStyle = BLUE;
    for (let x = 32; x < w - 32; x += 40) {
      g.beginPath();
      g.arc(x, 200 + Math.sin(x / 50) * 30 + 10, 4, 0, Math.PI * 2);
      g.fill();
    }
  } else if (kind === "chat") {
    g.fillStyle = "#ffffff";
    g.fillRect(0, 0, w, h);
    rr(0, 0, w, 40, 0, "#f1f5f9");
    rr(16, 12, 16, 16, 8, TEAL);
    rr(40, 15, 70, 10, 5, "#94a3b8");
    let y = 56;
    for (let i = 0; i < 6; i++) {
      const mine = i % 2 === 1;
      const ww = 120 + r() * 160;
      rr(mine ? w - 16 - ww : 16, y, ww, 28, 12, mine ? BLUE : "#e2e8f0");
      y += 40;
    }
  } else {
    g.fillStyle = "#ffffff";
    g.fillRect(0, 0, w, h);
    rr(0, 0, w, 60, 0, TEAL);
    rr(20, 22, 90, 12, 6, "rgba(255,255,255,.8)");
    rr(20, 84, w - 40, 70, 16, "#eefaf7");
    rr(36, 100, 120, 10, 5, "#0f766e");
    rr(36, 120, 200, 18, 8, TEAL);
    for (let i = 0; i < 3; i++) rr(20, 174 + i * 44, w - 40, 32, 10, "#f1f5f9");
    rr(20, h - 56, w - 40, 40, 20, BLUE);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function GlassMat({ tint, opacity = 1 }: { tint: string; opacity?: number }) {
  return (
    <MeshTransmissionMaterial
      samples={4}
      resolution={384}
      thickness={0.35}
      roughness={0.28}
      transmission={1}
      ior={1.35}
      chromaticAberration={0.02}
      anisotropicBlur={0.2}
      distortion={0.1}
      distortionScale={0.3}
      temporalDistortion={0.1}
      color={tint}
      attenuationColor={tint}
      attenuationDistance={1.6}
      opacity={opacity}
      transparent
      toneMapped={false}
    />
  );
}

type PanelProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  size: [number, number];
  tint: string;
  screen?: ScreenKind;
  screenInset?: number;
  depth?: number;
  floatSpeed?: number;
  reduced: boolean;
};

/** 둥근 유리 슬랩. 안쪽에 화면 텍스처 플레인을 살짝 띄운다 */
function Panel({ position, rotation = [0, 0, 0], size, tint, screen, screenInset = 0.08, depth = 0.08, floatSpeed = 1, reduced }: PanelProps) {
  const [w, h] = size;
  const tex = useMemo(() => (screen ? makeScreen(screen, 512, Math.round((512 * h) / w)) : null), [screen, w, h]);
  const ref = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);
  useFrame((_, dt) => {
    if (!ref.current) return;
    const target = hover ? 1.06 : 1;
    ref.current.scale.lerp(new THREE.Vector3(target, target, target), Math.min(1, dt * 8));
  });
  const body = (
    <group
      ref={ref}
      position={position}
      rotation={rotation}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHover(false);
        document.body.style.cursor = "";
      }}
    >
      <RoundedBox args={[w, h, depth]} radius={Math.min(w, h) * 0.12} smoothness={6}>
        <GlassMat tint={tint} />
      </RoundedBox>
      {tex && (
        <mesh position={[0, 0, depth / 2 + 0.002]}>
          <planeGeometry args={[w - screenInset * 2, h - screenInset * 2]} />
          <meshBasicMaterial map={tex} toneMapped={false} transparent opacity={0.85} />
        </mesh>
      )}
    </group>
  );
  if (reduced) return body;
  return (
    <Float speed={floatSpeed} rotationIntensity={0.25} floatIntensity={0.6}>
      {body}
    </Float>
  );
}

/** 노트북: 화면 패널 + 받침 슬랩 */
function Laptop({ position, reduced }: { position: [number, number, number]; reduced: boolean }) {
  return (
    <group position={position} rotation={[0.05, -0.55, 0.02]}>
      <Panel position={[0, 0.5, 0]} rotation={[-0.12, 0, 0]} size={[1.6, 1.0]} tint={GLASS_TEAL} screen="code" depth={0.06} reduced={reduced} floatSpeed={0.8} />
      <Panel position={[0, -0.06, 0.55]} rotation={[-Math.PI / 2 + 0.1, 0, 0]} size={[1.7, 1.05]} tint={GLASS_TEAL} depth={0.05} reduced={reduced} floatSpeed={0.8} />
    </group>
  );
}

/** 마우스 위치에 따라 씬 전체를 살짝 기울인다 */
function Rig({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame((_, dt) => {
    if (!group.current || reduced) return;
    const tx = pointer.y * 0.12;
    const ty = pointer.x * 0.22;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, tx, 4, dt);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, ty, 4, dt);
  });
  return (
    <group ref={group}>
      {/* 왼쪽·상단 가장자리에 모으고 텍스트 영역(중앙 오른쪽)은 비운다 */}
      <Laptop position={[-4.6, -1.9, 0.2]} reduced={reduced} />
      <Panel position={[-3.2, 1.9, -0.8]} size={[2.6, 1.7]} tint={GLASS_BLUE} screen="dashboard" reduced={reduced} floatSpeed={0.6} />
      <Panel position={[-6.2, 0.6, 0.4]} rotation={[0.1, 0.35, -0.05]} size={[0.78, 1.6]} tint={GLASS_TEAL} screen="mobile" depth={0.07} reduced={reduced} floatSpeed={1.2} />
      <Panel position={[0.4, 2.6, -1.0]} rotation={[0.05, -0.2, 0.04]} size={[1.3, 0.8]} tint={GLASS_BLUE} screen="chat" reduced={reduced} floatSpeed={1} />
      <Panel position={[4.6, 2.5, -1.6]} rotation={[0, -0.25, 0]} size={[1.1, 0.7]} tint={GLASS_TEAL} reduced={reduced} floatSpeed={0.9} />
      <Panel position={[5.6, -1.6, -0.6]} rotation={[0, -0.5, 0]} size={[0.9, 1.3]} tint={GLASS_TEAL} screen="code" reduced={reduced} floatSpeed={1.1} />
      <Panel position={[3.2, -2.9, -1.2]} rotation={[0.1, -0.3, 0]} size={[1.6, 0.9]} tint={GLASS_BLUE} reduced={reduced} floatSpeed={0.7} />
    </group>
  );
}

/** 굴절이 보이도록 뒤에 옅은 그라데이션 배경판을 둔다 */
function Backdrop() {
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    const g = c.getContext("2d")!;
    const grad = g.createLinearGradient(0, 0, 64, 64);
    grad.addColorStop(0, "#f5fafb");
    grad.addColorStop(0.5, "#eaf3ff");
    grad.addColorStop(1, "#e6f7f4");
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
  return (
    <mesh position={[0, 0, -4]}>
      <planeGeometry args={[30, 18]} />
      <meshBasicMaterial map={tex} toneMapped={false} />
    </mesh>
  );
}

export default function GlassField({ reduced, offsetX = 0, scale = 1 }: { reduced: boolean; offsetX?: number; scale?: number }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : "always"}
      aria-hidden
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} color="#ffffff" />
      <directionalLight position={[-5, -2, 3]} intensity={0.6} color={TEAL} />
      <group position={[offsetX, 0, 0]} scale={scale}>
        <Backdrop />
        <Rig reduced={reduced} />
      </group>
    </Canvas>
  );
}
