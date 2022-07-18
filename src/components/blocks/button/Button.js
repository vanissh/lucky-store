import './button.sass'

const Button = ({children, render}) => {
    return (
        <button className="button" onClick={render}>{children}</button>
    )
}

export default Button