// src/app/page.tsx (if you keep it)
import { redirect } from 'next/navigation';

// Redirect root to client section
export default function RootPage() {
  redirect('/');
}
