import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../../assets/images/banner/banner-1.jpg"
import img2 from "../../assets/images/banner/banner-2.jpg"
import img3 from "../../assets/images/banner/banner-3.jpg"

const Banner = () => {
    return (
        <Carousel className="h-screen w-full ">
            <div className="relative h-full w-full">
                <img
                    src={img1}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Find your <br />
                            <span className="text-pink-400"> Right Match</span> here
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Most trusted Matrimony Brand in the World.
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="pink">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={img2}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Find your <br />
                            <span className="text-pink-400"> Right Match</span> here
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Most trusted Matrimony Brand in the World.
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="pink">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={img3}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Find your <br />
                            <span className="text-pink-400"> Right Match</span> here
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Most trusted Matrimony Brand in the World.
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="pink">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;