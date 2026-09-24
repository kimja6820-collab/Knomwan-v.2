# knomwan v.2 — ระบบสั่งอาหาร

## Stack
- Next.js (App Router) — **JavaScript เท่านั้น ไม่ใช้ TypeScript**
- Supabase (client อยู่ที่ `lib/supabaseClient.js`)
- Deploy บน Vercel

## Environment variables (`.env.local` และตั้งใน Vercel)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## กฎสำคัญ: Dynamic Route params
โปรเจกต์นี้ใช้ Next.js เวอร์ชันล่าสุด ซึ่ง `params` ของ Dynamic Route เป็น **Promise**
ต้อง unwrap ด้วย `use()` จาก React เสมอ เช่น

```js
"use client";
import { use } from "react";

export default function Page({ params }) {
  const { tableId } = use(params);
  // ...
}
```

## โครงสร้างตารางฐานข้อมูล (มีอยู่แล้วใน Supabase — ไม่ต้องสร้างใหม่)
ใช้ชื่อตารางและคอลัมน์ตามนี้เท่านั้นเมื่ออ้างอิงในโปรเจกต์

- `sessions` (`id`, `table_number`, `adult_count`, `child_count`, `status`, `created_at`)
- `menu_categories` (`id`, `name`, `sort_order`)
- `menu_items` (`id`, `category_id`, `name`)
- `orders` (`id`, `session_id`, `table_number`, `items` เป็น `jsonb`, `status`, `created_at`)

## หน้าที่วางแผนไว้
- `/` หน้าแรก (ทดสอบ deploy)
- `/generate-qr`
- `/kitchen`
- หน้าสั่งอาหาร (dynamic route — ขั้นตอนถัดไป)
