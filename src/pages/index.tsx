import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <a href="/about">about</a>
        <a href="/main">main</a>
        <a href="/card">card</a>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link href="/about">about</Link>
        <Link href="/main">main</Link>
        <Link href="/card">card</Link>
      </div> */}
    </>
  );
}
