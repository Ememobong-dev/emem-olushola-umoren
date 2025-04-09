import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="landing_bg relative">
        <div className="absolute bottom-20 px-14 3xl:px-28 w-full">
          <div className="flex justify-between items-end w-full">
            <div>
              <h2 className="text-8xl">Umoren</h2>
              <h2 className="text-8xl">Ememobong</h2>
              <p className="w-[70%]">
                Self-taught Frontend Developer and Data Analyst skilled in{" "}
                <span className="text-pepper-red">React</span>,{" "}
                <span className="text-blue">Next.js</span>,{" "}
                <span className="text-cyan">TypeScript</span>, and{" "}
                <span className="text-sharp-yellow">TailwindCSS</span>.
              </p>
            </div>
            <div>
              <button className="rounded-full border border-white py-2 px-6">Scroll down</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
