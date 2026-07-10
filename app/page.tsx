import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Effective from "@/components/Effective";
import Designed from "@/components/Designed";
import Handled from "@/components/Handled";
import Membership from "@/components/Memberships";
import GetStarted from "@/components/GetStarteds";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Effective />
      <Designed />
      <Handled />
      <Membership />
      <GetStarted />
      <Footer />
    </main>
  );
}