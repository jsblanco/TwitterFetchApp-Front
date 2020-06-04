import {axiosInstance} from "./api";


  export const getTweetsByUsername = (data) => {
    return axiosInstance.post("/get-user-tweets", {"screen_name": data})
  }


  export const getTweetsByKeyword = (data)=> {
    return axiosInstance.post("/get-tweets-by-keyword", {"q": data})
  }
