import { MYPAGE_PATH } from 'components/mypage/constant';
import EmailConfirmPage from 'pages/confirm/EmailConfirmPage';
import LoginPage from 'pages/login/LoginPage';
import MainPage from 'pages/main/MainPage';
import MyPage from 'pages/mypage/MyPage';
import OrderDetailPage from 'pages/order-detail/OrderDetailPage';
import PaymentConfirmPage from 'pages/payment/PaymentConfirmPage';
import PaymentPage from 'pages/payment/PaymentPage';
import TicketingDetailPage from 'pages/ticketing-detail/TicketingDetailPage';
import TicketRegisterPage from 'pages/ticketing/TicketingRegisterPage';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';

function App() {
    return (
        <RecoilRoot>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/confirm/email" element={<EmailConfirmPage />} />
                <Route
                    path="/mypage/change/password"
                    element={<MyPage path={MYPAGE_PATH.CHANGE_PWD} />}
                />
                <Route
                    path="/mypage/change/email"
                    element={<MyPage path={MYPAGE_PATH.CHANGE_EMAIL} />}
                />
                <Route path="/mypage/purchases" element={<MyPage path={MYPAGE_PATH.PURCHASE} />} />
                <Route
                    path="/mypage/purchase/detail/:purchase_id"
                    element={<MyPage path={MYPAGE_PATH.PURCHASE_DETAIL} />}
                />
                <Route path="/mypage/sales" element={<MyPage path={MYPAGE_PATH.SALE} />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/payment-complete" element={<PaymentConfirmPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/ticketing/:id" element={<TicketingDetailPage />} />
                <Route path="/ticketing/:id/order" element={<OrderDetailPage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/ticketing/register" element={<TicketRegisterPage />} />
            </Routes>
        </RecoilRoot>
    );
}

export default App;
