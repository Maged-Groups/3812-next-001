import LoginForm from "@/features/auth/login/LoginForm";

export const metadata = {
  title: "Login to our system...",
  description: "System is protected with user accounts",
};

export default function LoginPage() {
  return <LoginForm />;
}
