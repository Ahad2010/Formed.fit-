import Hero from "@/components/Hero";
import Effective from "@/components/Effective";
import Designed from "@/components/Designed";
import Handled from "@/components/Handled";
import Membership from "@/components/Memberships";

export default function Home() {
  return (
    <main>
      <Hero />
      <Effective />
      <Designed />
      <Handled />
      <Membership />
    </main>
  );
}