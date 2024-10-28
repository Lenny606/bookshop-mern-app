import {createContext, useContext, useState} from "react";
import {auth} from "../../firebase/firebase.config.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

//define context
const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
}

//create component
export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //register user
    const registerUser = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }


    const value = {
        currentUser,
        registerUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}