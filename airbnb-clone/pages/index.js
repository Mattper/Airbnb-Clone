import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({exploreData, cardData}) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
      
      {/* Banner */}
      <Banner/>

      {/* Main */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16 '>

        {/* Explore nearby */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {/* Static rendering */}
            {exploreData?.map(({img, location, distance}) => (
              <SmallCard
              key={img}
              img={img}
              location={location}
              distance={distance}
              />
            ))}

          </div>
        </section>

        {/*Live anywhere*/}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardData?.map(({img, title}) =>(
              <MediumCard
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        {/* LargeCard */}
        <LargeCard 
          img="https://links.papareact.com/4cj"
          title='The Greatest Outdoors'
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />

      </main>

      {/* Footer */}
      <Footer/>

    </div>
  )
}

export async function getStaticProps(){
  const exploreData =await fetch('https://links.papareact.com/pyp').then(
    (res)=> res.json()
  );

  const cardData =await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  );

  return{
    props:{
      exploreData,
      cardData
    }
  }
}
