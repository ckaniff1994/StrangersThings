const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

export const fetchPosts = async () => {
    try{
        const response = await fetch(`${BASEURL}/posts`)
        console.log("response", response);
        const {data} = await response.json();
        console.log("this is data", data);
        return data.posts;
    } catch(error) {
        console.error("Error fetching posts", error);
    }
}