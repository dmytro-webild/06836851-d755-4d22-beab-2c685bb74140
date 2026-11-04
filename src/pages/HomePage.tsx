import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardBrand
      brand="Crowned Agency"
      description="We architect social media systems that transform purposeful content into measurable sales. Storytelling with intent, executed at the highest level."
      primaryButton={{
        text: "Start Growth",
        href: "#contact",
      }}
      secondaryButton={{
        text: "See Portfolio",
        href: "#portfolio",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/studio-lighting-isolated-white_93675-131426.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Philosophy"
      quote="In a world of noise, Crowned builds the crown. Content is not just output; it is the infrastructure for revenue."
      author="The Crowned Team"
      role="Strategic Content Partners"
      imageSrc="http://img.b2bpic.net/free-photo/black-white-minimal-portrait_23-2149152610.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesImageBento
      tag="Portfolio"
      title="Creative Excellence"
      description="A glimpse into our video storytelling and social growth systems."
      items={[
        {
          title: "Brand Cinematic",
          description: "High-impact storytelling",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-fitness-influencer_23-2151564843.jpg",
        },
        {
          title: "Reel Growth",
          description: "Viral engagement systems",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-his-mobile-phone_53876-176729.jpg",
        },
        {
          title: "Storytelling Graphic",
          description: "Purpose-driven design",
          imageSrc: "http://img.b2bpic.net/free-photo/paper-style-isolation-still-life-assortment_23-2148998859.jpg",
        },
        {
          title: "Seamless Transitions",
          description: "Fluid motion editing",
          imageSrc: "http://img.b2bpic.net/free-photo/silhouette-man-gym_23-2148024305.jpg",
        },
        {
          title: "Abstract Concepts",
          description: "Creative visual flow",
          imageSrc: "http://img.b2bpic.net/free-photo/smoke-pattern-creative-modern-graphic-design_23-2148092381.jpg",
        },
        {
          title: "Lifestyle Campaign",
          description: "Premium brand look",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-elegant-plates-table_23-2148517973.jpg",
        },
        {
          title: "Data Visualization",
          description: "Marketing metrics UI",
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-preparing-business-strategies_482257-120467.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="results" data-section="results">
    <SectionErrorBoundary name="results">
          <MetricsMediaCards
      tag="Proven Results"
      title="Data-Driven Creativity"
      description="We combine creative storytelling with rigorous funnel systems to drive real performance."
      metrics={[
        {
          value: "350%",
          title: "Revenue Increase",
          description: "Avg. boost for our funnel clients",
          imageSrc: "http://img.b2bpic.net/free-photo/analysis-innovation-opportunities-strengths-strategic_53876-14003.jpg",
        },
        {
          value: "4.2x",
          title: "Engagement Growth",
          description: "Across social channels",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-bar-graph-orange-graph-pink-background_23-2147892252.jpg",
        },
        {
          value: "24h",
          title: "Production Speed",
          description: "Average turnaround time",
          imageSrc: "http://img.b2bpic.net/free-photo/graph-growth-success-strategy-marketing-computer-concept_53876-47081.jpg",
        },
        {
          value: "98%",
          title: "Client Retention",
          description: "Long-term partnership rate",
          imageSrc: "http://img.b2bpic.net/free-photo/computer-dark-room-with-graphs-screen_169016-48771.jpg",
        },
        {
          value: "12M+",
          title: "Total Views",
          description: "Across managed platforms",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-devices-displaying-company-data_482257-119238.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Client Success"
      title="What Clients Say"
      description="We are honored to work with brands that demand creative excellence."
      testimonials={[
        {
          name: "Alex Rivet",
          role: "CEO",
          company: "Vantage",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/boudoir-portrait-asian-woman_23-2148240047.jpg",
        },
        {
          name: "Sarah Miller",
          role: "Director",
          company: "LuxBrand",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-business-coach-posing-training-room_74855-3026.jpg",
        },
        {
          name: "Jonah K.",
          role: "Founder",
          company: "Rise",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-4617.jpg",
        },
        {
          name: "Elena M.",
          role: "CMO",
          company: "Flow",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-business-office-business-center_1303-20365.jpg",
        },
        {
          name: "Marc T.",
          role: "CEO",
          company: "Sprint",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-looking-camera_23-2148112827.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trusted By"
      title="Building Industry Leaders"
      description="We've had the privilege of partnering with companies shaping their industries."
      names={[
        "Lumina",
        "Apex Labs",
        "Nova",
        "Stellar",
        "Orbit",
        "Flux",
        "Zenith",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Common Questions"
      title="Everything You Need To Know"
      description="Transparency is at the core of our partnership model."
      items={[
        {
          question: "What is the timeline for new clients?",
          answer: "We onboard and deploy custom content systems within 14 days.",
        },
        {
          question: "Do you only do video content?",
          answer: "We focus on video and storytelling-led systems (funnels, social growth, messaging).",
        },
        {
          question: "How do you measure success?",
          answer: "Through funnel conversion metrics, engagement quality, and ROAS.",
        },
      ]}
      textAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/laptop-computer-with-company-charts-screen-standing-table-startup-office-while-diverse-team-sharing-papers-with-marketing-turnover-it-multiethnic-businesspeople-analyzing-graphs_482257-37042.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Your brand deserves the Crowned treatment. Let's build your content infrastructure today."
      primaryButton={{
        text: "Schedule Strategy Call",
        href: "#",
      }}
      secondaryButton={{
        text: "View Brochure",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
