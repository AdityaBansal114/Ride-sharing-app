import axios from "axios"



export const login = async(email, password) => {
    try {

        await axios.post("http://localhost:8000/api/auth/login", {
            email,
            password
        })
        return true;
        
    } catch {
        return false;
    }

}

// fullName, email , password , confirmPassword, gender

export const signUp = async( name , email, password , confirmPassword , gender , phoneNumber) => {
    try {
        console.log(email);
        await axios.post("http://localhost:8000/api/auth/signup", {
            fullName: name,
            password,
            confirmPassword,
            gender,
            phone:phoneNumber,
            email,
        })
        return true;
        
    } catch {
        return false;
    }
}

