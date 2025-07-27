"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Calendar, GraduationCap, Award, Clock } from 'lucide-react';

interface DoctorProfileClientProps {
  doctor: any;
}

export default function DoctorProfileClient({ doctor }: DoctorProfileClientProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Header */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 w-full rounded-lg overflow-hidden"
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {doctor.name}
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
                {doctor.specialty}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {doctor.bio}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">{doctor.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">{doctor.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">{doctor.education}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">{doctor.experience}</span>
                </div>
              </div>
              <Link
                href="/appointments"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Specializations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {doctor.specializations.map((spec: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                >
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 