import Link from "next/link";
import React from "react";
import logo from '../public/logo.png'
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"}>
      <h2 className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to to-cyan-800 text-transparent bg-clip-text hover:cursor-pointer">
      <Image
      src={logo}
      width={50}
      height={50}
      alt={'logo'}
      >

      </Image>
      </h2>

    </Link>
  );
}

export default Logo;
