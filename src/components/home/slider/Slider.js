import { useState, useEffect} from 'react'
import './slider.sass'
import Button from '../../blocks/button/Button'
import { NavLink } from 'react-router-dom'

const Slider = ({info}) => {

    const SLIDE_WIDTH = 1140, MAX = info.length

    const [offset, setOffset] = useState(0)
    const [counter, setCounter] = useState(1)

    const itemRefs = []

    const setRef = elem => {
        itemRefs.push(elem)
    }

    const focusOnDot = (id) => {
        itemRefs.forEach(item => item.classList.remove('slider__dot_active'))
        itemRefs[id].classList.add('slider__dot_active')
    }

    const onSlideSelected = (i) => {
        setCounter(i + 1)
        focusOnDot(i)
        setOffset(-(SLIDE_WIDTH * i))
    }

    const nextSlide = () => {
        if(counter < MAX){
            setOffset((currentOffset) => currentOffset - SLIDE_WIDTH)
            setCounter(currentCounter => currentCounter + 1)
            focusOnDot(counter)
        }
    }

    const prevSlide = () => {
        if(counter > 1){
            setOffset((currentOffset) => currentOffset + SLIDE_WIDTH)
            setCounter(currentCounter => currentCounter - 1)
            focusOnDot(counter - 2)
        }
    }

    useEffect(() => {
        console.log(counter)
    })

    useEffect(() => {
        focusOnDot(0)
    }, [])

    return (
        <section className="slider">
            <div className="container">
                <div className="slider__inner">
                    <div className="slider__wrap" style={{transform: `translateX(${offset}px)`}}>
                        {sliderContent(info)}
                    </div>
                    <button className="slider__button slider__button_left"
                            onClick={prevSlide}
                    >
                        <i className="icon icon-arrow-left"></i>
                    </button>
                    <button className="slider__button slider__button_right"
                            onClick={nextSlide}
                    >
                        <i className="icon icon-arrow-right"></i>
                    </button>
                    <div className="slider__dots">
                        {info.map((_, i) => 
                            <div className="slider__dot" 
                                ref={setRef}
                                onClick={() => {
                                    onSlideSelected(i)
                                }}
                                key={i}
                            >
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

const sliderContent = (info) => {
    return info.map((item, i) => 
        <div className="slider__item" key={i}>
            <img src={item.img} alt="background" className="slider__bg"/>
            <div className="slider__text">
                <div className="slider__text-top">{item.title}</div>
                <div className="slider__text-center">{item.text}</div>
                <Button className="slider__text-btn">
                    <NavLink to={'/catalog'}>В каталог</NavLink>
                </Button>
            </div>
        </div>
    )
}

export default Slider