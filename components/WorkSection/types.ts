export interface WorkInfo {
  title: string;
  role: string;
  startDate: string;
  endDate: string;
  details: WorkDetailInfo[];
}

export interface WorkDetailInfo {
  title: string;
  info: string;
  myTaskList: string[];
  techStack: string;
}
