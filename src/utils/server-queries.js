import {axiosInstance} from "./api";

  export const getTweets = ()=> {
    return axiosInstance.post("/get-user-tweets" )
  }

  
  export const getTweetUsers = (userIds)=> {
    return axiosInstance.post("/get-user-data", {hola: "hola"})
  }


  export const getOtherTweets = (data)=> {
    return axiosInstance.post("/get-user-tweets", data)
  }
