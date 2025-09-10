import Link from 'next/link';

export default function Login() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>تسجيل الدخول</h1>
      <form>
        <input type="text" placeholder="الإيميل أو الجوال" style={{ display: 'block', marginBottom: '1rem' }} />
        <input type="password" placeholder="كلمة المرور" style={{ display: 'block', marginBottom: '1rem' }} />
        <button type="submit">دخول</button>
      </form>
      <p>
        لا تملك حساب؟ <Link href="/signup">سجّل الآن</Link>
      </p>
    </div>
  );
}
