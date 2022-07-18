import Gallery from '../components/home/gallery/Gallery'
import Slider from '../components/home/slider/Slider'
import Hits from '../components/home/hits/Hits'
import BtnScrollUp from '../components/blocks/btnToTop/BtnScrollUp'

const Home = ({info}) => {
    return (
        <>
            <Slider info={info} />
            <Gallery/>
            <Hits/>
            <BtnScrollUp/>
        </>
    )
}

export default Home