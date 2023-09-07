import Header from "@/components/Header";
import Main from "@/components/Main";
import Image from "next/image";
import "../app/globals.css";

export default function Home() {
  return (
    <div className="bg-gray-950 ">
      <Header />
      <Main />
    </div>
  );
}
