export default (users = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH':
            return action.payload;
        case 'CREATE':
            return [...users, action.payload];
        case 'UPDATE_USER':
            return users.map((user) => (user._id === action.payload._id ? action.payload : user));
        case 'DELETE_USER':
            return users.filter((user) => user._id !== action.payload);
        default:
            return users;
    }
}