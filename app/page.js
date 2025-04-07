'use client'
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const sidebarRef = useRef(null);
  const menuRef = useRef(null);
  const tl = gsap.timeline();
  useEffect(() => {

    if (sidebarRef.current) {
      
      tl.to(sidebarRef.current, {
        x: "100%",
        duration:1,
        delay:1,
        ease: "power1.out"
      });
    }

    tl.pause()

    if (menuRef.current) {
      menuRef.current.addEventListener("click", () => {
        tl.play();
      });
    }

    // Cleanup (optional but recommended)
    return () => {
      if (menuRef.current) {
        menuRef.current.removeEventListener("click", () => {
          tl.play();
        });
      }
    };
  }, []);
  return (
    <div>
      <div id="full" ref={sidebarRef}>
        <div>
          <ul className="sidemenu">
            <li>Menu</li>
            <li>Tarun Soni <br/>
            Founder and CEO </li>
            <li className="cancel-icon">X</li>
          </ul>
        </div>
        <div className="menuItems">
          <a> Home </a>
          <a> Mining</a>
          <a> Investments</a>
          <a> About Us</a>
          <a> Contact Us</a>
          <a> Privacy Policy</a>
          
        </div>
      </div>
      <main>
        <div className="Light-page">
        <nav id="navbar" className="container flex justify-between items-center mt-5">
          <section>
            <Image src="/logo.png" width={180} height={38} alt="" />
          </section>
          <section ref={menuRef}>
            <Image id="menu"  src="/menu.png" width={67} height={38} alt="" />
          </section>
        </nav>
        <div className="container mt-5">
          <h1 className="font-rigid text-4xl">Rigid Square in Action</h1>
          <h1 className="">Mining Experience.</h1>
          <video className="mt-5" width="1000" height="30" autoPlay muted loop playsInline>
              <source src="/video.webm" type="video/webm" />
              Your browser does not support the video tag.
          </video>
        </div>
        </div>
      </main>

      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Footer
      </footer> */}
    </div>
  );
}
