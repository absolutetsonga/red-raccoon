import { Header, Hero, Products, About, Testimonials, Footer } from "../components";
import Detail from "../components/Detail";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <Header />

      <Products main_page={true}/>
      <Detail/>
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
