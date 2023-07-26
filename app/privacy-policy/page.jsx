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
            Privacy Policy
          </h1>
        </div>

        <div className="dark:text-white text-slate-800 space-y-5 w-[100%] ss:w-[75%]">
          <p>
            At Kanchana Herath, we are committed to protecting your privacy and
            ensuring the security of any personal information we collect from
            you. This Privacy Policy outlines how we collect, use, disclose, and
            protect your information when you visit our website or engage our
            services. By accessing our website or providing us with your
            personal information, you consent to the practices described in this
            Privacy Policy.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">
            1. Information We Collect
          </h2>
          <h3 className="text-[20px] ss:text-[22px]">
            1.1 Personal Information
          </h3>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and any other information you provide to us
            voluntarily when you contact us or engage our services.
          </p>

          <h3 className="text-[20px] ss:text-[22px]">1.2 Usage Data</h3>
          <p>
            When you visit our website, we may collect certain information
            automatically, including your IP address, browser type,
            referring/exit pages, and operating system. We may also collect
            information about your usage of our website through cookies or
            similar technologies.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">2. Use of Information</h2>
          <h3 className="text-[20px] ss:text-[22px]">
            2.1 Personal Information
          </h3>
          <p>
            We may use your personal information to communicate with you,
            respond to your inquiries, provide you with our services, and
            improve our services based on your feedback. We may also use your
            personal information to send you marketing or promotional materials,
            but only if you have consented to receive such communications.
          </p>

          <h3 className="text-[20px] ss:text-[22px]">2.2 Usage Data</h3>
          <p>
            We may use usage data to analyze trends, administer the website,
            track user movements, and gather demographic information for
            aggregate use. This information helps us improve our website and
            tailor it to the needs of our visitors.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">
            3. Disclosure of Information
          </h2>
          <h3 className="text-[20px] ss:text-[22px]">3.1 Service Providers</h3>
          <p>
            We may share your personal information with trusted third-party
            service providers who assist us in operating our website, conducting
            our business, or providing services to you. These service providers
            are bound by confidentiality agreements and are prohibited from
            using your personal information for any purpose other than those
            specified by us.
          </p>

          <h3 className="text-[20px] ss:text-[22px]">3.2 Legal Requirements</h3>
          <p>
            We may disclose your personal information if required to do so by
            law or if we believe that such action is necessary to comply with a
            legal obligation, protect and defend our rights or property,
            investigate fraud, or protect the personal safety of our users or
            the public.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">4. Security</h2>
          <p>
            We take reasonable measures to protect the security of your personal
            information and to ensure that it is treated securely in accordance
            with this Privacy Policy. However, please be aware that no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services
            that are not owned or controlled by us. This Privacy Policy applies
            only to our website. We have no control over and assume no
            responsibility for the content, privacy policies, or practices of
            any third-party websites or services.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">
            6. Children&apos;s Privacy
          </h2>
          <p>
            Our website is not intended for use by individuals under the age of
            13. We do not knowingly collect personal information from children
            under 13 years of age. If we become aware that we have collected
            personal information from a child under the age of 13, we will take
            steps to delete it as soon as possible.
          </p>

          <h2 className="text-[23px] ss:text-[25px]">
            7. Changes to the Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time, and the updated
            version will be posted on our website. It is your responsibility to
            review this Privacy Policy periodically for any changes. Your
            continued use of our website or services after any modifications to
            the Privacy Policy will constitute your acknowledgment of the
            modifications and your consent to abide and be bound by the updated
            Privacy Policy.
          </p>

          <h2 className="text-[23px] xs:text-[25px]">8. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy
            or our privacy practices, please contact us at
            hello@kanchanaherath.com.
          </p>

          <p>
            By using our website or engaging our services, you signify your
            acceptance of this Privacy Policy. If you do not agree to this
            Privacy Policy, please do not use our website or provide us with
            your personal information.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
