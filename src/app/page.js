import Header from "@/components/Header";
import Main from "@/components/Main";
import Image from "next/image";
import "../app/globals.css";
import Sidebar from "@/components/Sidebar";
import Filter from "@/components/Filter";

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] relative ">
      <Header />
      <section className="flex relative top-14">
        <Sidebar />
        <Filter />
      </section>
      <Main />
    </div>
  );
}
