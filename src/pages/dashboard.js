import React from "react";
import Header from "@/components/header";
import Link from "next/link";
import { useState } from "react";

const CustomLink = React.forwardRef(({ href, onClick, children }, ref) => {
  return (
    <div
      className="w-60 rounded-lg m-4 md:m-10 p-4 md:p-20 border mx-auto flex justify-center items-center border-white shadow-md cursor-pointer text-white hover:bg-yellow-600 hover:translate-y-1 transition delay-150 hover:text-white"
      onClick={onClick}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default function Dashboard() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <>
      <Header />
      <div className="bg-black font-xl gap-5 md:gap-20 mx-auto min-h-screen flex flex-col items-center text-white justify-center font-bold font-mono text-5xl md:text-7xl">
        <Link href="/buy" passHref>
          <CustomLink
            onMouseEnter={() => setHoveredButton("buy")}
            onMouseLeave={() => setHoveredButton(null)}
            className={
              hoveredButton === "buy"
                ? "bg-white text-black"
                : "text-white border"
            }
          >
            Buy
          </CustomLink>
        </Link>
        <Link href="/sell" passHref>
          <CustomLink
            onMouseEnter={() => setHoveredButton("sell")}
            onMouseLeave={() => setHoveredButton(null)}
            className={
              hoveredButton === "sell"
                ? "bg-white text-black"
                : "text-white border"
            }
          >
            Sell
          </CustomLink>
        </Link>
      </div>
    </>
  );
}
