import SignInImage from "../../public/SignIn/sideImage.png";

type ImportedImage = typeof SignInImage;

// Create an array of imported images
const validImages: ImportedImage[] = [SignInImage, SignInImage];

// Convert the array of imported images into an array of strings
export const validUrls: any = validImages.map(image => image?.src || image);