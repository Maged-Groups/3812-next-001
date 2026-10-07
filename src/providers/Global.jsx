"use client";

import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/lib/redux/userSlice";
import { useEffect } from "react";

import LoginForm from "@/features/auth/login/LoginForm";

export default function Global() {
  const dispatch = useDispatch();

  const loginVisible = useSelector((store) => store.accountSlice.loginVisible);

  useEffect(() => {
    if (window && window.localStorage) {
      const userJson = window.localStorage.user;

      if (userJson) {
        const user = JSON.parse(userJson);
        dispatch(login(user));
      }
    }
  }, []);

  return (
    <>
      <ToastContainer theme="light" position="bottom-center" />

      {loginVisible && <LoginForm />}
    </>
  );
}
