"use client";
import Image from "next/image";

interface Car {
  id: number;
  name: string;
  image: string;
  price: string;
  fuel: string;
  year: number;
}

const carsData: Car[] = [
  {
    id: 1,
    name: "Toyota Corolla",
    image: "/cars/toyota-corolla.jpg",
    price: "$20,000",
    fuel: "Petrol",
    year: 2022,
  },
  {
    id: 2,
    name: "Honda Civic",
    image: "/cars/honda-civic.jpg",
    price: "$22,500",
    fuel: "Hybrid",
    year: 2023,
  },
  {
    id: 3,
    name: "Tesla Model 3",
    image: "/cars/tesla-model-3.jpg",
    price: "$40,000",
    fuel: "Electric",
    year: 2024,
  },
];

const CarList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
      {carsData.map((car) => (
        <div
          key={car.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden p-4"
        >
          <Image
            src={car.image}
            alt={car.name}
            width={300}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{car.name}</h2>
            <p className="text-gray-600">{car.year} | {car.fuel}</p>
            <p className="text-blue-600 font-semibold">{car.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
