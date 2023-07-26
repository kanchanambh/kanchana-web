import PageWrapper from "@components/PageWrapper";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col justify-center items-center p-3 pt-8 h-screen
      xs:p-10 xs:pt-20
     "
    >
      <div className="w-[75%]">
        <div
          className="font-poppins text-[28px] text-center tracking-wide font-bold 
         dark:text-red-700  text-red-700 
         xs:text-[40px]
         "
        >
          <span className="pb-5">Page is Not Found - 404</span>
          <span className="text-gradient dark:text-gradient-dark background-animate mt-5">
            {" "}
            <br></br>
            <Link className="" href="/">
              {" "}
              Home{" >>>"}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
