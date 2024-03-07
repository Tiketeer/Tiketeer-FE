import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from 'pages/login/LoginPage';
import MyPage from 'pages/mypage/MyPage';
import PaymentConfirmPage from 'pages/payment/PaymentConfirmPage';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/payment-complete" element={<PaymentConfirmPage />} />
        </Routes>
    );
}

export default App;
