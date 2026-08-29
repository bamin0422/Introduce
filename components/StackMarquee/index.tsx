const STACK = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Jotai", "TanStack Query",
  "Storybook", "Turborepo", "pnpm", "Electron", "Three.js", "Framer Motion",
  "Sentry", "Nginx", "Docker", "Kotlin", "Android", "KMP", "Claude Code", "MCP",
  "Playwright", "NestJS", "Supabase", "Firebase",
];

/** 다뤄온 기술 스택을 끊김 없이 흘려보내는 띠 */
export default function StackMarquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="marquee glass rounded-full py-3" aria-label="기술 스택">
      <ul className="marquee-track px-6">
        {items.map((t, i) => (
          <li
            key={`${t}-${i}`}
            aria-hidden={i >= STACK.length}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-foreground/80"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
