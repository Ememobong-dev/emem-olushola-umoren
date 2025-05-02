import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import React from "react";

const Terms = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center py-32">
        <div className="max-w-[1350px] flex flex-col gap-10">
          <h3 className="font-azeret-mono text-3xl text-center">
            Terms and Conditions
          </h3>
          <div>
            <h3 className="text-3xl mb-5 font-alro-reg">1.  Introduction</h3>
            <p className="text-justify font-azeret-mono">
              By engaging my services as a Frontend Developer, you agree to the
              following terms and conditions. These terms ensure clarity,
              professionalism, and mutual respect throughout the project
              lifecycle.
            </p>
          </div>
          <div>
            <h3 className="text-3xl mb-5 font-alro-reg">2.  Project Engagement</h3>
            <p className="text-justify font-azeret-mono">
              Projects must begin with a clearly outlined brief, including
              deliverables, timeline, necessary assets, and approved designs. I
              reserve the right to accept or decline any project based on
              availability or alignment with my expertise.
            </p>
          </div>
          <div>
            <h3 className="text-3xl mb-5 font-alro-reg">3.  Work Process</h3>
            <p className="text-justify font-azeret-mono">
              Development is strictly based on the approved scope and design
              assets. Clients are encouraged to provide timely feedback. Any
              change in scope or addition of new features outside the original
              agreement may affect the timeline and cost.
            </p>
          </div>
          <div>
            <h3 className="text-3xl mb-5 font-alro-reg">
              4.    Timeline and Delivery
            </h3>
            <p className="text-justify font-azeret-mono">
              Agreed timelines are adhered to, provided there is consistent
              client communication and content delivery. Delays due to
              unresponsiveness or lack of materials may result in adjusted
              deadlines.
            </p>
          </div>
          <div>
            <h3 className="text-3xl mb-5 font-alro-reg">5.  Payment Terms</h3>
            <ul className="list-disc text-justify pl-5 font-azeret-mono">
              <li>
                A deposit (typically 50%) is required before development
                begins.
              </li>
              <li>
                The remaining balance is due upon project completion, before
                final delivery.
              </li>
              <li>
                For ongoing projects billed monthly, payment for each month must
                be made in advance or on the agreed billing date.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl mb-5 font-alro-reg">
              6.    Monthly Payment Policy
            </h3>
            <p className="text-justify font-azeret-mono">In cases where payment is structured monthly:</p>
            <ul className="list-disc text-justify pl-5 font-azeret-mono">
              <li>
                Non-payment for any month will result in immediate suspension of
                development work.
              </li>
              <li>
                I reserve the right to retract or disable any additions,
                updates, or features developed during the unpaid month.
              </li>
              <li>
                Development will resume only after full payment for the missed
                month has been received.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl mb-5 font-alro-reg">7.  Refund Policy</h3>
            <ul className="list-disc text-justify pl-5 font-azeret-mono">
              <li>A full refund applies only if no development has started.</li>
              <li>
                Partial refunds may be issued if a project is canceled midway,
                based on the portion of work completed.
              </li>
              <li>No refund after 75% delivery and approval of the project.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl mb-5 font-alro-reg">8.  Usage Rights</h3>
            <p className="text-justify font-azeret-mono">
              Ownership of the final code and deliverables is transferred to the
              client after full payment is received. I reserve the right to
              feature completed work in my portfolio.
            </p>
          </div>
          <div>
            <h3 className="text-3xl mb-5 font-alro-reg">9.  Communication</h3>
            <p className="text-justify font-azeret-mono">
              Professional and respectful communication is expected throughout.
              All discussions and updates will be carried out via agreed-upon
              channels (email, messaging apps, or project tools).
            </p>
          </div>
        </div>
      </div>
      <div className="mx-8 lg:px-14 3xl:px-28 py-16 lg:py-28 flex flex-col gap-36 lg:gap-56">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
