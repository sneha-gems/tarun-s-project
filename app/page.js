'use client'
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const navbarRef = useRef(null);
  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
      });
    }
  }, []);
  return (
    <div>
      <div className="sidebar">
        <div >
          <ul className="sidemenu">
            <li>Menu</li>
            <li></li>
            <li className="cancel-icon">X</li>
          </ul>
        </div>

      </div>
      <main>
        <div className="Light-page">
        <nav ref={navbarRef} id="navbar" className="container flex justify-between items-center mt-5">
          <section>
            <Image src="/logo.png" width={180} height={38} />
          </section>
          <section>
            <Image src="/menu.png" width={67} height={38} />
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
