// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme, CssBaseline } from "../node_modules/@mui/material";
// import Navbar from "./components/layout/Navbar";
// import Login from "./components/pages/LoginPage";
// import HomePage from "./components/pages/HomePage";
// import RegisterPage from "./components/pages/RegisterPage";

// function App() {
//   const [mode, setMode] = useState("light");

//   const theme = createTheme({
//     palette: { mode }
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Navbar mode={mode} toggleTheme={() => setMode(mode === "light" ? "dark" : "light")} />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;

import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import HomePage from "./components/pages/HomePage";
// import RegisterPage from  "./components/pages/RegisterPage";
import DemoPage from "./components/pages/DemoPage";
const RegisterPage = React.lazy(() =>
  import("./components/pages/RegisterPage")
);

const Login =  React.lazy( () => import ("./components/pages/LoginPage"));

const App = () => {
  const printHello = (e) => {
    console.log("hello");
    console.log(e);
  };

  return (
    <Router>
      {/* mode={mode} toggleTheme={() => setMode(mode === "light" ? "dark" : "light")}  */}
      <Navbar />
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>

      {/* <DemoPage fn={printHello}/> */}
    </Router>
  );
};

export default App;
