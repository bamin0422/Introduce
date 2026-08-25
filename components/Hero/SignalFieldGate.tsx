"use client";
import { Component, useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

const SignalField = dynamic(() => import("./SignalField"), { ssr: false });

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
  useEffect(() => setOk(supportsWebGL()), []);
  if (ok === null) return null;
  if (!ok) return <StaticField />;
  return (
    <CanvasBoundary fallback={<StaticField />}>
      <SignalField reduced={reduced} />
    </CanvasBoundary>
  );
}
