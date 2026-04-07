import type { ApiResponse } from '../domain/types/university-types.js';
/**
 * Generic API Client to simulate database calls
 */
export const apiClient = {
  /**
   * Simulates fetching data from a database with a delay
   * @param data The data to return (simulating the DB response)
   * @param delay Time in milliseconds to wait
   */
  async fetchData<T>(data: T, delay: number = 1000): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("--- Data fetched successfully from simulated DB ---");
        resolve(data);
      }, delay);
    });
  },

  /**
   * Simulates saving data to a database
   */
  async saveData<T>(data: T): Promise<{ success: boolean; savedItem: T }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("--- Data saved successfully to simulated DB ---");
        resolve({
          success: true,
          savedItem: data,
        });
      }, 800);
    });
  }
};

/**
 * Generic method to fetch a resource with a structured API response
 */
export const getResource = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  return new Promise((resolve) => {
    console.log(`--- Fetching from: /api/${endpoint} ---`);

    setTimeout(() => {
      // Simulación de validación: si el endpoint es 'error', fallamos
      if (endpoint === 'error') {
        resolve({
          success: false,
          data: null,
          error: "Resource not found or database connection failed"
        });
      } else {
        // En una simulación real, aquí devolveríamos datos de prueba
        resolve({
          success: true,
          data: {} as T, // Devolvemos el objeto "vacío" pero con el tipo correcto
        });
      }
    }, 1500);
  });
};