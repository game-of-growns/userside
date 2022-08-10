import * as api from '../api';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const createUser = (userData) => async (dispatch) => {
    try {
        const { data } = await api.createUser(userData)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const getUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchUser(id);
        dispatch({ type: 'FETCH', payload: data })
    } catch (error) {
        console.log(error);
    }
}


export const updateUser = (id, userData) => async (dispatch) => {
    try {
        const { data } = await api.patchUser(id, userData);
        dispatch({ type: 'UPDATE_USER', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteUser(id);
        dispatch({ type: 'DELETE_DELETE', payload: id })
    } catch (error) {
        console.log(error);
    }
}