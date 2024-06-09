import { apiClient } from "./Api";




export const retrieveAllUsersApi = () => apiClient.get('/users')

export const deleteUserApi = (id) => apiClient.delete(`/users/${id}`)

export const retrieveUserApi = (id) => apiClient.get(`/users/${id}`)

export const updateUserApi = (user) => apiClient.put('/users', user)

export const createUserApi = (user) => apiClient.post('/users', user);

export const countUsersApi = () => apiClient.get('/users/count');

export const loginUserApi = (props) => apiClient.get(`/login?username=${props.username}&password=${props.password}`)

export const addUserToDB = (loggedUser) => apiClient.post('/users/checkNewUser', loggedUser)
