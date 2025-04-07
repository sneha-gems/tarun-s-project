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
  const firstBlock = useRef(null)

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

    if (firstBlock.current) {
      // Initialize GSAP timeline once
      tlRef2.current = gsap.timeline().to(firstBlock.current, {
        x: "64vw",
        duration: 2,
        borderRadius:'10px',
        repeat: -1, 
        scrub: 5,
        yoyo: true,
        // delay: 1,
        ease: "circ.out",
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
  }, [tlRef.current, tlRef2.current]);

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
            className=" flex justify-between items-center"
          >
            <section>
              <Image src="/logo.png" width={300} height={38} alt="Logo" />
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
          <div className=" mt-5">
            <div className='heading-container'>
            <p className="headings gradient-heading remarkable">Remarkable</p>
            <p className="headings gradient-heading mining">Mining Experience.</p>
            </div>
            <div className="video-main-container">
              <div className="first-block" ref={firstBlock}></div>
            <video
              id='video-container'
              className="mt-2"
              // height="30"
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
