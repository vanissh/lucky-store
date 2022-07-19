import BtnScrollUp from '../components/blocks/btnToTop/BtnScrollUp'
import { useDispatch, useSelector } from 'react-redux'
import Auth from '../components/auth/Auth'
import Empty from '../components/blocks/empty/Empty'
import Button from '../components/blocks/button/Button'
import { removeUser } from '../slices/userSlice'

const Profile = () => {

    const {isAuth} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    return (
        <>
            <div className="container">
                    {isAuth ? 
                        <div className='profile__content'>
                            <Empty text={'Личный кабинет'}/>
                            <Button render={() => dispatch(removeUser())}>Выйти</Button>
                        </div>
                        : <Auth/>
                    }
            </div>
            <BtnScrollUp/>
        </>

    )
}

export default Profile