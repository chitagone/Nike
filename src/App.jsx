import CustomerReviews from "./section/CustomerReviews";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import PopularProducts from "./section/PopularProducts";
import Servicess from "./section/Servicess";
import Subscribe from "./section/Subscribe";
import SuperQuality from "./section/SuperQuality";

function App() {
  

  return (
    <main className='relative'>
      Nav
      <section className='xl:padding-1 wide:padding-r padding-b'>
        Hero
        
      </section>

      <section className='padding'>
        PopularProducts

      </section>


      <section className='padding'>
        SuperQuality

      </section>



      <section className='padding padding-x padding-y'>
        Service

      </section>


      <section className='padding'>
        SpecialOffer

      </section>


      <section className='bg-pale-blue padding'>
        CustomerReview

      </section>


      <section className='padding-x sm:py-32 py-16 w-full'>
        Subscribe

      </section>


      <section className='padding bg-black padding-x padding-b pb-8'>
        Footer

      </section>

    </main>
  )
}

export default App
