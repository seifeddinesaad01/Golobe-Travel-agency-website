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

type ImportedImage = typeof SignInImage;

// Create an array of imported images
const validImages: ImportedImage[] = [SignInImage, SignInImage];

// Convert the array of imported images into an array of strings
export const validUrls: any = validImages.map((image) => image?.src || image);

export const trips = [
  {
    tripImg: tripImg,
    title: "Istanbul, Turkey",
    description: "Flights · Hotels · Resorts",
  },
  {
    tripImg: tripImg1,
    title: "Sydney, Australia",
    description: "Flights · Hotels · Resorts",
  },
  {
    tripImg: tripImg2,
    title: "Baku, Azerbaijan",
    description: "Flights · Hotels · Resorts",
  },
  {
    tripImg: tripImg3,
    title: "Malé, Maldives",
    description: "Flights · Hotels · Resorts",
  },
  {
    tripImg: tripImg4,
    title: "Paris, France",
    description: "Flights · Hotels · Resorts",
  },
  {
    tripImg: tripImg5,
    title: "New York, US",
    description: "Flights · Hotels · Resorts",
  },
  {
    tripImg: tripImg6,
    title: "London, UK",
    description: "Flights · Hotels · Resorts",
  },
  {
    tripImg: tripImg7,
    title: "Tokyo, Japan",
    description: "Flights · Hotels · Resorts",
  },
  {
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
