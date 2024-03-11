import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DesignerOutfits
    () {
    const categories = [
        {
            image: "/designer-1.jpeg",
            title: "Strawlings",
        },
        {
            image: "/designer-2.jpeg",
            title: "Bursted",
        },
        {
            image: "/designer-3.jpeg",
            title: "The 617",
        },
        {
            image: "/designer-4.jpeg",
            title: "Straw Woman",
        }
    ]
    return (
        <div>
            <Carousel className="w-full h-full">
                <CarouselContent className="pl-2">
                    {categories.map((category, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/6">
                            <div className="p-2">
                                <div className="w-full h-full aspect-[9/16] relative">
                                    <Image src={category.image} width={1000} height={1000} alt={category.title} className="shadow-md w-full h-full object-cover" />
                                    {/* <div className="absolute top-0 w-full h-full backdrop-grayscale"></div> */}
                                </div>
                                <div className="text-lg">
                                    {category.title}
                                </div>
                                <div className="text-sm">
                                    Coming soon
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-2/6 max-h-max">
                        <div className="h-full p-2 flex flex-col justify-between">
                            <div className="text-5xl lg:text-7xl font-semibold tracking-wider uppercase grow-0">
                                Designer Outfits
                            </div>
                            <div className="grow flex items-center ">
                                Get merchandise from different designers
                            </div>
                            <div className="grow flex items-center ">
                                <Button variant={"ghost"} className="uppercase" >
                                    View All
                                </Button>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}