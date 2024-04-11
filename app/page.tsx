import { TestimonialsSection } from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-light-grayish-blue md:p-24 p-5 ">
      <TestimonialsSection />
    </main>
  );
}
