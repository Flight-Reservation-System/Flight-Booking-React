import axios from "axios"


const RegisterService=(data)=>{

    axios.post('http://localhost:8080/users/register',data).then((res)=>console.log(res.data))

}


export default RegisterService