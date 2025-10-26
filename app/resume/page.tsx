"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ResumeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('https://icy-bush-301.linkyhost.com');
  }, [router]);

  return null;
}
