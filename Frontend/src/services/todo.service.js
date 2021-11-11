import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAllTodoList = ()=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/todos/`
      });
}

const addTask = (playload)=>{
    return axios({
        method: 'post',
        url: `${BASE_URL}/todos/addtask`,
        data: playload
      });
}

const getTaskById = (id)=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/todos/${id}`
      });
}

const editTask = (id, playload)=>{
    return axios({
        method: 'put',
        url: `${BASE_URL}/todos/edittask/${id}`,
        data: playload
      });
}

const deleteTaskById = (id)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/todos/deletetask/${id}`
      });
}

export default {getAllTodoList, addTask, getTaskById, editTask, deleteTaskById}