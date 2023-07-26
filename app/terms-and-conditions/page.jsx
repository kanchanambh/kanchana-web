import PageWrapper from "@components/PageWrapper";
import React from "react";

const page = () => {
  return (
    <PageWrapper>
      <div
        className="flex flex-col justify-center items-center p-3 pt-8
   xs:p-10 ss:pt-20
  "
      >
        <div className="w-[75%]">
          <h1
            className="font-poppins  text-[24px] text-center tracking-wide font-bold 
      dark:text-white 
      xs:text-[30px] pb-5
      "
          >
            Terms and Conditions
          </h1>
        </div>

        <div className="dark:text-white text-slate-800 space-y-5 w-[100%] ss:w-[75%]">
          <p>
            These Terms and Conditions (&quot;Agreement&quot;) govern the use of
            the services provided by Kanchana Herath, a Graphic Designer and
            Full Stack Developer (&quot;Service Provider&quot;). By engaging
            with or using the services offered by Kanchana Herath, you
            (&quot;Client&quot; or &quot;User&quot;) agree to be bound by the
            terms and conditions set forth in this Agreement.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">1. Services Provided</h2>
          <p>
            1.1 The Service Provider offers graphic design and full stack
            development services as outlined on their website or as agreed upon
            in writing between the Service Provider and the Client.
          </p>
          <p>
            1.2 The Service Provider will make reasonable efforts to complete
            the agreed-upon work within the agreed timeframe, subject to any
            changes requested by the Client.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">
            2. Client Responsibilities
          </h2>
          <p>
            2.1 The Client agrees to provide accurate and complete information
            to the Service Provider regarding their requirements for the
            project.
          </p>
          <p>
            2.2 The Client is responsible for obtaining all necessary
            permissions, licenses, or rights for any materials (such as images,
            logos, or text) provided to the Service Provider for use in the
            project.
          </p>
          <p>
            2.3 The Client is responsible for reviewing and approving all
            deliverables provided by the Service Provider in a timely manner.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">3. Payment Terms</h2>
          <p>
            3.1 The Client agrees to pay the Service Provider the agreed-upon
            fees for the services rendered, as outlined in the project proposal
            or as agreed upon in writing.
          </p>
          <p>
            3.2 Payment is due according to the payment schedule outlined in the
            project proposal or as agreed upon in writing.
          </p>
          <p>
            3.3 In the event of late payment, the Service Provider reserves the
            right to suspend work on the project until payment is received.
          </p>
          <p>
            3.4 Any additional expenses incurred by the Service Provider in the
            course of the project (such as stock images or third-party services)
            will be billed to the Client unless otherwise specified.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">
            4. Intellectual Property
          </h2>
          <p>
            4.1 The Client retains all rights to their pre-existing intellectual
            property provided to the Service Provider for use in the project.
          </p>
          <p>
            4.2 The Service Provider retains all rights to their pre-existing
            intellectual property, including any templates, code, or designs
            used in the project.
          </p>
          <p>
            4.3 Upon completion of the project and receipt of full payment, the
            Service Provider grants the Client a non-exclusive, non-transferable
            license to use the final deliverables for the purposes outlined in
            the project.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">5. Confidentiality</h2>
          <p>
            5.1 Both the Service Provider and the Client agree to keep all
            confidential information shared during the project confidential and
            not disclose it to any third party without the express written
            consent of the other party.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">
            6. Limitation of Liability
          </h2>
          <p>
            6.1 The Service Provider will make reasonable efforts to ensure the
            accuracy and quality of the deliverables provided, but they do not
            guarantee any specific outcomes or results from the use of their
            services.
          </p>
          <p>
            6.2 The Service Provider shall not be liable for any direct,
            indirect, incidental, consequential, or special damages arising out
            of or in connection with the services provided, including but not
            limited to loss of profits, data, or business opportunities.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">7. Termination</h2>
          <p>
            7.1 Either party may terminate this Agreement by providing written
            notice to the other party.
          </p>
          <p>
            7.2 In the event of termination, the Client agrees to pay the
            Service Provider for all services rendered up to the termination
            date.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">
            8. Governing Law and Jurisdiction
          </h2>
          <p>
            8.1 This Agreement shall be governed by and construed in accordance
            with the laws of the jurisdiction where the Service Provider
            operates.
          </p>
          <p>
            8.2 Any disputes arising out of or in connection with this Agreement
            shall be subject to the exclusive jurisdiction of the courts in that
            jurisdiction.
          </p>

          <p>
            By engaging with or using the services provided by Kanchana Herath,
            you acknowledge that you have read, understood, and agree to be
            bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
