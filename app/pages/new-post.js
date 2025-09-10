export default function NewPost() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>منشور جديد</h1>
      <form>
        <input type="text" placeholder="عنوان المنشور" style={{ display: 'block', marginBottom: '1rem' }} />
        <textarea placeholder="وصف المنشور" style={{ display: 'block', marginBottom: '1rem' }}></textarea>
        <input type="number" placeholder="السعر" style={{ display: 'block', marginBottom: '1rem' }} />
        <input type="file" style={{ display: 'block', marginBottom: '1rem' }} />
        <button type="submit">إضافة المنشور</button>
      </form>
    </div>
  );
}
