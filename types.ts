export enum Category {
  REGULATIONS = '規章制度',
  FLOWCHARTS = '粒子流程表',
  FORMS = '共用表格'
}

export interface DocumentItem {
  id: string;
  title: string;
  category: Category;
  subCategory: string; // e.g., "組織系列", "一部門", "人事相關"
  date: string;
  driveId: string; // The Google Drive File ID
  description?: string;
}

export interface NavItem {
  label: string;
  value: Category | 'SEARCH';
}