import HomePage from "../pages/Home/HomePage";
import MySchedulePage from "../pages/MySchedule/MySchedulePage";
import RegisterPage from "../pages/Register/RegisterPage";
import ErrorPage from "../pages/Error/ErrorPage";
import { Routes, Route } from "react-router-dom";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-schedule" element={<MySchedulePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes