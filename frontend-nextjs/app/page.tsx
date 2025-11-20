import { HomeWorks } from "./components/sections/HomeWorks";
import { HomeContact } from "./components/sections/HomeContact";
import { HomeHero } from "./components/sections/HomeHero";
import { HomeAchievements } from "./components/sections/HomeAchievements";
import { HomeAbout } from "./components/sections/HomeAbout"; 
// 1. Import Team Component
import { HomeTeam } from "./components/sections/HomeTeam";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A10]">
      <HomeHero />
      <HomeAchievements />
      <HomeAbout />

      <div id="works"> 
        <HomeWorks />
      </div>

      {/* 2. Add Team Section Here */}
      <HomeTeam />

      <div id="contact">
        <HomeContact />
      </div>
    </main>
  );
}