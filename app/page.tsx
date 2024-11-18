import { Metadata } from 'next';
import Dashboard from '@/components/dashboard/dashboard';

export const metadata: Metadata = {
  title: 'Warehouse Management System',
  description: 'Modern warehouse management system built with Next.js',
};

export default function Home() {
  return <Dashboard />;
}