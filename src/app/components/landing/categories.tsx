'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ArtistDesigns from "./artist-designs";
import BloowWear from "./bloow-wear";
import DesignerOutfits from "./designer-outfits";
import DreepApparel from "./dreep-apparel";
import { useState } from "react";

export default function Categories() {
    const [value, setValue] = useState("fashion")

    return (
        <div className="mt-40 w-[90%] w-full container h-full">
            <div className="h-full flex flex-col gap-y-20">
                <Tabs defaultValue="fashion">
                    <TabsList className="lg:w-full flex justify-start lg:justify-center items-center no-scrollbar overflow-scroll">
                        <TabsTrigger onClick={() => { setValue("fashion") }} value="fashion" className={`${value === "fashion" ? "text-2xl" : "text-lg"} uppercase tracking-wider flex-none`}>Fashion</TabsTrigger>
                        <TabsTrigger onClick={() => { setValue("events") }} value="events" className={`${value === "events" ? "text-2xl" : "text-lg"} uppercase tracking-wider flex-none`}>Events</TabsTrigger>
                        <TabsTrigger onClick={() => { setValue("products") }} value="products" className={`${value === "products" ? "text-2xl" : "text-lg"} uppercase tracking-wider flex-none`}>Products</TabsTrigger>
                        <TabsTrigger onClick={() => { setValue("services") }} value="services" className={`${value === "services" ? "text-2xl" : "text-lg"} uppercase tracking-wider flex-none`}>Services</TabsTrigger>
                        <TabsTrigger onClick={() => { setValue("vehicles") }} value="vehicles" className={`${value === "vehicles" ? "text-2xl" : "text-lg"} uppercase tracking-wider flex-none`}>Vehicles</TabsTrigger>
                        <TabsTrigger onClick={() => { setValue("venues") }} value="venues" className={`${value === "venues" ? "text-2xl" : "text-lg"} uppercase tracking-wider flex-none`}>Venues</TabsTrigger>
                        <TabsTrigger onClick={() => { setValue("nfts") }} value="nfts" className={`${value === "nfts" ? "text-2xl" : "text-lg"} uppercase tracking-wider flex-none`}>Nfts</TabsTrigger>

                    </TabsList>
                    <TabsContent value="fashion" className="pt-20 flex flex-col gap-y-20">
                        <DreepApparel />
                        <BloowWear />
                        <ArtistDesigns />
                        <DesignerOutfits />
                    </TabsContent>
                    <TabsContent value="events">

                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}