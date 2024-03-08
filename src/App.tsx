import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from 'pages/login/LoginPage';
import MyPage from 'pages/mypage/MyPage';
import MainPage from 'pages/main/MainPage';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    );
}

export default App;
