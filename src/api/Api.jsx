

// import axios from "axios";




// export const apiClient = axios.create(

//     {

//         baseURL: 'http://localhost:8080/'

//     }

// )



import axios from "axios";

export const apiClient = axios.create(
    {
        //baseURL: 'http://20.188.44.4:8000/',
        baseURL: 'http://kong.example.com/',
        headers: {
            'Content-Type': 'application/json',
        }
    }
)