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
};

export const fetchRegister = async (username, password) => {
    try {
        const response = await fetch(`${BASEURL}/users/register`, { 
        method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                },
            }),
        });
        console.log("response2", response);
        const data = await response.json();
        console.log("THEDATA", data);
        return data;
    } catch(error) {
        console.error("Error registering new user", error)
    }
};