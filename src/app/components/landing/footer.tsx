import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-48 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <div className="flex items-center space-x-4">
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                    <FacebookIcon className="h-6 w-6" />
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                    <TwitterIcon className="h-6 w-6" />
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                    <InstagramIcon className="h-6 w-6" />
                </Link>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 BloowAfrica. All rights reserved.</p>
        </footer>
    )
}