import { MYPAGE_PATH } from 'components/mypage/constant';
import EmailConfirmPage from 'pages/confirm/EmailConfirmPage';
import LoginPage from 'pages/login/LoginPage';
import MainPage from 'pages/main/MainPage';
import MyPage from 'pages/mypage/MyPage';
import PaymentConfirmPage from 'pages/payment/PaymentConfirmPage';
import PaymentPage from 'pages/payment/PaymentPage';
import TicketingDetailPage from 'pages/ticketing-detail/TicketingDetailPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import OrderDetailPage from 'pages/order-detail/OrderDetailPage';

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
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/payment-complete" element={<PaymentConfirmPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/ticketing/:id" element={<TicketingDetailPage />} />
            <Route path="/ticketing/:id/order" element={<OrderDetailPage />} />
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
}

export default App;
