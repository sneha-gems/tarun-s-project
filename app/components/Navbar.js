"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Navbar() {
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const sidebarButtonRef = useRef(null);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Animate menu slide-in
    tl.to(menuRef.current, {
      right: 0,
      duration: 1,
      ease: "expo.out",
    });

    // Animate menu items
    tl.from(menuRef.current.querySelectorAll("ul li"), {
      x: 150,
      duration: 0.6,
      opacity: 0,
      stagger: 0.35,
    });

    // Animate cancel icon
    tl.from(cancelButtonRef.current, {
      opacity: 0,
    });

    // Play/Reverse the animation on click
    sidebar.current.addEventListener("click", () => tl.play());
    cancelButtonRef.current.addEventListener("click", () => tl.reverse());

    // Optional navbar animation
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
    <>
      <nav
        ref={navbarRef}
        className="bg-gray-800 text-white p-4 flex justify-between items-center"
      >
        <section>
          <Image src="/logo.png" width={180} height={38} alt="logo" />
        </section>
        <section ref={sidebarButtonRef} className="cursor-pointer">
          <Image src="/menu.png" width={50} height={38} alt="hamburger" />
        </section>
      </nav>

      <aside
        ref={menuRef}
        className="menu fixed top-0 right-[-100%] w-[300px] h-full bg-gray-900 text-white p-6 transition-all duration-500 z-50"
      >
        <i
          ref={cancelButtonRef}
          className="cancel-icon text-xl cursor-pointer block mb-6"
        >
          ✕
        </i>
        <ul className="space-y-4">
          <li>Home</li>
          <li>Mining</li>
          <li>Investments</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </aside>
    </>
  );
}
 