import Header from "@/components/Header";
import Main from "@/components/Main";
import "../app/globals.css";
import Sidebar from "@/components/Sidebar";
import Filter from "@/components/Filter";

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] relative ">
      <div className="sticky top-0 z-20">
        <Header />
      </div>
      <div className="flex w-full">
        <Sidebar />
        <div className="overflow-scroll scrollbar-hide flex flex-col items-center w-full">
          <Filter />
          <Main />
        </div>
      </div>
    </div>
  );
}
