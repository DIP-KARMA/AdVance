import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function TestDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Set up test user credentials in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({
      name: 'Test User',
      email: 'test@advance.ai',
      role: 'Premium User',
      avatar: '/avatar.png'
    }));
    
    // Redirect to dashboard
    router.push('/dashboard');
  }, [router]);

  return (
    <>
      <Head>
        <title>Redirecting to Dashboard | AdVance</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#BB86FC]"></div>
        <p className="text-white mt-4">Setting up test account and redirecting to dashboard...</p>
      </div>
    </>
  );
}
