import { getUserFromCookie } from '@/utils';
export default function ({ store, route, req }) {
    if (process.server && !req) return;

    if (route.path === '/login') {
        console.log('当前网址:' + route.path);

    } else {

        const authData = getUserFromCookie(req);
        console.log('从Cookie中取得数据:' + authData);
        if (!authData) {
            console.log('未检测到cookie');


        } else if (!authData.token || Date.now() > authData.expiresIn) {
            console.log('这里了');
            store.dispatch("logoutUser");
            // store.dispatch("setUsername", '');
            // store.dispatch("setUserId", '');
            // store.dispatch("setUserType", '');
            // redirect('/login')
        } else {
            console.log('检测到cookie' + authData.token);
            store.dispatch("setToken", authData.token);
            store.dispatch("setLoggedIn", true);
            store.dispatch("setUsername", authData.username);
            store.dispatch("setUserId", authData.userId);
            store.dispatch("setUserType", authData.userType);
            const timeToLogout = authData.expiresIn - Date.now();
            store.dispatch("setLogoutTimer", timeToLogout);


        }

    }

}