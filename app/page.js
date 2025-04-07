'use client';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const sidebarRef = useRef(null);
  const menuRef = useRef(null);
  const tlRef = useRef(null);
  const cancelRef = useRef(null);

  useEffect(() => {
    if (sidebarRef.current) {
      // Initialize GSAP timeline once
      tlRef.current = gsap.timeline({ paused: true }).to(sidebarRef.current, {
        x: "-100%",
        duration: 0.5,
        // delay: 1,
        ease: "power1.out",
      });
    }

    const handleClick = () => {
      if (tlRef.current) {
        tlRef.current.play();
      }
    };
    const handleClose = () => {
      if (tlRef.current) {
        tlRef.current.reverse();
      }
    };

    const menuEl = menuRef.current;
    const cancelEl = cancelRef.current;
    // const closeBtn = document.querySelector(".cancel-icon");
    if (menuEl) {
      menuEl.addEventListener("click", handleClick);
    }

    if (cancelEl) {
      cancelEl.addEventListener("click", handleClose);
    }

    return () => {
      if (menuEl) {
        menuEl.removeEventListener("click", handleClick);
      }
      if (cancelEl) {
        cancelEl.removeEventListener("click", handleClose);
      }
    };
  }, [tlRef.current]);

  return (
    <div>
      <div id="full" ref={sidebarRef}>
        <div>
          <ul className="sidemenu">
            <li>Menu</li>
            <li>
              Tarun Soni <br />
              Founder and CEO
            </li>
            <li className="cancel-icon" ref={cancelRef}>X</li>
          </ul>
        </div>
        <div className="menuItems">
          <a> Home <span className="count">1</span></a>
          <a> Mining <span className="count">2</span></a>
          <a> Investments<span className="count">3</span></a>
          <a> About Us <span className="count">4</span></a>
          <a> Contact Us <span className="count">5</span></a>
          <a> Privacy Policy <span className="count">6</span></a>
        </div>
      </div>
      <main>
        <div className="Light-page">
          <nav
            id="navbar"
            className="container flex justify-between items-center mt-5"
          >
            <section>
              <Image src="/logo.png" width={180} height={38} alt="Logo" />
            </section>
            <section>
              <Image
                id="menu"
                ref={menuRef}
                src="/menu.png"
                width={67}
                height={38}
                alt="Menu"
              />
            </section>
          </nav>
          <div className="container mt-5">
            <h1 className="font-rigid text-4xl">Rigid Square in Action</h1>
            <h1 className="">Mining Experience.</h1>
            <video
              className="mt-5"
              width="1000"
              height="30"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    </div>
  );
}
