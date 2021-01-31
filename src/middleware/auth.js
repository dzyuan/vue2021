export default function ({ store, redirect,}) {
   
    
        if (store.getters.loggedIn) {
        }
        else {
            console.log('不通过');
            redirect('/login');
        }
    
    }