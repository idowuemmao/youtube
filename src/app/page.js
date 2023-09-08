import Header from "@/components/Header";
import Main from "@/components/Main";
import Image from "next/image";
import "../app/globals.css";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] relative ">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}
