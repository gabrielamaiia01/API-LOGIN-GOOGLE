import { useState } from 'react'
import './App.css'
import {GoogleOAuthProvider} from '@react-oauth/google'
import GoogleLoginButton from './Components/GoogleAuthorization'

function App() {
  const[name, setName] = useState('') 
  const[email, setEmail] = useState('')
  const[picture, setPicture] = useState('')
  const[isActive, setIsActive] = useState(false)

  return (
    <>
    <GoogleOAuthProvider clientId="924383266324-678dpt0khn4vi04m6rklqivhmvnun8hn.apps.googleusercontent.com">
    <GoogleLoginButton
             setName ={setName}
             setEmail={setEmail}
             setPicture={setPicture}
             setIsActive={setIsActive}

    />


    </GoogleOAuthProvider>;

     {isActive ?(
       <div>
        <img src={picture} alt=""/>
        <p> This is my name: {name}</p>
        <p>This is my email: {email} </p>

       </div>
     ) : (
      ''
     )
     }
    </>
  )
}

export default App;
