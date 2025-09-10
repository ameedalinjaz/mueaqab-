"use client";

import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("جاري الإرسال...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("تم الإرسال بنجاح ✅");
        setEmail("");
        setMessage("");
      } else {
        setStatus("حدث خطأ ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("حدث خطأ ❌");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>صفحة الاتصال</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", marginBottom: "1rem" }}
        />
        <textarea
          placeholder="رسالتك"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ display: "block", marginBottom: "1rem" }}
        />
        <button type="submit">إرسال</button>
      </form>
      <p>{status}</p>
    </div>
  );
}
