export interface WorkInfo {
  title: string;
  role: string;
  startDate: string;
  endDate: string;
  details: WorkDetailInfo[];
}

export interface WorkDetailInfo {
  title: string;
  problem: string;
  actions: string[];
  results: string[];
  techStack: string;
}
