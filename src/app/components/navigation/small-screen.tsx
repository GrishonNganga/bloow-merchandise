import Image from "next/image";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { AlignRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { links } from ".";
import { ModeToggle } from "../utils/theme-toggle";

export default function SmallScreenNav({ }) {
    return (
        <div className="flex lg:hidden w-full justify-between items-center relative pt-5">
            <div className="-ml-5">
                <Link href={"/"}>
                    <Image src={"/bloow.svg"} width={100} height={100} alt="Barter logo" className="w-24" />
                </Link>
            </div>
            <div className="flex gap-x-4">
                <ModeToggle />
                <Popover>
                    <PopoverTrigger >
                        <AlignRightIcon />
                    </PopoverTrigger>
                    <PopoverContent side="bottom" align="start" className="w-[90dvw] mr-4 rounded-none flex flex-col gap-y-3" hideWhenDetached>
                        <div className="flex flex-col items-center divide-y w-full">
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
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

        </div>
    )
}