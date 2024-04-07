import { errorHandler, successHandler } from "../common/appHandler";
import axiosInstance from "../common/axiosInstance";

class ArtistServices {
  static addArtiest = async (data) => {
    try {
      const res = await axiosInstance.post("/artist", data);
      return successHandler(res);
    } catch (error) {
      return errorHandler(error);
    }
  };
  static updateArtiest = async (data, id) => {
    try {
      const res = await axiosInstance.put(`/artist/${id}`, data);
      return successHandler(res);
    } catch (error) {
      return errorHandler(error);
    }
  };
  static artiestList = async (data) => {
    try {
      const res = await axiosInstance.get(
        `/artist?page=${data?.current}&limit=${data?.pageSize}`
      );
      return res?.data;
    } catch (error) {
      return errorHandler(error);
    }
  };
  static artiestListById = async (data) => {
    try {
      const res = await axiosInstance.get(`/artist/${data}`);
      return successHandler(res);
    } catch (error) {
      return errorHandler(error);
    }
  };
  static artiestDelete = async (data) => {
    try {
      const res = await axiosInstance.delete(`/artist/${data}`);
      return successHandler(res);
    } catch (error) {
      return errorHandler(error);
    }
  };
}

export default ArtistServices;
