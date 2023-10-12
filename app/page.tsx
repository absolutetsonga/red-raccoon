import {
  Header,
  Hero,
  Products,
  About,
  Testimonials,
  Footer,
} from "./components";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <Header />

      <Hero />
      <Products main_page={false} />
      <About />
      <Testimonials />
      <Contacts />

      <Footer />
    </div>
  );
}
