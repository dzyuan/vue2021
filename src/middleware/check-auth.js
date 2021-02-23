import {  getUserFromLocalStorage } from '../utils';
export default function ({ store}) { 
    const userInfo =getUserFromLocalStorage();
  if (!userInfo) {
    return;
  } else if (!userInfo.token || Date.now() > userInfo.expiresIn) {
    store.dispatch("clearUserInfo");
  } else {
    store.dispatch("setUserInfo", userInfo);
    const timeToLogout = userInfo.expiresIn - Date.now();
    store.dispatch("setLogoutTimer", timeToLogout);
  }
}









   

