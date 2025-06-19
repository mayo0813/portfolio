export interface Work {
  id: string;
  title: string;
  year: string;
  materials: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export interface YearSection {
  year: string;
  works: Work[];
} 