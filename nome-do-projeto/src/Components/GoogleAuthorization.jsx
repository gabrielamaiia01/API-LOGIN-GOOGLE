import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

function GoogleLoginButton({setName, setEmail, setPicture, setIsActive }){

    return(
        <> 
        <GoogleLogin
        onSuccess={(response) => {
           const decoded = jwtDecode(response?.credential)
           console.log(decoded)

           const{name, email, picture} = decoded
           setName(name)
           setEmail(email)
           setPicture(picture)
           setIsActive(true)

        }}
        
        />
        </>
    )
}

export default GoogleLoginButton; 