export interface Student {
  readonly id: string;
  name: string;
  email: string;
  enrollmentDate: Date;
  isActive: boolean;
}

export interface Subject { 
  readonly code: string;
  title: string;
  credits: number;
  isElective: boolean; 
}

export interface Professor {
  readonly id: string;
  name: string;
  email: string;
  department: string;
  isTenured: boolean; 
}

// Specific interfaces for each state
export interface ActiveRegistration {
  readonly type: "ACTIVE";
  subjects: Subject[]; // Array de las asignaturas
}

export interface SuspendedRegistration {
  readonly type: "SUSPENDED";
  suspensionReason: string;
}

export interface FinishedRegistration {
  readonly type: "FINISHED";
  averageGrade: number;
}

// The Discriminated Union
export type RegistrationStatus = 

  | ActiveRegistration 
  | SuspendedRegistration 
  | FinishedRegistration;

  // Add this to university-types.ts
export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error?: string; // Mensaje opcional en caso de fallo
}
