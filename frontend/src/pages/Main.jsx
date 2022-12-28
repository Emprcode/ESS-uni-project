import React, { Fragment } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { About } from "../components/About";
import { Account } from "../components/Account";
import { Contact } from "../components/Contact";
import { Food } from "../components/Food";
import { Homepage } from "../components/Homepage";
import { Index } from "../components/Index";
import { Privacy } from "../components/Privacy";
import { Register } from "../components/Register";
import { Setting } from "../components/Setting";
import { Shelter } from "../components/Shelter";
import { Jobs } from "../components/Jobs";
import { Password } from "../components/Password";
import { Post } from "../components/Post";
import { Signup } from "../components/Signup";
import { Error404 } from "../pages/Error404";
import { Admin } from "../components/Admin";

export const Main = () => {
  const { pathname } = useLocation();
  const withoutHeader = ["/", "/signup", "/password", "/post"];
  return (
    <Fragment>
      {/* {!withoutHeader.includes(pathname) && <Header />} */}
      {!withoutHeader.includes(pathname) && <Footer />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food" element={<Food />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/" element={<Index />} />
        <Route path="/password" element={<Password />} />
        <Route path="/post" element={<Post />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Admin />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Fragment>
  );
};
