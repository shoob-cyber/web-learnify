export interface Module {
  id: number;
  title: string;
  description: string;
  category: 'Physical Health' | 'Mental Wellbeing' | 'Nutrition' | 'Life Skills';
  subject: string;
  grade: string;
  progress: number;
  icon?: React.ReactNode;
  bgColor: string;
  duration: string;
  topics: Topic[];
  relatedSubjects: string[];
  connections: CurriculumConnection[];
}

export interface Topic {
  id: number;
  title: string;
  completed: boolean;
  time: string;
}

export interface CurriculumConnection {
  subject: string;
  description: string;
}

export interface Class {
  id: number;
  name: string;
  students: number;
  modules: number;
  progress: number;
}

export interface Student {
  id: number;
  name: string;
  classId: number;
  completedModules: number;
  averageScore: number;
}

export interface Achievement {
  id: number;
  type: string;
  description: string;
  date: string;
  points?: number;
}

export interface Subject {
  id: string;
  name: string;
}

export interface CurriculumUnit {
  id: number;
  title: string;
  standards: string[];
  modules: number[];
}