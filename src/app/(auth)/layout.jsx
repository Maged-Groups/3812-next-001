import Footer from "@/components/Footer";

export default function AuthLayout({ children }) {
  return (
    <div className="bg-sky-700 text-sky-200 min-h-screen flex flex-col justify-between  ">
      {children}
      <Footer />
    </div>
  );
}
