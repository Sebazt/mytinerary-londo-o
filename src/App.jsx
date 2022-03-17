import "./App.css";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterPag from "./components/footer";
import HomePag from "./pages/home";
import PagCities from "./pages/cities";
import CardDetails from "./components/detalle";
import SignUp from "./components/singUp/signup";
import SignIn from "./components/SignIn/signin";
import Snack from "../src/components/Snackbar";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import userActions from "../src/redux/actions/usersActions";

function App(props) {

  useEffect(() => { /* verifican en el local, si este es dif de null. guarde el tok en var */
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token");
      props.VerificarToken(token);
    }
  }, []);

  return (
    <>
      <Snack />
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePag />} />
            <Route path="/home" element={<HomePag />} />
            <Route path="*" element={<HomePag />} />{" "}
            {/* si hay un error general */}
            <Route path="/cities" element={<PagCities />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/cities/details/:id" element={<CardDetails />} />
          </Routes>
          <FooterPag />
        </div>
      </BrowserRouter>
    </>
  );
}

const mapDispatchToProps = {
  VerificarToken: userActions.VerificarToken,
};

export default connect(null, mapDispatchToProps)(App);
