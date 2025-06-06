export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  classes?: string[]; // Optional array of class IDs
}