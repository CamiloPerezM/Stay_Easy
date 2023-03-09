import axios from 'axios';


const baseUrl = 'http://3.139.69.10:8080/usuario/registrar';

const Register = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data

}
 
export default {Register}