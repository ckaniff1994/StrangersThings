const BASEURL = "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

const makeHeaders = (token) => {
    const headers = {
        "Content-Type": "application/json",
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    };

    return headers;
};

const callAPI = async (path, givenOptions = {}) => {
    const options = {
        headers: makeHeaders(givenOptions.token)
    }

    if (givenOptions.method) {
        options.method = givenOptions.method;
    }

    if (givenOptions.body) {
        options.body = JSON.stringify(givenOptions.body);
    }

    const response = await fetch(`${BASEURL}${path}`, options);
    const result = await response.json();

    return result;
}

export const fetchPosts = async () => {
    try{
        const {success, error, data} = await callAPI(`/posts`);

        if (success) {
            return {
                error: null,
                posts: data.posts
            }
        } else {
            return {
                error: error.message,
                posts: []
            }
        }

    } catch(error) {
        console.error("Error fetching posts", error);

        return {
            error: "Failed to load posts",
            posts: []
        };
    }
};

export const fetchRegister = async (username, password) => {
    try {

        const {success, error, data} = await callAPI('/users/register', {
            method: "POST",
            body: {
                user: {
                    username,
                    password
                },
            } 
        })

        if(success){
            return {
                error: null,
                token: data.token,
                message: data.message
            }
        } else {
            return {
                error: error.message,
                token: null,
                message: null
            }
        }
        
    } catch(error) {
        console.error("Error registering new user", error)

        return {
            error: "Error registration failed",
            token: null,
            message: null
        }
    }
};

export const fetchLogin = async (username, password) => {
    try {
        const {success, error, data} = await callAPI('users/login', {
            method: "POST",
            body: {
                user: {
                    username,
                    password
                }
            }
        })

        if(success) {
            return {
                error: null,
                token: data.token,
                message: data.message
            }
        } else {
            return {
                error: error.message,
                token: null,
                message: null
            }
        }
    } catch(error) {
        console.error("There was an error logging in", error);
    }
 };

export const fetchGuest = async (token) => {
    try {
        const {success, error, data} = await callAPI('/users/me', {
            token: token
        })

        if(success) {
            return {
                error: null,
                guest: data.guest
            };
        } else {
            return {
                error: error.message,
                guest: null
            }    
        }
    } catch(error) {
        console.error('Failed to fetch guest!', error);

        return {
            error: "Failed to guest",
            guest: null
        }
    }    
}

export const createPost = async () => {

};

