'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

interface DoctorCardProps {
  doctor: {
    id: string
    name: string
    specialty: string
    image: string
    bio: string
    phone: string
    email: string
  }
  index: number
}

const DoctorCard = ({ doctor, index }: DoctorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 w-full">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {doctor.name}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
          {doctor.specialty}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {doctor.bio}
        </p>
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Phone className="h-4 w-4 mr-2" />
            {doctor.phone}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Mail className="h-4 w-4 mr-2" />
            {doctor.email}
          </div>
        </div>
        <Link
          href={`/doctors/${doctor.id}`}
          className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  )
}

export default DoctorCard