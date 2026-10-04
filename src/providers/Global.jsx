"use client";

import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "@/lib/redux/userSlice";
import { useEffect } from "react";

export default function Global() {
  const dispatch = useDispatch();

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
    </>
  );
}
