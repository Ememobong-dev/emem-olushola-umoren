import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="landing_bg relative">
        <div className="absolute bottom-20">
          <h2>Umoren</h2>
          <h2>Ememobong</h2>
          <p>
          Self-taught Frontend Developer and Data Analyst skilled in React, Next.js, TypeScript, and TailwindCSS.
          </p>
        </div>
      </div>
    </div>
  );
}
