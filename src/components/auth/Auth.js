import './auth.sass'
import Button from '../blocks/button/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn, signUp } from '../../slices/userSlice'

const Auth = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                    <Button type="submit" render={() => dispatch(signIn({email, password}))}>Вход</Button>
                    <Button type="submit" render={() => dispatch(signUp({email, password}))}>Регистрация</Button>
            </div>
        </div>
    )
}

export default Auth