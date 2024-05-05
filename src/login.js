import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [userInfo, setUserInfo] = useState('')

    const navigate = useNavigate()

    const onButtonClick = () => {
        //TODO
        authenticateUser()
    }
    const authenticateUser = (callback) => {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        })
          .then((res) => res.json())
          .then((data) => { 

            console.log(data)
            setUserInfo(data)
          })
    }
    return ( 
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Shopper Login</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input 
                  value={username}
                  placeholder="Enter your username"
                  onChange={(user) => setUsername(user.target.value)}
                  className={'inputBox'}
                />
                <label className="errorLabel">{usernameError}</label>
                <br />
                <br />
                <input
                  value={password}
                  placeHolder="Enter your password"
                  onChange={(pass) => setPassword(pass.target.value)}
                  className={'inputBox'}
                  type={'password'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Login'} />
            </div>
        </div>
    )
}

export default Login