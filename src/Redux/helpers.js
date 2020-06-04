
export const extractUsers=(tweets)=>{
    const userArray = tweets.map(tweet=>{ return tweet.id_str});
    console.log(userArray);
    return userArray;
}