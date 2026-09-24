import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>knomwan v.2</h1>
      <p>Deploy สำเร็จแล้ว ✅</p>
      <ul>
        <li>
          <Link href="/generate-qr">/generate-qr</Link>
        </li>
        <li>
          <Link href="/kitchen">/kitchen</Link>
        </li>
      </ul>
    </main>
  );
}
