import React from "react";
import logoImage from "@/assets/logo.svg";
import Image from "next/image";

export default function Logo() {
  return <Image src={logoImage} alt={""} />;
}
