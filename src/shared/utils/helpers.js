import axios from "axios"

const baseUrl = process.env.REACT_APP_REQUEST_BASE_URL
const toDoRoute = process.env.REACT_APP_REQUEST_USERS_URL

export const createToDoItem = (nameToDo, description = "") => {
    return axios.post(
        baseUrl + toDoRoute,
        {
            name: nameToDo,
            ...(description ? { description: description } : {})
        }).then(({ data }) => {
            return data
        })
}

export const getToDoItems = () => {
    return axios.get(
        baseUrl + toDoRoute
    ).then(({ data }) => {
        return data
    })
}

export const deleteToDoItem = (id) => {
    return axios.delete(baseUrl + toDoRoute + `/${id}`).then(({ data }) => {
            return data
        })
}

export const editToDoItem = (id, completed) => {
    return axios.patch(
        baseUrl + toDoRoute + `/${id}`,
        {
            completed: true
        }).then(({ data }) => {
            return data
        })
}
