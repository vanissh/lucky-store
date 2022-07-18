import './auth.sass'
import Button from '../blocks/button/Button'

const Auth = () => {
    return (
        <div className="auth">
            <div className="auth__content">
                <h1 className="header">Авторизация</h1>
                 <form className="auth__form" action="#" method="post">
                    <div className="auth__input-wrapper">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Введите Ваш email" required />
                    </div>
                    <div className="auth__input-wrapper">
                        <label>Пароль</label>
                        <input type="password" name="password" placeholder="Введите пароль" required />
                    </div>
                    <Button type="submit">Вход</Button>
                    <Button type="submit">Регистрация</Button>
                </form>
            </div>
        </div>
    )
}

export default Auth