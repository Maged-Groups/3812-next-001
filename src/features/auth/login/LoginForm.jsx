"use client";
import { useRef, useState } from "react";
import Button from "@c/atoms/Button";
import { toast } from "react-toastify";
import { errors } from "@/data/errors";
import { login } from "@/lib/redux/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Icon from "@/components/atoms/Icon";
import { hideLogin } from "@/lib/redux/accountSlice";

export default function LoginForm() {
  const [error, setError] = useState("");
  const usernameRef = useRef();
  const passRef = useRef();

  const dispatch = useDispatch();
  const router = useRouter();

  const showError = (error) => {
    toast.error(error);
    setError(error);
  };

  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passRef.current.value;

    // If any is empty
    if (!username || !password) return showError(errors.allRequired);

    const api = "https://dummyjson.com/auth/login";
    const credentials = {
      username,
      password,
    };
    const credentialsJson = JSON.stringify(credentials);

    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: credentialsJson,
    };

    const res = await fetch(api, init);
    const responseData = await res.json();
    console.log(responseData);

    // Fail
    if (!res.ok) return showError(errors.invalidcredentials);

    // Success
    dispatch(login(responseData));
    localStorage.user = JSON.stringify(responseData);
    router.replace("/");
  };

  const handleCloseModal = () => {
    dispatch(hideLogin());
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-950/50 flex items-center justify-center p-8">
      <div className="w-full max-w-lg bg-gray-100 rounded-2xl shadow-xl p-8 md:p-10 relative">
        {/* Close Button */}
        <Icon
          name="close"
          extraCSS="absolute top-10 right-10 cursor-pointer"
          iconAction={handleCloseModal}
          size={30}
        />

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm">
            Please sign in to your account.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              username Address
            </label>
            <input
              ref={usernameRef}
              type="text"
              id="username"
              name="username"
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Password
            </label>
            <input
              ref={passRef}
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium transition duration-200"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleLogin}
            variant="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]"
          >
            Sign In
          </Button>

          {/* Error */}
          <div className="text-red-500 text-xs">{error}</div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-medium transition duration-200"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
