'use client'
import { Button } from "@/components/ui/button";
import Nav from "../navigation/landing-nav";
import Image from "next/image";
import { CategoriesCarousel } from "./categories-carousel";

export default function HeroSection() {

    return (
        <div className="h-dvh w-full relative">
            <div className="absolute bg-[url('/smoky.jpeg')] bg-cover bg-center w-full h-3/4 top-28"></div>
            <div className="absolute top-28 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-b from-transparent to-white to-70% dark:to-primary"></div>
            <div className="absolute w-full h-full flex flex-col items-center justify-center bg-transparent">
                <div className="text-3xl lg:text-4xl tracking-wider uppercase text-center">
                    Welcome to the
                </div>
                <div className="text-5xl lg:text-6xl font-semibold tracking-wider uppercase text-center">
                    Bloow store
                </div>
            </div>
            <div className="absolute bottom-0 h-[25%] w-full flex justify-center">
                <div className="w-[90%] w-full container">
                    <CategoriesCarousel />
                </div>
            </div>
            <div className="w-full h-dvh flex flex-col container">
                <Nav />
            </div>
        </div>
    )
}