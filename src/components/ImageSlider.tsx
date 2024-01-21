import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import Image from "next/image";

 import image from "../../public/SignIn/Sign-up.png"
 import image1 from "../../public/SignIn/sideImage.png"
export default class NextJsCarousel extends Component { 
	render() { 
		return ( 
			<div> 
			<Carousel> 
				<div> 
					<Image src={image1} width={200} height={100} alt="image1"/> 
				</div> 
				<div> 
					<Image src={image1} width={200} height={100} alt="image2" /> 
				</div>  
			</Carousel> 
			</div> 
		); 
	} 
};
