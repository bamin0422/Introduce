export interface WorkInfo {
  title: string;
  role: string;
  startDate: string | Date;
  endDate: string | Date;
  details: WorkDetailInfo[];
}

export interface WorkDetailInfo {
  title: string;
  info: string;
  myTaskList: string[];
  techStack: string;
}
