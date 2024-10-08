import React from 'react'
import Hero from './sections/Hero'
import { Border } from '../../components'
import DocumentCards from './sections/DocumentCards'

const ResourcesPage = () => {
  return (
    <main className="bg-gray-100 overflow-hidden">
      <Hero />
      <Border />
      <DocumentCards />
    </main>
  )
}

export default ResourcesPage