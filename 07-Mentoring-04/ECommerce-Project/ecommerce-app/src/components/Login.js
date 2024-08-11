import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {useRef} from "react"

import {USERS_OBJECT} from "../users"

import {useNavigate} from "react-router-dom"

import {useState} from "react"
import Alert from 'react-bootstrap/Alert';


const Login = () => {

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const navigate = useNavigate()

  const [error, setError] = useState('')

  const doSubmit = (event) => {

    event.preventDefault()

    // Get the username / password value
    const usernameValue = usernameRef.current.value
    const passwordValue = passwordRef.current.value

    console.log(`Username is ${usernameValue}`)
    console.log(`Password is ${passwordValue}`)

    // Validate it
    const usersArray = USERS_OBJECT.users

    const matchedUserpasswordEntry = usersArray.find( (userpasswordEntry) => {

      if (userpasswordEntry.username === usernameValue &&
        userpasswordEntry.password === passwordValue
      ){
        return userpasswordEntry
      }

    })

    console.log(`Matched userpassword Entry 
      ${JSON.stringify(matchedUserpasswordEntry)}`)

    // Outcome
      // Success -> Home
      // Failure -> Error Message 

    if (matchedUserpasswordEntry){

      // Navigation
      navigate("/home")
    }else{

      setError("Username or password is invalid")
    }

  }

  function loginForm() {
    return (
      <Form onSubmit={doSubmit}>
        
        {
          // FALSE 
          // TRUE 
          error && (

            <Alert key='danger' variant='danger'>
              {error}
            </Alert>            
          )
        }

        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter the username" ref={usernameRef} />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    );
  }

  return (
    <div>
      {
        loginForm()
      }
    </div>
  )

}

export { Login }