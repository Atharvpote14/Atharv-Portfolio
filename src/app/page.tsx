import Layout from '@/components/Layout'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import ResultsImpact from '@/components/sections/ResultsImpact'
import WhoIWorkWith from '@/components/sections/WhoIWorkWith'
import FeaturedProjects from '@/components/sections/FeaturedProjects'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <ResultsImpact />
      <WhoIWorkWith />
      <FeaturedProjects />
    </Layout>
  )
}
