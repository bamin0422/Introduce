export interface ProjectInfo {
  title: string;
  urlList?: UrlInfo[];
  startDate: string;
  endDate: string;
  info: string;
  taskList: string[];
  techStack: string;
}

export interface UrlInfo {
  name: string;
  href: string;
}
