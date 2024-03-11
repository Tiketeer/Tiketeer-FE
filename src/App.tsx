import { MYPAGE_PATH } from 'components/mypage/constant';
import EmailConfirmPage from 'pages/confirm/EmailConfirmPage';
import LoginPage from 'pages/login/LoginPage';
import MyPage from 'pages/mypage/MyPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TicketRegisterPage from 'pages/ticketing/TicketingRegisterPage';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/confirm/email" element={<EmailConfirmPage />} />
            <Route
                path="/mypage/change/password"
                element={<MyPage path={MYPAGE_PATH.CHANGE_PWD} />}
            ></Route>
            <Route
                path="/mypage/change/email"
                element={<MyPage path={MYPAGE_PATH.CHANGE_EMAIL} />}
            ></Route>
            <Route
                path="/mypage/purchases"
                element={<MyPage path={MYPAGE_PATH.PURCHASE} />}
            ></Route>
            <Route
                path="/mypage/purchase/detail/:purchase_id"
                element={<MyPage path={MYPAGE_PATH.PURCHASE_DETAIL} />}
            />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/ticketing/register" element={<TicketRegisterPage />} />
        </Routes>
    );
}

export default App;
