'use client';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const sidebarRef = useRef(null);
  const menuRef = useRef(null);
  const tlRef = useRef(null);
  const tlRef2 = useRef(null);
  const cancelRef = useRef(null);
  const firstBlock = useRef(null);
  const secondBlock = useRef(null);
  const menuItemsRef = useRef(null); // ✅ properly declared

  useEffect(() => {
    // Sidebar animation
    if (sidebarRef.current) {
      tlRef.current = gsap.timeline({ paused: true }).to(sidebarRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power1.out",
      });
    }

    // Menu item stagger animation
    if (menuItemsRef.current) {
      const menuLinks = menuItemsRef.current.querySelectorAll("a");
      gsap.set(menuLinks, { opacity: 0, x: -30 }); // optional starting state
      gsap.to(menuLinks, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });
    }

    // Animated blocks
    if (firstBlock.current) {
      gsap.to(firstBlock.current, {
        x: "64vw",
        duration: 2,
        borderRadius: '10px',
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    if (secondBlock.current) {
      gsap.to(secondBlock.current, {
        x: "-64vw",
        duration: 2,
        borderRadius: '10px',
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    const handleClick = () => {
      if (tlRef.current) tlRef.current.play();
    };
    const handleClose = () => {
      if (tlRef.current) tlRef.current.reverse();
    };

    const menuEl = menuRef.current;
    const cancelEl = cancelRef.current;
    if (menuEl) menuEl.addEventListener("click", handleClick);
    if (cancelEl) cancelEl.addEventListener("click", handleClose);

    return () => {
      if (menuEl) menuEl.removeEventListener("click", handleClick);
      if (cancelEl) cancelEl.removeEventListener("click", handleClose);
    };
  }, []);

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
        <div className="menuItems" ref={menuItemsRef}>
          <a> Home <span className="count">01</span></a>
          <a> Mining <span className="count">02</span></a>
          <a> Investments<span className="count">03</span></a>
          <a> About Us <span className="count">04</span></a>
          <a> Contact Us <span className="count">05</span></a>
          <a> Privacy Policy <span className="count">06</span></a>
        </div>
      </div>
      <main>
        <div className="Light-page">
          <nav id="navbar" className="flex justify-between items-center">
            <section>
              <Image src="/logo.png" width={200} height={38} alt="Logo" />
            </section>
            <section>
              <Image
                id="menu"
                ref={menuRef}
                src="/menu.png"
                width={50}
                height={38}
                alt="Menu"
              />
            </section>
          </nav>
          <div className="mt-5">
            <div className="heading-container">
              <p className="headings gradient-heading remarkable">Remarkable</p>
              <p className="headings gradient-heading mining">Mining Experience.</p>
            </div>
            <div className="video-main-container">
              <div className="first-block"></div>
              <div className="second-block"></div>
              <div className="third-block">
              <div className="fourth-block"></div>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
              </p>
              </div>
              <div className="fifth-block"></div>
              <div className="sixth-block"></div>
              <div className="seventh-block"></div>
              <div className="eighth-block"></div>
              <div className="nineth-block"></div>
              <div className="tenth-block"></div>
              <div className="eleventh-block"></div>
              <div className="twelth-block"></div>
              <video
                id="video-container"
                className="mt-2"
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
        </div>
      </main>
    </div>
  );
}
