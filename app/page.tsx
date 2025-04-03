import { Hero } from "@/components";
import Image from "next/image";
import { SearchBar } from "@/components";
import { CustomFilter } from "@/components";
import  CarList  from "@/components/CarList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main>
        <Hero />
        
        <div className="mt-12 padding-x padding-y
        max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl
            fot-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>

          <div className="home__filters">
            <SearchBar />

            <div
            className="home__filter-container">
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
              </div> 

          </div>
          <CarList />
        </div>
      </main>
    </div>
  );
}
