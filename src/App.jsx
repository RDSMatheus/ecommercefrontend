import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/Login/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/Login/SignIn/SignIn';
import { GlobalContext } from './GlobalContext';
import Home from './Components/Home/Home';
import UserAccountPage from './Components/User/UserAccountPage';
import ProtectedRoute from './Components/Helpers/ProtectedRoute';
import UserProfile from './Components/User/UserProfile/UserProfile';

const App = () => {
  return (
    <>
      <GlobalContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/myaccount"
            element={
              <ProtectedRoute>
                <UserAccountPage />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<UserProfile />} />
          </Route>
        </Routes>
        <Footer />
      </GlobalContext>
    </>
  );
};

export default App;
