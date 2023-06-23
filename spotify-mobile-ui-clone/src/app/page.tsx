"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSection from "@/views/MainSection";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-zinc-50 h-full w-full outline">
      <Header />
      <MainSection />
      <div className="fixed w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
}
