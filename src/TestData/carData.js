const carData = [
  {
    id: 1,
    vin: 'KDJ00000001KE',
     images: [
      '/images/Q3/Q3.avif',
      '/images/Q3/Q32.avif',
      '/images/Q3/Q33.avif',
      '/images/Q3/Q34.avif',
      '/images/Q3/Q35.avif',

    ],
    image: '/images/Q3/Q3.avif',
    make: 'Audi',
    model: 'Q3',
    year: 2021,
    price: 7491322,
    fuelType: 'Petrol',
    engine: '2.0 L',
    gearbox: 'Automatic',
    mileage: '0 miles',
    discount: 8420,
    doors: 5,
    seats: 5,
    color: 'White',
    registration: 'MA70OXZ',
    previousOwners: 1,
    badge: 'New in stock',

   

  },
  {
    id: 2,
    vin: 'KDJ00000002KE',
    images: [
      '/images/civic/Civic.avif', 
      '/images/civic/civic2.avif',
      '/images/civic/civic3.avif',
      '/images/civic/civic4.avif',
      '/images/civic/civic5.avif',
    ],
    image: '/images/civic/Civic.avif',
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    price: 1100000,
    fuelType: 'petrol',
    engine: '1.5 L',
    gearbox: 'Automatic',
    mileage: '25 miles',
    discount: 2005,
    badge: 'New (Pre-Reg)',
  },
  {
    id: 3,
    vin: 'KDJ00000003KE',
    images: [
      '/images/corolla/cor1.avif',
      '/images/corolla/cor2.avif',
      '/images/corolla/cor3.avif',
      '/images/corolla/cor4.avif',
      '/images/corolla/cor5.avif',
      
    ],
    image: '/images/corolla/cor1.avif',
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    price: 3500000,
    fuelType: 'Petrol',
    engine: '2.0 L',
    gearbox: 'Automatic',
    mileage: '0 miles',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 4,
    vin: 'KDJ00000004KE',
    images: [
      '/images/cx-5/CX5.jpg',
      '/images/cx-5/cx1.avif',
      '/images/cx-5/cx2.avif',
      '/images/cx-5/cx3.avif',
      '/images/cx-5/cx4.avif',
    ],

    image: '/images/cx-5/CX5.jpg',
    make: 'Mazda',
    model: 'CX-5',
    year: 2021,
    price: 2800000,
    fuelType: 'Petrol',
    engine: '2.0 L',
    gearbox: 'Automatic',
    mileage: '0 miles',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 5,
    vin: 'KDJ00000005KE',
    images: [
      '/images/gr-corolla/gr1.avif',
      '/images/gr-corolla/gr2.avif',
      '/images/gr-corolla/gr3.avif',
      '/images/gr-corolla/gr4.avif',
      '/images/gr-corolla/gr5.avif',
    ],
    image: '/images/gr-corolla/gr1.avif',
    make: 'Toyota',
    model: 'GR Corolla',
    year: 2021,
    price: 5000000,
    fuelType: 'Petrol',
    engine: '1.6 L',
    gearbox: 'Automatic',
    mileage: '0 miles',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 6,
    vin: 'KDJ00000006KE',
    images: [
      '/images/landCruiser/land1.avif',
      '/images/landCruiser/land2.avif',
      '/images/landCruiser/land3.avif',
      '/images/landCruiser/land4.avif',
      '/images/landCruiser/land5.avif',
    ],

    image: '/images/landCruiser/land1.avif',
    make: 'Toyota',
    model: 'Land Cruiser',
    year: 2025,
    price: 10000000,
    fuelType: 'Petrol',
    engine: '4.0 L',
    gearbox: 'Automatic',
    mileage: '0 miles',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 7,
    vin: 'KDJ00000007KE',
    images: [
      '/images/m5/m51.avif',
      '/images/m5/m52.avif',
      '/images/m5/m53.avif',  
      '/images/m5/m54.avif',
      '/images/m5/m55.avif',
    ],

    image: '/images/m5/m51.avif',
    make: 'BMW',
    model: 'M5',
    year: 2021,
    price: 9000000,
    fuelType: 'Petrol',
    engine: '4.4L',
    gearbox: 'Automatic',
    mileage: '0 miles',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 8,
    vin: 'KDJ00000008KE',
    images: [
      '/images/mazda2/ma1.avif',
      '/images/mazda2/ma2.avif',
      '/images/mazda2/ma3.avif',
      '/images/mazda2/ma4.avif',
      '/images/mazda2/ma5.avif',
    ],

    image: '/images/mazda2/ma2.avif',
    make: 'Mazda',
    model: '2',
    year: 2019,
    price: 1100000,
    fuelType: 'Petrol',
    engine: '1.4L',
    gearbox: 'Automatic',
    mileage: '0 miles',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 9,
    vin: 'KAD12345678KE', // ✅ Real VIN from your list
    
    images: [
      '/images/Axio/ax1.jpeg',
      '/images/Axio/ax2.jpeg',
      '/images/Axio/ax3.jpeg',
      '/images/Axio/ax4.jpeg',
      '/images/Axio/ax5.jpeg',
    ],
    
    image: '/images/Axio/ax1.jpeg',
    make: 'Toyota',
    model: 'Axio',
    year: 2017,
    price: 1800000,
    fuelType: 'Petrol',
    engine: '1.5 L',
    gearbox: 'Automatic',
    mileage: '70000 km',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 10,
    vin: 'KDJ00000009KE', // ✅ Real VIN from your list
    
    images: [
      '/images/C200/c1.avif',
      '/images/C200/c2.avif',
      '/images/C200/c3.avif',
      '/images/C200/c4.avif',
      '/images/C200/c5.avif',
    ],
    
    image: '/images/C200/c1.avif',
    make: 'Mercedes-Benz',
    model: 'C200',
    year: 2021,
    price: 2000000,
    fuelType: 'Petrol',
    engine: '2.0 L',
    gearbox: 'Automatic',
    mileage: '20000 km',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 11,
    vin: 'KBX98765432KE', // ✅ Real VIN
    
    images: [
      '/images/demio/de1.avif',
      '/images/demio/de2.avif',
      '/images/demio/de3.avif',
      '/images/demio/de4.avif',
      '/images/demio/de5.avif',
    ],

    image: '/images/demio/de1.avif',
    make: 'Mazda',
    model: 'Demio',
    year: 2015,
    price: 1000000,
    fuelType: 'Petrol',
    engine: '1.2 L',
    gearbox: 'Automatic',
    mileage: '60000 km',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 12,
    vin: 'KDJ00000010KE', // ✅ Real VIN
    
    images: [
      '/images/fit/fit1.avif',
      '/images/fit/fit2.avif',
      '/images/fit/fit3.avif',
      '/images/fit/fit4.avif',
      '/images/fit/fit5.avif',
    ],

    image: '/images/fit/fit1.avif',
    make: 'Honda',
    model: 'fit',
    year: 2022,
    price: 1400000,
    fuelType: 'Petrol',
    engine: '1.2 L',
    gearbox: 'Automatic',
    mileage: '10000 km',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 13,
    vin: 'KDJ00000011KE', // ✅ Real VIN
    
    images: [
      '/images/forester/forester.avif',
      '/images/forester/fo2.avif',
      '/images/forester/f03.avif',
      '/images/forester/fo4.avif',
      '/images/forester/fo5.avif',
    ],
    
    image: '/images/forester/forester.avif',
    make: 'Subaru',
    model: '  Forester',
    year: 2022,
    price: 3000000,
    fuelType: 'Petrol',
    engine: '2.0 L',
    gearbox: 'Automatic',
    mileage: '20000 km',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 14,
    vin: 'KDJ00000012KE', // ✅ Real VIN
    
    images: [
      '/images/golf/golf1.avif',
      '/images/golf/golf2.avif',
      '/images/golf/golf3.avif',
      '/images/golf/golf4.avif',
      '/images/golf/golf5.avif',
    ],
    
    image: '/images/golf/golf1.avif',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2021,
    price: 2500000,
    fuelType: 'Petrol',
    engine: '1.2 L',
    gearbox: 'Automatic',
    mileage: '10000 km',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 15,
    vin: 'KDG11223344KE', // ✅ Real VIN
    
     images: [
      '/images/note/note1.webp',
      '/images/note/note2.webp',
      '/images/note/note3.webp',
      '/images/note/note4.webp',
      '/images/note/note5.webp',
    ],    

    image: '/images/note/note1.webp',

    make: 'Nissan',
    model: 'Note',
    year: 2019,
    price: 1100000,
    fuelType: 'Petrol',
    engine: '1.2 L',
    gearbox: 'Automatic',
    mileage: '40000 km',
    discount: 8420,
    badge: 'New in stock',
  },
  {
    id: 16,
    vin: 'KDJ00000013KE',
    
    images: [
      '/images/swift/sp1.avif',
      '/images/swift/sp2.avif',
      '/images/swift/sp3.avif',
      '/images/swift/sp4.avif',
      '/images/swift/sp5.avif',
    ],

    image: '/images/swift/sp1.avif',
    make: 'Suzuki',
    model: 'Swift Sport',
    year: 2019,
    price: 1800000,
    fuelType: 'Petrol',
    engine: '1.6 L',
    gearbox: 'Automatic',
    mileage: '20000 km',
    discount: 8420,
    badge: 'New in stock',
  },
];

export default carData;

// This file exports an array of car listings, each with details like make, model, year, price, and more.