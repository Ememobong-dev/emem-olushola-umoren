import { Col, Row } from "antd";
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
            <p className="italic">
              Data <span className="font-bold not-italic ">Analyst</span>
            </p>
          </Button>
        </div>
        <div className="absolute bottom-[30%] right-[24%]">
          <Button variant="yellow">
            <p className="italic">
              Frontend <span className="font-bold not-italic ">Developer</span>
            </p>
          </Button>
        </div>
      </div>
      <div className="px-14 3xl:px-28 py-16 flex flex-col gap-14">
        {/* Second Section */}
        <div>
          <Row>
            <Col lg={10}>
              <div>
                <h3 className="font-alro-reg text-3xl">
                  Who is <span className="font-bold">Ememobong?</span>
                </h3>
                <div className="flex flex-col gap-3 mt-6 font-azeret-mono text-[11px] ">
                  <p>
                    I am a self-taught Frontend Developer and Data Analyst with
                    expertise in React, Next.js, TypeScript, and TailwindCSS. My
                    journey into tech has been fueled by curiosity, continuous
                    learning, and a passion for problem-solving. Over the years,
                    I have built user-friendly, scalable, and impactful digital
                    solutions for global clients, including Infarena, a trade
                    and review platform; AyoCPA, a personalized accounting
                    solution; and WOW Gift Card, a secure platform for global
                    gift card trading.
                  </p>
                  <p>
                    Beyond development, I hold certifications from Google and
                    Women Techsters, solidifying my expertise in data analytics
                    and digital problem-solving. I previously served as the Data
                    Analytics Team Lead at GDSC, where I mentored peers, led
                    data-driven projects, and contributed to fostering a
                    community of aspiring analysts and developers.
                  </p>
                  <p>
                    My passion for learning drives me to stay ahead of industry
                    trends and continuously refine my skills. I actively
                    document my 100DaysOfCode journey on LinkedIn, sharing
                    insights, challenges, and progress while exploring emerging
                    technologies and innovations in frontend development and
                    data analytics.
                  </p>
                  <p>
                    With a deep appreciation for clean code, and data-driven
                    decision-making, I am always eager to collaborate, build
                    meaningful projects, and push the boundaries of technology.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
