export interface ProjectInfo {
  title: string;
  urlList?: UrlInfo[];
  startDate: string;
  endDate: string;
  problem: string;
  actions: string[];
  results: string[];
  techStack: string;
  image?: string;
  imageAlt?: string;
}

export interface UrlInfo {
  name: string;
  href: string;
}
