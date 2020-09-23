import {get, post} from '../libs/request';

export function addUser(user){

}

export function queryUsers(){

}

export function queryUserById(userId){
    return get('/getUser',{userId});
}

export function updateUser(user){

}

export function deleteUser(userId){

}