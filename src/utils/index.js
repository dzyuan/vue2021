import Cookie from 'js-cookie'
export const saveUserData = (authdata) => {
    const tokenExpiration = Date.now() + authdata.expiresIn * 1000;
    localStorage.setItem('token', authdata.token);
    localStorage.setItem('expiresIn', tokenExpiration);
    localStorage.setItem('username', authdata.username);
    localStorage.setItem('userType', authdata.userType);
    localStorage.setItem('userId', authdata.userId);
    Cookie.set('token', authdata.token);
    Cookie.set('expiresIn', tokenExpiration);
    Cookie.set('username', authdata.username);
    Cookie.set('userType', authdata.userType);
    Cookie.set('userId', authdata.userId);
};


export const getUserFromCookie = req => {
    if (!req) return;
    if (!req.headers.cookie) return;
    const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='));
    const usernameCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('username='));
    const userTypeCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('userType='));
    const userIdCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('userId='));
    const expiresInCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresIn='));
    if (!tokenCookie || !usernameCookie || !userTypeCookie || !userIdCookie || !expiresInCookie) return;

    const token = tokenCookie.split('=')[1];
    const username = usernameCookie.split('=')[1];
    const userId = userIdCookie.split('=')[1];
    const userType = userTypeCookie.split('=')[1];
    const expiresIn = expiresInCookie.split('=')[1];

    return { token, username, userId, userType, expiresIn }
}

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






