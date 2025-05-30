import { Hero } from "../components/hero";
import { HowItWorks } from "../components/how-it-works";
import { Features } from "../components/features";
import { ForStartups } from "../components/for-startups";
import { ForStudents } from "../components/for-students";
import { Testimonials } from "../components/testimonials";
import { FAQ } from "../components/faq";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <ForStartups />
        <ForStudents />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}