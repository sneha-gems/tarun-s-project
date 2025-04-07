// components/Navbar.js
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        opacity: 0,
        duration: 1,
        delay: 1,
        x: 100,
      });
    }
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="bg-gray-800 text-white p-4"
    >
      <section>
            <Image src="/logo.png" width={180} height={38} alt="logo" />
          </section>
          <section>
            <Image src="/menu.png" width={50} height={38} alt="hamburgur"/>
          </section>
    </nav>
  );
}


