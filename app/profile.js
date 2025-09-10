export default function Profile() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>الملف الشخصي</h1>
      <div>
        <img src="/profile-placeholder.png" alt="صورة البروفايل" width={100} height={100} />
        <h2>اسم المستخدم</h2>
        <p>نبذة عن المستخدم...</p>
        <p>التقييم: ★★★★☆</p>
      </div>
    </div>
  );
}
