import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import dataEng from '@/images/dataEng.webp'
import needs from '@/images/needs.webp'
import devops from '@/images/devops.webp'


function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-back-g-high after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-back-g-high sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Understanding Your Business Needs and Defining the Strategy" image={{ src: needs }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>

          We begin by understanding your <strong className="font-semibold text-back-g-high">business goals</strong> and challenges. Through collaborative workshops and strategic planning, we create a tailored AI roadmap that aligns with your objectives, ensuring clear goals and measurable outcomes.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="Business Analysis">
          Start by gaining a deep understanding of your goals, challenges, and current business landscape.
        </ListItem>
        <ListItem title="Collaborative Workshops">
          Work closely with your team to pinpoint key opportunities for AI integration.
        </ListItem>
        <ListItem title="AI Strategy and Roadmap:">
          Based on your objectives, we define a clear AI strategy, set measurable goals, and create a detailed implementation roadmap.
        </ListItem>
      </List>

    </Section>
  )
}


function Build() {
  return (
    <Section title="Data Engineering and AI Model Development" image={{ src: dataEng, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With a focus on data, we gather and prepare high-quality data for analysis. We build efficient data pipelines and develop AI models that are specifically designed to meet your business needs, continuously refining them for optimal performance.
        </p>
      </div>

      <List className="mt-8">
        <ListItem title="Data Collection and Preparation">
          Gather, clean, and prepare data from multiple sources, ensuring it is structured for analysis and modeling.
        </ListItem>
        <ListItem title="Data Pipeline Development">
          Build scalable data pipelines to manage, process, and store your data efficiently for AI use.
        </ListItem>
        <ListItem title="AI Model Development">
          Select and train machine learning models that align with your business objectives, continuously optimizing them for better performance.
        </ListItem>
      </List>

    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deployment, Automation, and Continuous Improvement" image={{ src: devops, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the AI solution is ready, we{' '} <strong className="font-semibold text-back-g-high">
            deploy
          </strong>
          it seamlessly into your operations. Our AI-driven automation enhances efficiency, while ongoing monitoring and optimization ensure sustained performance and continued value generation.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="Deployment and Integration">
          Seamlessly integrate AI solutions into your existing workflows, ensuring smooth operation across business functions.
        </ListItem>
        <ListItem title="Process Automation">
          AI-driven automation of repetitive tasks improves efficiency and reduces errors across operations.
        </ListItem>
        <ListItem title="Performance Monitoring and Optimization">
          Continuously track AI performance, measuring its impact, and making ongoing improvements to maximize value.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Tech Stack "
        title="Our Advanced AI and Data Engineering Solutions"
      >
        <p>
          We leverage cutting-edge open-source technologies to deliver world-class AI solutions that align with your business objectives. Our approach ensures high-quality data engineering, scalable AI model development, seamless deployment, and continuous optimization.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="AI Model Development">
          TensorFlow, PyTorch, Hugging Face Transformers, MXNet
          </GridListItem>
          <GridListItem title="Data Engineering">
          Apache Airflow, Apache Kafka, dbt
          </GridListItem>
          <GridListItem title="Deployment">
          Kubernetes, Docker, TensorFlow Serving, TorchServe, Helm
          </GridListItem>
          <GridListItem title="Monitoring and Performance Optimization">
          Elasticsearch, Grafana
          </GridListItem>
          <GridListItem title="Automation & Continuous Improvement">
          Argo CD, Jenkins, CircleCI, GitLab CI/CD
          </GridListItem>
          <GridListItem title="Web development">
            Django, Nodejs, Nextjs, PostgreSQL, MongoDB
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="End-to-End Solutions for Your Business Success">
        <p>
          We provide complete, seamless technical solutions that bring your ideas to life—from initial consultation to final execution..
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
