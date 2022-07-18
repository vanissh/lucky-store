import './btnScrollUp.sass'
import { useState } from 'react'

const BtnScrollUp = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
    
    const handlerScrollUp = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button 
            className='btn_scroll-up' 
            style={{display: visible ? 'block' : 'none'}} 
            onClick={handlerScrollUp}
        >
            <i className='icon icon-arrow-up'></i>
        </button>
    )
}

export default BtnScrollUp