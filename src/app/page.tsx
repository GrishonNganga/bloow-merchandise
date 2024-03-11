import Image from "next/image";
import HeroSection from "./components/landing/hero";
import { ModeToggle } from "./components/utils/theme-toggle";
import Categories from "./components/landing/categories";
import Footer from "./components/landing/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Categories />
      <Footer />
    </main>
  );
}
