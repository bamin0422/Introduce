"use client";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

const GlassField = dynamic(() => import("./GlassField"), { ssr: false });

/** WebGL을 만들 수 없는 환경(구형 브라우저·헤드리스·GPU 차단)에서는 정적 배경으로 대체한다. */
function supportsWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

class CanvasBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function StaticField() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.12), transparent 42%)",
      }}
    />
  );
}

export default function SignalFieldGate({ reduced }: { reduced: boolean }) {
  const [ok, setOk] = useState<boolean | null>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [scale, setScale] = useState(1);
  const [active, setActive] = useState(true);
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setOk(supportsWebGL());
    // 모바일에서는 컨테이너가 좁으니 씬을 줄인다
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      setOffsetX(0);
      setScale(mq.matches ? 0.8 : 0.62);
    };
    apply();
    mq.addEventListener("change", apply);
    // 히어로가 화면 밖이면 렌더 루프를 멈춘다
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0.05 });
    if (wrap.current) io.observe(wrap.current);
    return () => {
      mq.removeEventListener("change", apply);
      io.disconnect();
    };
  }, []);
  return (
    <div ref={wrap} className="absolute inset-0">
      {ok === false && <StaticField />}
      {ok && (
        <CanvasBoundary fallback={<StaticField />}>
          <GlassField reduced={reduced} offsetX={offsetX} scale={scale} active={active} />
        </CanvasBoundary>
      )}
    </div>
  );
}
