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
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <Header />

      <Hero />
      
      <main className="flex min-h-screen flex-col items-center justify-between w-[1140px]">
        <Products />
        <About />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
