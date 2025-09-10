import Link from 'next/link';

export default function Signup() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>تسجيل جديد</h1>
      <form>
        <input type="text" placeholder="اسم المستخدم" style={{ display: 'block', marginBottom: '1rem' }} />
        <input type="email" placeholder="الإيميل" style={{ display: 'block', marginBottom: '1rem' }} />
        <input type="text" placeholder="الجوال" style={{ display: 'block', marginBottom: '1rem' }} />
        <input type="password" placeholder="كلمة المرور" style={{ display: 'block', marginBottom: '1rem' }} />
        <select style={{ display: 'block', marginBottom: '1rem' }}>
          <option value="">اختر نوع الحساب</option>
          <option value="agent">معقب</option>
          <option value="visitor">زائر</option>
        </select>
        <button type="submit">تسجيل</button>
      </form>
      <p>
        لديك حساب؟ <Link href="/login">تسجيل الدخول</Link>
      </p>
    </div>
  );
}
