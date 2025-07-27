import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Calendar, GraduationCap, Award, Clock } from 'lucide-react'
import doctorsData from '@/data/doctors.json'
import DoctorProfileClient from './DoctorProfileClient'

export async function generateStaticParams() {
  // Importing here to avoid issues with 'use client' at the top
  const doctorsData = (await import('@/data/doctors.json')).default;
  return doctorsData.map((doctor: { id: string }) => ({ id: doctor.id }));
}

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = doctorsData.find(d => d.id === params.id)

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Doctor Not Found
          </h1>
          <Link
            href="/doctors"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Doctors
          </Link>
        </div>
      </div>
    )
  }

  return <DoctorProfileClient doctor={doctor} />
}