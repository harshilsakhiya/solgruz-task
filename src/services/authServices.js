import { errorHandler, successHandler } from "../common/appHandler";
import axiosInstance from "../common/axiosInstance";

class AuthServices {
  static signIn = async (data) => {
    try {
      const res = await axiosInstance.post("/user/login", data);
      return successHandler(res);
    } catch (error) {
      return errorHandler(error);
    }
  };
}

export default AuthServices;
