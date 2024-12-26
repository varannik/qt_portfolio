import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import imageLaptop from '@/images/laptop.webp'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { FounderQ } from '@/components/FounderQ'


function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-back-g-high py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8 pb-5">
          <h2 className="text-center font-display text-4xl font-semibold tracking-wider text-white sm:text-left">
            Which Areas We Support
          </h2>
          <div className="h-px flex-auto bg-gray-400 " />
        </FadeIn>

        <FadeIn className="flex items-center gap-x-8">
          <blockquote className="relative font-display text-2xl font-medium tracking-tight text-white sm:text-2xl">
            <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
              At Quantical, we provide targeted support across diverse areas, ensuring businesses maximize the value of AI integration.
            </p>
          </blockquote>
        </FadeIn>


      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Why Choose Quantical?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                  <span className="absolute inset-0 rounded-3xl" />
                  {/* <Image
                    src={caseStudy.logo}
                    alt={caseStudy.client}
                    className="h-16 w-16"
                    unoptimized
                  /> */}
                </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-back-g-high">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Project</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-back-g-high">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Our mission is to revolutionize how businesses leverage AI "
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          By delivering seamless, scalable, and impactful solutions, We are committed to helping organizations unlock new opportunities, solve complex challenges, and drive growth through data-driven innovation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="AI-Driven Innovations">

              <ul className="list-disc pl-6 mt-6 text-md ">
                <li className="mb-2">Development of AI-powered products and services.</li>
                <li className="mb-2">Integration of machine learning to solve complex challenges.</li>
                <li className="mb-2">Continuous innovation to stay ahead in a competitive market.</li>
              </ul>
            </ListItem>
            <ListItem title="AI-Enhanced Business Solutions">

              <ul className="list-disc pl-6 mt-6 text-md ">
                <li className="mb-2">Automating repetitive processes to improve efficiency.</li>
                <li className="mb-2">Leveraging AI for real-time decision-making and insights.</li>
                <li className="mb-2">Implementing AI tools to optimize resource allocation and workflows.</li>
              </ul>
            </ListItem>
            <ListItem title="Sales and Marketing Excellence">

              <ul className="list-disc pl-6 mt-6 text-md ">
                <li className="mb-2">Data-driven approaches to optimize sales performance.</li>
                <li className="mb-2">Enhanced customer engagement through targeted marketing.</li>
                <li className="mb-2">Comprehensive market research to identify trends and opportunities.</li>
              </ul>
            </ListItem>
            <ListItem title="Data Science and Analytics">

              <ul className="list-disc pl-6 mt-6 text-md ">
                <li className="mb-2">Advanced analytics to extract actionable insights from data.</li>
                <li className="mb-2">Predictive modeling for smarter business strategies.</li>
                <li className="mb-2">Customized data solutions to support informed decision-making.</li>
              </ul>
            </ListItem>

          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-28 md:mt-38">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-back-g-high [text-wrap:balance] sm:text-6xl">
            Welcome to <span className='text-5xl sm:text-7xl'>Quantical</span>
            <br />Empowering Your Business with
            <br />AI Excellence
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At Quantical, we are passionate about transforming businesses by integrating cutting-edge Artificial Intelligence (AI) solutions. Whether you are looking to optimize operations, gain actionable insights, or future-proof your business processes, Quantical is your trusted partner in harnessing the power of AI.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

     


      <Services />
      <FounderQ />

      <ContactSection />
    </>
  )
}
