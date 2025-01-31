import conf from "../conf/conf";
import { Client, Account } from "appwrite";
import { ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({email,password, name}){
        try{
            const userAccount = await this.account
                .create(ID.unique(), email, password, name)
            console.log(userAccount)
            if(userAccount){
                // call another method
                return this.login({email,password})
            }else{
                return userAccount;
            }
        } catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account
                .createEmailPasswordSession(email, password)

        }catch(error){
            throw error;
        }
    }


    async getCurrentUser(){
        try {
            const user = await this.account.get()
            console.log(user)
            return user
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error', error)
        }
        console.log('returened after error')
        return null;
    }

    async logout(){
        try {
            console.log('logout Called')
            return await this.account.deleteSessions();
        } catch (error) {
            console.log('Appwrite service :: logout :: error',error)
        }
        return null
    }
}

const authService = new AuthService();

export default authService