import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Routes, Route, useLocation, Navigate, BrowserRouter, useNavigate } from "react-router-dom";
import Test from '../pages/AdminPages/Test';
import UserManagement from '../pages/AdminPages/UserManagement';

export default function AdminPage() {
    return (
        <>
            <div className="min-h-full grad">
                <Navbar />
                <div className="flex">
                    <Sidebar />
                    <div className="container mx-auto mt-12 px-8">
                        <Routes>
                            <Route path="/" element={<Test />} />
                            <Route path='/users' element={<UserManagement />} />
                        </Routes>
                    </div>
                </div>

            </div>
        </>
    )
}

