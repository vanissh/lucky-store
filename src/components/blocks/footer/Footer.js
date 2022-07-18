import './footer.sass'

const Footer = () => {

    return (
        <div className="footer" id="contacts">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__content-wrap">
                        <h3>Покупателям</h3>
                        <ul className="footer__content-links">
                            <li><a href="#contacts">Доставка</a></li>
                            <li><a href="#contacts">Оплата</a></li>
                            <li><a href="#contacts">Возврат товара</a></li>
                            <li><a href="#contacts">Личный кабинет</a></li>
                        </ul>
                    </div>
                    <div className="footer__content-wrap">
                        <h3>Информация</h3>
                        <ul className="footer__content-links">
                            <li><a href="#contacts">О нас </a></li>
                            <li><a href="#contacts">FAQ</a></li>
                            <li><a href="#contacts">Блог</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                            <li><a href="#contacts">Обратная связь</a></li>
                        </ul>
                    </div>
                    <div className="footer__content-wrap">
                        <h3>Мы на связи</h3>
                        <div className="footer__content-phone">+7 (123) 456-78-99</div>
                        <div className="footer__content-socials">
                            <a href="#contacts" className="footer__content-social">

                            </a>
                            <a href="#contacts" className="footer__content-social">

                            </a>
                            <a href="#contacts" className="footer__content-social">

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer