import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="landing_bg relative">
        <div className="absolute bottom-20 px-14 3xl:px-28 w-full">
          <div className="flex justify-between items-end w-full">
            <div>
              <h2 className="text-8xl font-alro-reg">Umoren</h2>
              <h2 className="text-8xl font-alro-reg">Ememobong</h2>
              <p className="w-1/2 font-azeret-mono">
                Self-taught Frontend Developer and Data Analyst skilled in{" "}
                <span className="text-pepper-red">React</span>,{" "}
                <span className="text-blue">Next.js</span>,{" "}
                <span className="text-cyan">TypeScript</span>, and{" "}
                <span className="text-sharp-yellow">TailwindCSS</span>.
              </p>
            </div>
            <div>
              <button className="rounded-full border border-white w-32 py-2 px-3">
                Scroll down
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-[30%] left-[30%]">
          <Button variant="cyan">
            <p className="italic">Data <span className="font-bold not-italic ">Analyst</span></p>
          </Button>
        </div>
        <div className="absolute bottom-[30%] right-[24%]">
          <Button variant="yellow">
          <p className="italic">Frontend <span className="font-bold not-italic ">Developer</span></p>
          </Button>
        </div>
      </div>
    </div>
  );
}
