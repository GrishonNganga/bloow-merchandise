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

export function CategoriesCarousel() {
    const categories = [
        {
            image: "/car.jpeg",
            title: "Cars",
            overlay: "gradient-to-tr from-amber-500 to-pink-500"
        },
        {
            image: "/shrooms.jpeg",
            title: "Fashion",
            overlay: "gradient-to-br from-cyan-50 to-neutral-700"
        },
        {
            image: "/products.jpg",
            title: "Products",
            overlay: "Products"
        }
    ]
    return (
        <Carousel className="w-full">
            <CarouselContent className="">
                {categories.map((category, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                            <div className="w-full h-full aspect-video relative">
                                <Image src={category.image} width={1000} height={1000} alt={category.title} className="shadow-md"/>
                                <div className={`absolute top-0 w-full h-full opacity-40 bg-${category.overlay}`}>

                                </div>
                                <div className="absolute w-full h-full top-0 flex justify-center items-center">
                                    <div className="text-3xl lg:text-6xl font-semibold tracking-wider uppercase text-center">
                                        {category.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
