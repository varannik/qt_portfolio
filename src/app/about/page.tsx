import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-back-g-high py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}



export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Empowering Businesses with Data-Driven Solutions and AI Innovation',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Empowering Businesses with Data-Driven Solutions and AI Innovation">
        <p>
          At Quantical, we specialize in leveraging cutting-edge data science and AI technologies to deliver impactful solutions that drive business growth and efficiency.</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Our team combines deep expertise in machine learning, data engineering, and business intelligence to help companies navigate complex challenges and unlock the full potential of their data.
            We take pride in delivering end-to-end solutions, from data collection and cleaning to advanced model development and insightful visualizations. Our work is grounded in real-world business problems, ensuring our solutions are both practical and impactful.

            We start by understanding your unique needs and challenges, then we design and implement custom solutions that align with your objectives. Whether it's predicting exchange rates, optimizing supply chains, or analyzing competitor pricing, we build models and systems that provide actionable insights and enhance decision-making.
          </p>
          <p>
            We are committed to helping businesses stay ahead of the curve by providing the tools and insights they need to adapt to an ever-changing market. Our solutions are designed to integrate seamlessly with your existing systems, driving both short-term results and long-term value.

            Let us help you transform your data into actionable insights that drive growth and operational excellence.
          </p>
        </div>
      </PageIntro>

      <ContactSection />
    </>
  )
}
