import axios from 'axios';


const baseUrl = 'http://3.139.69.10:8080/usuario/registrar';

const Register = async credentials => {
    try {
        const { data } = await axios.post(baseUrl, credentials)
        return data
    } catch (error) {
        throw error
    }

}
 
export default {Register}