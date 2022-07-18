import BtnScrollUp from '../components/blocks/btnToTop/BtnScrollUp'
import { useDispatch, useSelector } from 'react-redux'
import Auth from '../components/auth/Auth'

const Profile = () => {

    const {isAuth} = useSelector(state => state.profileReducer)

    return (
        <>
            <div className="container">
                    {isAuth ? 'личный кабинет' : <Auth/>}
            </div>
            <BtnScrollUp/>
        </>

    )
}

export default Profile