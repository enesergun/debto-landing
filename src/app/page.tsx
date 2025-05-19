'use client';
import { useTranslation } from 'react-i18next';
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container className="mt-14">
        <Benefits />

        {/* <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section> */}

        <Section
          id="testimonials"
          title={t('testimonialsSection.title')}
          description={t('testimonialsSection.description')}
        >
          <Testimonials />
        </Section>

        <FAQ />

        {/* <Stats /> */}

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
