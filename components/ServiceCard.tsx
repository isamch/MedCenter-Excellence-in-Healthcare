'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'

interface ServiceCardProps {
  service: {
    id: string
    name: string
    description: string
    icon: string
    features: string[]
  }
  index: number
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as LucideIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
        <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
        {service.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ServiceCard