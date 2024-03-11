import Image from "next/image";
import { Button } from "@/components/ui/button";
import { links } from ".";
import Link from "next/link";
import { ModeToggle } from "../utils/theme-toggle";

export default function LargeScreenNav({ }) {
    return (
        <div className="hidden lg:flex w-full justify-between items-center pt-5">
            <div>
                <Image src={"/bloow.svg"} width={100} height={100} alt="Barter logo" className="w-30" />
            </div>
            <div className="flex gap-x-2 items-center">
                {
                    links.map((link, idx) => {
                        return (
                            <Link key={idx} href={link.url} className="py-3 w-full">
                                <Button variant={"ghost"} className="w-full">
                                    {link.name}
                                </Button>
                            </Link>
                        )
                    })
                }
                <div>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}