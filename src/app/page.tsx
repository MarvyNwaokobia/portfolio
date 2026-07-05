import { SlideProvider } from "@/components/SlideContext";
import SlideLayout from "@/components/SlideLayout";
import Nav from "@/components/Nav";
import SlideHome from "@/components/slides/SlideHome";
import SlideProjects from "@/components/slides/SlideProjects";
import SlideToolbox from "@/components/slides/SlideToolbox";
import SlideContact from "@/components/slides/SlideContact";
import MotionProvider from "@/components/MotionProvider";

const LABELS = ["Home", "Privacy", "Payments", "Apps", "Toolbox", "Contact"];

export default function Home() {
  return (
    <MotionProvider>
      <SlideProvider total={LABELS.length}>
        <div className="flex h-dvh flex-col">
          <Nav />
          <main className="min-h-0 flex-1">
            <SlideLayout labels={LABELS}>
              <SlideHome />
              <SlideProjects
                category="Privacy & Cryptography"
                subtitle="ZK Proofs & Privacy Systems"
                description="Protocols that keep data private without sacrificing verifiability — from Groth16 ZK circuits to fully homomorphic payroll."
                slideNumber="02"
              />
              <SlideProjects
                category="Payments & Financial Infra"
                subtitle="Open Payments & DeFi Rails"
                description="Open, programmable financial infrastructure for cross-border and on-chain payments — built for real-world settlement."
                slideNumber="03"
              />
              <SlideProjects
                category="Apps & Systems"
                subtitle="Applications & Systems Engineering"
                description="Full-stack applications and low-level systems built end-to-end — from CLI tools to on-chain games."
                slideNumber="04"
              />
              <SlideToolbox />
              <SlideContact />
            </SlideLayout>
          </main>
        </div>
      </SlideProvider>
    </MotionProvider>
  );
}
