import Layout from '@/components/Layout'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Skills from '@/components/sections/Skills'
import ProofOfWork from '@/components/sections/ProofOfWork'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <ProofOfWork />
      <ContactCTA />
    </Layout>
  )
}
