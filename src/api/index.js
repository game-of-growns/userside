import axios from "axios";

const userURL = ""; //user api url goes here

export const fetchUsers = () => axios.get(userURL);
export const createUser = (userData) => axios.post(userURL, userData);
export const fetchUser = (userID) => axios.get(userURL + `/${userID}`);
export const patchUser = (userID, userData) => axios.patch(userURL + `/${userID}`, userData );
export const deleteUser = (userID) => axios.delete(userURL + `/${userID}`);
