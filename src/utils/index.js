
export const saveUserData = (authdata) => {
    const tokenExpiration = Date.now() + authdata.expiresIn * 1000;
    localStorage.setItem('token', authdata.token);
    localStorage.setItem('expiresIn', tokenExpiration);
    localStorage.setItem('username', authdata.username);
    localStorage.setItem('userType', authdata.userType);
    localStorage.setItem('userId', authdata.userId);
    
};




export const getUserFromLocalStorage = () => {
    if (localStorage) {
      const token = localStorage.getItem("token");
      const expiresIn = localStorage.getItem("expiresIn");
      const username = localStorage.getItem("username");      
      const userId = localStorage.getItem("userId");
      const userType = localStorage.getItem("userType");
  
      return { token, username, userId, userType, expiresIn };
    }
  };


export const clearAuthData = () => {
   
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");

};






