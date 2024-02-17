import SignInImage from "../../public/SignIn/sideImage.png";
import tripImg from "../../public/Home/tripImg.png";
import tripImg1 from "../../public/Home/tripImg1.png";
import tripImg2 from "../../public/Home/tripImg2.png";
import tripImg3 from "../../public/Home/tripImg3.png";
import tripImg4 from "../../public/Home/tripImg4.png";
import tripImg5 from "../../public/Home/tripImg5.png";
import tripImg6 from "../../public/Home/tripImg6.png";
import tripImg7 from "../../public/Home/tripImg7.png";
import tripImg8 from "../../public/Home/tripImg8.png";
import trip1Bg from "../../public/Home/trip1bg.png";
import trip2Bg from "../../public/Home/trip2bg.png";
import review1Img from "../../public/Home/review1Img.png";
import review2Img from "../../public/Home/review2Img.png";
import review3Img from "../../public/Home/review3Img.png";
import image1 from "../../public/FindFlights/im5.png";
import image2 from "../../public/FindFlights/im6.png";
import image3 from "../../public/FindFlights/im7.png";
import image4 from "../../public/FindFlights/im8.png";
import hotel1 from "../../public/FindStays/hotel1.png";
import hotel2 from "../../public/FindStays/hotel2.png";
import hotel3 from "../../public/FindStays/hotel3.png";
import hotel4 from "../../public/FindStays/hotel4.png";
import avatar1 from "../../public/FindStays/avatar1.png";
import avatar2 from "../../public/FindStays/avatar2.png";
import avatar3 from "../../public/FindStays/avatar3.png";
import avatar4 from "../../public/FindStays/avatar4.png";
import avatar5 from "../../public/FindStays/avatar5.png";


type ImportedImage = typeof SignInImage;

// Create an array of imported images
const validImages: ImportedImage[] = [SignInImage, SignInImage];

// Convert the array of imported images into an array of strings
export const validUrls: any = validImages.map((image) => image?.src || image);

export const trips = [
  {
    id:"1",
    tripImg: tripImg,
    title: "Istanbul, Turkey",
    description: "Flights · Hotels · Resorts",
  },
  {
    id:"2",
    tripImg: tripImg1,
    title: "Sydney, Australia",
    description: "Flights · Hotels · Resorts",
  },
  {
    id:"3",
    tripImg: tripImg2,
    title: "Baku, Azerbaijan",
    description: "Flights · Hotels · Resorts",
  },
  {
    id:"4",
    tripImg: tripImg3,
    title: "Malé, Maldives",
    description: "Flights · Hotels · Resorts",
  },
  {
    id:"5",
    tripImg: tripImg4,
    title: "Paris, France",
    description: "Flights · Hotels · Resorts",
  },
  {
    id:"6",
    tripImg: tripImg5,
    title: "New York, US",
    description: "Flights · Hotels · Resorts",
  },
  {
    id:"7",
    tripImg: tripImg6,
    title: "London, UK",
    description: "Flights · Hotels · Resorts",
  },
  {
    id:"8",
    tripImg: tripImg7,
    title: "Tokyo, Japan",
    description: "Flights · Hotels · Resorts",
  },
  {
    id:"9",
    tripImg: tripImg8,
    title: "Dubai, UAE",
    description: "Flights · Hotels · Resorts",
  },
];

export const tripsDisplay = [
  {
    title: "Flights",
    description:
      "Search Flights & Places Hire to our most popular destinations",
    image: trip1Bg,
  },
  {
    title: "Hotels",
    description: "Search hotels & Places Hire to our most popular destinations",
    image: trip2Bg,
  },
];

export const reviews = [
  {
    title: "“A real sense of community, nurtured”",
    description:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
    image: review1Img,
  },
  {
    title: "“The facilities are superb. Clean, slick, bright.”",
    description:
      "“A real sense of community, nurtured”Really appreciate the help and support from the staff...",
    image: review2Img,
  },
  {
    title: "“A real sense of community, nurtured”",
    description:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
    image: review3Img,
  },
  {
    title: "“A real sense of community, nurtured”",
    description:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
    image: review1Img,
  },
];

export const cards = [
  {
    title: "Melbourne",
    description: "An amazing journey",
    imageUrl: "https://i.ibb.co/qmKcJn9/Rectangle-3.png",
    price: "700",
  },
  {
    title: "Paris",
    description: "A Paris Adventure",
    imageUrl: "https://i.ibb.co/h9TfzvF/Rectangle-4.png",
    price: "600",
  },
  {
    title: "London",
    description: "London eye adventure",
    imageUrl: "https://i.ibb.co/nntGGJf/Rectangle-5.png",
    price: "350",
  },
  {
    title: "Columbia",
    description: "Amazing streets",
    imageUrl: "https://i.ibb.co/TmWKLr4/Rectangle-6.png",
    price: "700",
  },
];

export const images = [image1, image2, image3, image4];

    

export const staysList = [
  {
    id: "4",
    hotelName: "Eresin Hotels Sultanahmet  -Boutique Class",
    image: hotel1,
    price: "241",
    rate: "4,6",
    reviewsNumber: "66",
    location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
  },
  {
    id: "4",
    hotelName: "CVK Park Bosphorus Hotel Istanbul",
    image: hotel2,
    price: "104",
    rate: "4,2",
    reviewsNumber: "34",
    location: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
  },
  {
    id: "4",
    hotelName: "Eresin Hotels Sultanahmet  -Boutique Class",
    image: hotel3,
    price: "108",
    rate: "4,1",
    reviewsNumber: "54",
    location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
  },
  {
    id: "4",
    hotelName: "Eresin Hotels Sultanahmet  -Boutique Class",
    image: hotel4,
    price: "136",
    rate: "4,9",
    reviewsNumber: "54",
    location: "Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
  },
];

export const roomsAvailibilty = [
  {
    image: hotel1,
    title: "Superior room - 1 double bed or 2 twin beds",
    price: "240",
  },
  {
    image: hotel2,
    title: "Superior room - City view  - 1 double bed or 2 twin beds",
    price: "240",
  },
  {
    image: hotel3,
    title: "Superior room - City view  - 1 double bed or 2 twin beds",
    price: "240",
  },
  {
    image: hotel4,
    title: "Superior room - City view  - 1 double bed or 2 twin beds",
    price: "240",
  },
];

export const hotelReviews =[
  {
    avatar: avatar1,
    rate:"5.0",
    name:"Omar Siphron",
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    avatar: avatar2,
    rate:"5.0",
    name:"Cristofer Botman",
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    avatar: avatar3,
    rate:"5.0",
    name:"Kaiya Lubin",
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    avatar: avatar4,
    rate:"5.0",
    name:"Erin Septimus",
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    avatar: avatar5,
    rate:"5.0",
    name:"Terry George",
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]