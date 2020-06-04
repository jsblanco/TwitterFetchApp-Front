import {axiosInstance} from "./api";


  export const getTweets = (data) => {
    return axiosInstance.post("/get-user-tweets", {"screen_name": data})
  }


  export const getOtherTweets = (data)=> {
    return axiosInstance.post("/get-user-tweets", data)
  }
