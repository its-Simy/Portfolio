//This will be my landing page
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Get to know me!</h1>
    </div>
    </>
  );
}