import Layout from '@/components/Layout'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Skills from '@/components/sections/Skills'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <ContactCTA />
    </Layout>
  )
}
