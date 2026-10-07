"use client";
import { useRef, useState } from "react";
import Button from "@c/atoms/Button";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Icon from "@/components/atoms/Icon";
import { hideLogin } from "@/lib/redux/accountSlice";
import { registerFormFields } from "@/data/registerForm";

export default function RegisterForm() {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const inputRefs = useRef({});

  const dispatch = useDispatch();

  const handleRegister = async () => {
    // const username = usernameRef;
    console.log(inputRefs.current.confirmPassRef.value);

    const userData = {};

    const foundErrors = {};

    for (let key in inputRefs.current) {
      console.log(inputRefs.current[key].required);
      const k = inputRefs.current[key].id;
      const isRequired = inputRefs.current[key].required;
      const label = inputRefs.current[key].getAttribute("data-label");
      console.log("🚑", label);
      const v = inputRefs.current[key].value;

      userData[k] = v;

      if (v == "" && isRequired) {
        foundErrors[k] = label + " is requird";
      }
    }
    setErrors(foundErrors);

    console.log("🚓🚓🚓🚓", foundErrors);

    const errorsKey = Object.keys(foundErrors);
    console.log("🚓🚓🚓🚓", errorsKey);

    // If has errors stop
    if (errorsKey.length > 0) {
      return toast.error("Fill all required fields", { position: "top-right" });
    }

    // Check passwords
    if (userData.password !== userData.password_confirmation) {
      return toast.error("Passwords do not match!!!");
    }

    console.log("🚇🚊🚉🚆", userData);
  };

  console.log("🚑 errors", errors);

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
            Welcome to Our System
          </h2>
          <p className="text-gray-500 text-sm">Create your account.</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {registerFormFields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                {field.label}
              </label>
              <div className="flex gap-2 items-center rounded-xl border border-gray-300 bg-gray-50 px-2">
                <input
                  ref={(element) => {
                    inputRefs.current[field.ref] = element;
                  }}
                  type={
                    field.type === "password" && showPassword
                      ? "text"
                      : field.type
                  }
                  required={field.required}
                  id={field.id}
                  data-label={field.label}
                  autoComplete="off"
                  name={field.id}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-transparent transition duration-200"
                />
                {field.type === "password" && (
                  <Icon
                    size={30}
                    name={showPassword ? "eye" : "eyeOff"}
                    iconAction={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <p className="text-red-500">{errors[field.id]}</p>
            </div>
          ))}

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
            onClick={handleRegister}
            variant="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]"
          >
            Register
          </Button>
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
