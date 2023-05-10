import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}


// import { makeAutoObservable } from "mobx"

// export default class UserStore {
//     constructor() {
//         this._isAuth = true
//         this._user = {}
//         makeAutoObservable(this) // при изменении этих переменных страница будет перередиваться, 
//         //мобикс следит за этим, _ -  соглашение, что переменная не должна изменяться
//     }

//     setIsAuth(bool) {
//         this._isAuth = bool
//     }

//     setUser(user){
//         this._user = user
//     }

//     //computed функции, вызываются только если переменная, кот исп внутри была изменена
//     get isAuth(){
//         return this._isAuth
//     }

//     get user() {
//         return this._user
//     }
// }