import {
  NotFoundError,
  ValidationError,
  ConflictError,
  UnauthorizedError,
} from "../app/middlewares/globalErrorHandler";

// Helper functions for throwing common errors
export const throwNotFoundError = (resource: string, id?: string) => {
  const message = id
    ? `${resource} with id ${id} not found`
    : `${resource} not found`;
  throw new NotFoundError(message);
};

export const throwValidationError = (message: string) => {
  throw new ValidationError(message);
};

export const throwConflictError = (message: string) => {
  throw new ConflictError(message);
};

export const throwUnauthorizedError = (message?: string) => {
  throw new UnauthorizedError(message);
};

// Validation helpers
export const validateRequiredFields = (data: any, requiredFields: string[]) => {
  const missingFields = requiredFields.filter((field) => !data[field]);

  if (missingFields.length > 0) {
    throw new ValidationError(
      `Missing required fields: ${missingFields.join(", ")}`
    );
  }
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ValidationError("Invalid email format");
  }
};

export const validatePassword = (password: string) => {
  if (password.length < 6) {
    throw new ValidationError("Password must be at least 6 characters long");
  }
};
