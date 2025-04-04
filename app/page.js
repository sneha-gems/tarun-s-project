import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <nav className="flex justify-between items-center px-[100px] py-[32px]">
          <section>
            <Image src="/logo.png" width={180} height={38} />
          </section>
          <section>
            <Image src="/menu.png" width={67} height={38} />
          </section>
        </nav>
        <div className="container">
        <h1 className="font-rigid text-4xl">Rigid Square in Action</h1>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Footer
      </footer> */}
    </div>
  );
}
