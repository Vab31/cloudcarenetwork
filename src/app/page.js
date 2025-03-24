import Image from "next/image";
import Nav from "@/app/components/nav";
import Hero from "@/app/components/home/hero";
import Imglib from "@/app/components/home/imglib";
import Blog from "@/app/components/home/blog";
import Treatment from "@/app/components/home/treatment";
import Footer from "@/app/components/footer";
import Us from "@/app/components/about";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <div className="">
      <Nav/>
      <Hero/>
      <AboutPage/>
      <Imglib/>
      {/* <Blog/> */}
      <Treatment/>
      <Footer/>
    </div>
  );
}
