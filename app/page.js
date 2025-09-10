import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>مرحباً بك في مشروع المعقبين</h1>
      <nav>
        <Link href="/contact">صفحة الاتصال</Link>
      </nav>
      <p>هنا ستكون قائمة المنشورات والميزات الأساسية لاحقاً.</p>
    </div>
  );
}
