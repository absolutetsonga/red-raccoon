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
      <Products />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
