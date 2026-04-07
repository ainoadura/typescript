import type { RegistrationStatus } from './types/university-types.js';

export const generateReport = (status: RegistrationStatus): string => {
  switch (status.type) {
    case "ACTIVE":
      return `Active: Enrolled in ${status.subjects.length} subjects.`;
    case "SUSPENDED":
      return `Suspended: ${status.suspensionReason}`;
    case "FINISHED":
      return `Finished: Final average grade of ${status.averageGrade}.`;
    default:
      return "Unknown status.";
  }
};
