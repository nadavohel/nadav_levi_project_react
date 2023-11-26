import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import Moments from './pages/moments/Moments';
import About from './pages/about/About';
import FavoriteMoments from './pages/favoriteMoments/FavoriteMoments';
import MyMoment from './pages/myMoment/MyMoment';
import UsersMenagment from './admin/UsersMenagment';
import Login from './user/login/Login';
import Signup from './user/signup/Signup';
import Account from './user/account/Account';
import AddMoment from './pages/addMoment/AddMoment';
import MomentPage from './pages/momentPage/MomentPage';
import EditToMoment from './pages/editToMoment/EditToMoment';
import UserCardsById from './admin/UserCardsById';
import Page404 from './pages/Page404';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/moments" element={<Moments />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<FavoriteMoments />} />
            <Route path="/my-moments" element={<MyMoment />} />
            <Route path="/admin" element={<UsersMenagment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/add-moment" element={<AddMoment />} />
            <Route path="/card-moment/:id" element={<MomentPage />} />
            <Route path="/edit-moment/:id" element={<EditToMoment />} />
            <Route path="/user-moments-by-id" element={<UserCardsById />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
}