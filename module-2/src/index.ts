import type { Student, Subject } from './domain/types/university-types.js';
import { generateReport } from './domain/registration-logic.js';
import { getResource } from './services/api-client.js';

console.log("--- Module 2: University Management System ---");

async function runUniversityDemo() {
  // 1. Simulación de datos de prueba
  const mathSubject: Subject = {
    code: "MATH101",
    title: "Advanced Mathematics",
    credits: 6,
    isElective: false
  };

  const studentData: Student = {
    id: "STU-001",
    name: "Ainoa Dura",
    email: "ainoa@example.com",
    enrollmentDate: new Date(),
    isActive: true
  };

  // 2. Probar el servicio de API Genérico para obtener un reporte
  console.log("Starting API call...");
  
  const response = await getResource<Student>("students/1");

  if (response.success) {
    console.log("API Response Success!");
    
    // 3. Probamos la lógica de reporte con una matrícula activa manual
    const activeStatus = {
      type: "ACTIVE" as const,
      subjects: [mathSubject]
    };

    console.log(generateReport(activeStatus));
  } else {
    console.error(`API Error: ${response.error}`);
  }
}

runUniversityDemo();
