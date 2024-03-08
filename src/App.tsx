import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from 'pages/login/LoginPage';
import EmailConfirmPage from 'pages/confirm/EmailConfirmPage';
import MyPage from 'pages/mypage/MyPage';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/confirm/email" element={<EmailConfirmPage />} />
            <Route path="/mypage" element={<MyPage />} />
        </Routes>
    );
}

export default App;
