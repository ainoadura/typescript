# University Management System Architecture

This module implements a clean architecture focused on data access and strict domain modeling.

## Domain Modeling (`src/domain/types/`)
We use **TypeScript Interfaces** and **Discriminated Unions** to define the core entities:
- **Entities**: `Student`, `Subject`, and `Professor` with `readonly` identifiers to ensure data integrity.
- **State Management**: `RegistrationStatus` uses a Discriminated Union to handle different student states (`ACTIVE`, `SUSPENDED`, `FINISHED`) with specific properties for each.

## Data Model Decisions

### Interfaces vs. Types
For the core entities (`Student`, `Subject`, `Professor`), I chose **Interfaces** over **Types**. 
- **Reasoning**: Interfaces are better suited for defining object blueprints that might be extended in the future (via declaration merging). They provide clearer error messages in many IDEs and are the industry standard for defining the "shape" of data models in domain-driven design.
- **Exceptions**: I used **Types** specifically for the `RegistrationStatus` Union. This is because **Discriminated Unions** are more naturally and cleanly expressed as types in TypeScript, allowing for exhaustive switch checks that interfaces cannot handle as easily.

### Generics for Network Logic
The `ApiResponse<T>` and `getResource<T>` implementations rely heavily on **Generics**.
- **Abstraction**: By using `<T>`, we decouple the network response logic from the data itself. The `api-client` doesn't need to know what a "Student" is; it only knows how to wrap *any* data in a success/error envelope.
- **Type Safety**: This ensures that when we call the API, the resulting data is automatically typed, preventing "any" types from leaking into our business logic and causing runtime errors.


## Business Logic (`src/domain/registration-logic.ts`)
Decoupled logic from data structures:
- **`generateReport`**: A type-safe function that processes the `RegistrationStatus` using exhaustive `switch` statements.

## Data Access Layer (`src/services/api-client.ts`)
A generic infrastructure to simulate real-world API interactions:
- **Generic Requests**: `getResource<T>` allows fetching any entity type while maintaining full type safety.
- **Standardized Response**: All requests return an `ApiResponse<T>` interface, ensuring consistent error handling across the app.

## How to run
1. Install dependencies: `npm install`
2. Run in development mode: `npm run dev`
3. Build the project: `npx tsc`
