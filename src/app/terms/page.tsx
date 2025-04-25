import { Contact } from '@/src/components/Contact';
import { Footer } from '@/src/components/Footer';
import { Navbar } from '@/src/components/Navbar';
import React from 'react';

const Terms = () => {
  return (
     <div>
          <Navbar />
          <div className="flex justify-center items-center py-32">
            <div className="max-w-[1350px] flex flex-col gap-10">
              <h3 className="font-azeret-mono text-3xl text-center">
                Privacy and Refund Policy
              </h3>
              <div>
                <h3 className="text-3xl mb-5 font-alro-reg">Data Collection</h3>
                <ul className="list-disc text-justify pl-5 font-azeret-mono">
                  <li>
                    I collect only the information necessary to carry out your
                    project—such as names, emails, project briefs, design assets,
                    and feedback.
                  </li>
                  <li>
                    No personal or business data shared during the project will be
                    sold, shared, or used for any other purpose without your
                    consent.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl mb-5 font-alro-reg">Data Usage</h3>
                <ul className="list-disc text-justify pl-5 font-azeret-mono">
                  <li>
                    Any design files, content, or access credentials shared are
                    strictly used for development purposes.
                  </li>
                  <li>
                    Your project data may be stored securely for reference,
                    troubleshooting, or future updates unless you request full
                    deletion after project completion.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl mb-5 font-alro-reg">Confidentiality</h3>
                <ul className="list-disc text-justify pl-5 font-azeret-mono">
                  <li>
                    I treat all client data and project content as confidential.
                  </li>
                  <li>
                    Non-disclosure agreements (NDAs) can be signed upon request for
                    added assurance.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl mb-5 font-alro-reg">
                  Refund Policy (Summary)
                </h3>
                <ul className="list-disc text-justify pl-5 font-azeret-mono">
                  <li>Full refund if no work has started.</li>
                  <li>
                    Partial refund if the project is canceled mid-development,
                    calculated based on progress made.
                  </li>
                  <li>No refund after 75% delivery and approval of the project.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-8 lg:px-14 3xl:px-28 py-16 lg:py-28 flex flex-col gap-36 lg:gap-56">
            <Contact />
          </div>
          <Footer />
        </div>
  )
}

export default Terms;