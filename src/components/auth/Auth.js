import './auth.sass'
import Button from '../blocks/button/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser, checkAuth } from '../../slices/userSlice'

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const Auth = () => {

    const dispatch = useDispatch()
    const auth = getAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }))
                dispatch(checkAuth())
            })
            .catch(error => console.log(error))
    }

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }))
                dispatch(checkAuth())
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="auth">
            <div className="auth__content">
                <h1 className="header">Авторизация</h1>
                    <div className="auth__input-wrapper">
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Введите email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="auth__input-wrapper">
                        <label>Пароль</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Введите пароль" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required />
                    </div>
                    <Button type="submit" render={handleLogin}>Вход</Button>
                    <Button type="submit" render={handleRegister}>Регистрация</Button>
            </div>
        </div>
    )
}

export default Auth