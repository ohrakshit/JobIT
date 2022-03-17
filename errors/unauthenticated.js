import CustomAPIError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

class UnaunthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnaunthenticatedError;
