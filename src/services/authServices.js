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
  static signUp = async (data) => {
    try {
      const res = await axiosInstance.post("/user/register", {
        username: data?.firstName + data?.lastName,
        useremail: data?.useremail,
        phone: data?.phone,
        password: data?.password,
      });
      return successHandler(res);
    } catch (error) {
      return errorHandler(error);
    }
  };
}

export default AuthServices;
