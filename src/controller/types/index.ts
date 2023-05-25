/**
 * Basic JSON response for Controller
 */
export type BasicResponse = {
  message: string;
};

/**
 * Error JSON response for Controller
 */
export type ErrorResponse = {
  error: string;
  message: string;
};

export type status = "online" | "offline" | "desativated";

export type order = "completed" | "pendient" | "canceled";

export type Payment = {
  
}