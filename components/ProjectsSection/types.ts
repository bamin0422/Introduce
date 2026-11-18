import type { Visual } from "@web/components/viz";

export interface ProjectInfo {
  title: string;
  urlList?: UrlInfo[];
  startDate: string;
  endDate: string;
  problem: string;
  actions: string[];
  results: string[];
  techStack: string;
  /** 제목 옆 3D 아이콘 (public/images/icons/<icon>.webp) */
  icon?: string;
  /** 본문 아래 도표 */
  visuals?: Visual[];
  image?: string;
  imageAlt?: string;
}

export interface UrlInfo {
  name: string;
  href: string;
}
