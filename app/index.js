import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '2rem' }}>
        <Link href="/" style={{ marginRight: '1rem' }}>الرئيسية</Link>
        <Link href="/login" style={{ marginRight: '1rem' }}>دخول</Link>
        <Link href="/signup" style={{ marginRight: '1rem' }}>تسجيل</Link>
        <Link href="/profile/1" style={{ marginRight: '1rem' }}>الملف الشخصي</Link>
        <Link href="/plans" style={{ marginRight: '1rem' }}>الباقات</Link>
        <Link href="/admin" style={{ marginRight: '1rem' }}>لوحة الإدارة</Link>
      </nav>

      {/* محتوى الصفحة */}
      <main style={{ padding: '0 2rem' }}>
        <h1>الصفحة الرئيسية</h1>
        <p>هنا سيتم عرض آخر المنشورات. هذه نسخة تجريبية قبل الربط الفعلي بالبيانات.</p>

        {/* أمثلة منشورات */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <h2>منشور تجريبي 1</h2>
            <p>وصف مختصر للمنشور...</p>
            <p>السعر: 100</p>
          </div>
          <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <h2>منشور تجريبي 2</h2>
            <p>وصف مختصر للمنشور...</p>
            <p>السعر: 250</p>
          </div>
          <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <h2>منشور تجريبي 3</h2>
            <p>وصف مختصر للمنشور...</p>
            <p>السعر: 400</p>
          </div>
        </div>
      </main>
    </div>
  )
}
