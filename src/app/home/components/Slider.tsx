import useEmblaCarousel from "embla-carousel-react";
import { PropsWithChildren } from "react";

type Props = { options?: any } & PropsWithChildren;

const Slider = ({ children, options }: Props) => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-10">{children}</div>
    </div>
  );
};
export default Slider;
