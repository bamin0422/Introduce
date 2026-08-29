"use client";
import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/** 히어로 칩에도 쓰는 플랫폼 목록 */
export const PLATFORMS = [
  { label: "React · Next.js" },
  { label: "Design System" },
  { label: "Electron" },
  { label: "WebView Bridge" },
  { label: "MCP · Claude Code" },
  { label: "Android" },
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

/** 유리 재질 — 굴절(transmission)은 패널마다 씬을 다시 그려 너무 비싸므로 반투명 + 클리어코트로 흉내낸다 */
function GlassMat({ tint }: { tint: string }) {
  return (
    <meshPhysicalMaterial
      color={tint}
      transparent
      opacity={0.62}
      roughness={0.3}
      metalness={0}
      clearcoat={1}
      clearcoatRoughness={0.25}
      envMapIntensity={0}
      depthWrite={false}
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
function Laptop({ position, rotation = [0, 0, 0], reduced }: { position: [number, number, number]; rotation?: [number, number, number]; reduced: boolean }) {
  return (
    <group position={position} rotation={rotation}>
      <Panel position={[0, 0.5, 0]} rotation={[-0.12, 0, 0]} size={[1.6, 1.0]} tint={GLASS_TEAL} screen="code" depth={0.06} reduced={reduced} floatSpeed={0.8} />
      <Panel position={[0, -0.06, 0.55]} rotation={[-Math.PI / 2 + 0.1, 0, 0]} size={[1.7, 1.05]} tint={GLASS_TEAL} depth={0.05} reduced={reduced} floatSpeed={0.8} />
    </group>
  );
}

/** 모니터: 화면 + 스탠드 */
function Monitor({ position, reduced }: { position: [number, number, number]; reduced: boolean }) {
  return (
    <group position={position}>
      <Panel position={[0, 0.2, 0]} size={[2.9, 1.8]} tint={GLASS_BLUE} screen="dashboard" screenInset={0.1} depth={0.1} reduced={reduced} floatSpeed={0.5} />
      <Panel position={[0, -0.95, -0.05]} size={[0.32, 0.5]} tint={GLASS_BLUE} depth={0.08} reduced={reduced} floatSpeed={0.5} />
      <Panel position={[0, -1.25, 0.05]} rotation={[-Math.PI / 2, 0, 0]} size={[1.3, 0.5]} tint={GLASS_BLUE} depth={0.06} reduced={reduced} floatSpeed={0.5} />
    </group>
  );
}

/** 마우스 위치에 따라 씬 전체를 살짝 기울인다 — 레퍼런스처럼 중앙에 모은 구도 */
function Rig({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame((_, dt) => {
    if (!group.current || reduced) return;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * 0.1, 4, dt);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.2, 4, dt);
  });
  return (
    <group ref={group} rotation={[0.08, -0.15, 0]}>
      {/* 뒤판 */}
      <Panel position={[0.3, 0.5, -1.2]} size={[4.2, 2.6]} tint={GLASS_BLUE} depth={0.06} reduced={reduced} floatSpeed={0.4} />
      {/* 바닥 슬랩 */}
      <Panel position={[-1.6, -1.5, 0.6]} rotation={[-1.25, 0.15, 0.2]} size={[3.0, 2.0]} tint="#60a5fa" depth={0.1} reduced={reduced} floatSpeed={0.4} />
      <Monitor position={[0, 0.1, 0]} reduced={reduced} />
      <Laptop position={[2.3, -0.7, 0.9]} rotation={[0.05, -0.55, 0.02]} reduced={reduced} />
      <Panel position={[-2.2, -0.55, 1.2]} rotation={[0.15, 0.4, -0.08]} size={[0.72, 1.5]} tint={GLASS_TEAL} screen="mobile" depth={0.07} reduced={reduced} floatSpeed={1.1} />
      <Panel position={[-1.5, 0.35, 0.8]} rotation={[0.05, 0.25, 0]} size={[1.2, 0.8]} tint={GLASS_TEAL} screen="chat" depth={0.06} reduced={reduced} floatSpeed={1} />
      <Panel position={[1.3, 1.2, 0.7]} rotation={[0.05, -0.2, 0.03]} size={[1.1, 0.7]} tint={GLASS_BLUE} screen="code" depth={0.06} reduced={reduced} floatSpeed={0.9} />
      <Panel position={[2.2, 1.9, -0.9]} rotation={[0, -0.3, 0]} size={[1.6, 1.0]} tint="#5eead4" depth={0.08} reduced={reduced} floatSpeed={0.7} />
    </group>
  );
}

/** 굴절이 보이도록 뒤에 옅은 배경판 — 가장자리는 투명하게 페이드해 페이지 배경과 섞는다 */
function Backdrop() {
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 256;
    const g = c.getContext("2d")!;
    const grad = g.createRadialGradient(128, 128, 20, 128, 128, 128);
    grad.addColorStop(0, "rgba(226, 240, 255, 1)");
    grad.addColorStop(0.55, "rgba(230, 247, 244, 0.9)");
    grad.addColorStop(1, "rgba(245, 250, 251, 0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, 256, 256);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[9, 9]} />
      <meshBasicMaterial map={tex} transparent toneMapped={false} />
    </mesh>
  );
}

export default function GlassField({ reduced, offsetX = 0, scale = 1, active = true }: { reduced: boolean; offsetX?: number; scale?: number; active?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 8.5], fov: 36 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance", stencil: false }}
      frameloop={reduced || !active ? "demand" : "always"}
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
