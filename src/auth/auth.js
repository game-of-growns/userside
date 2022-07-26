const fakeAuthProvider = {
    signin(user, userCallback, adminCallBack) {
        if (user === 'user') {
            setTimeout(userCallback, 100);
            return true;
        } else if (user === 'admin') {
            setTimeout(adminCallBack, 100);
            return true;
        } else {
            return false;
        }
        
    },
    signout(callback) {
        setTimeout(callback, 100);
    },
};

export { fakeAuthProvider };
