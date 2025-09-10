import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>مرحباً بك في منصة المعلقين</h1>
        <nav>
          <Link href="/login" style={{ marginRight: '1rem' }}>تسجيل الدخول</Link>
          <Link href="/signup" style={{ marginRight: '1rem' }}>تسجيل جديد</Link>
          <Link href="/profile" style={{ marginRight: '1rem' }}>الملف الشخصي</Link>
          <Link href="/new-post">منشور جديد</Link>
        </nav>
      </header>

      <main>
        <h2>آخر المنشورات</h2>
        <p>سيتم عرض المنشورات هنا بعد ربط قاعدة البيانات.</p>
      </main>
    </div>
  );
}
