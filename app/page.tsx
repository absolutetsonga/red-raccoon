import {
  Header,
  Hero,
  Products,
  About,
  Testimonials,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div className="min-h-[10000px] w-full flex flex-col justify-center items-center">
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between max-w-[1140px]">
        <Hero />
        <Products />
        <About />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
