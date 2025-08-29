import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import HomePage from "./components/pages/HomePage";
// import RegisterPage from  "./components/pages/RegisterPage";
import DemoPage from "./components/pages/DemoPage";
import LoginPageCenter from "./components/pages/LoginPageCenter";
import Dashboard from "./components/pages/dashboard/Dashboard";
const RegisterPage = React.lazy(() =>
  import("./components/pages/RegisterPage")
);
const Login = React.lazy(() => import("./components/pages/LoginPage"));

const App = () => {
  //  function ThemeHandler() {
  //   const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/login2") {
  //     document.documentElement.classList.remove("dark"); // Force light for /login2
  //   } else {
  //     const savedTheme = localStorage.getItem("theme");
  //     if (savedTheme === "dark") {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }
  // }, [location]);

  //   return null; // This component doesn't render anything
  // }

  return (
    <Router>
      {/* Flex layout wrapper */}
        {/* Navbar has fixed height (h-14) */}
        <Navbar />
        <main className="min-h-[calc(100vh-56px)] bg-gray-100 dark:bg-gray-900">
          <Suspense fallback={<div>Loading.....</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login2" element={<LoginPageCenter />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Suspense>
       </main>
      {/* <DemoPage fn={printHello}/> */}
    </Router>
  );
};

export default App;
