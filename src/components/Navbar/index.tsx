import { Bell, Bookmark, LogIn, SearchIcon, User } from "lucide-react";
import SearchBar from "./SearchBar";
import Login from "../Auth/LoginPopup";
import LoginPopup from "../Auth/LoginPopup";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" border-b border-gray-500  bg-black shadow-md text-white">
            {/* logo */}
            <div className="flex items-center justify-between w-11/12 m-auto">
                <div className="flex items-center gap-4 py-8">
                    <Image src="/assets/coincare_logo.png" width={100} height={100} alt="coincare_logo" />
                    <span className="text-[2em]  font-bold select-none uppercase ">CoinCare</span>
                </div>

                {/* <SearchBar /> */}
                <div className="py-8">
                    <Button className=" mx-4 uppercase border border-black text-[20px] font-medium">
                        About Us
                    </Button>
                    <Button className=" mx-4 uppercase border border-black text-[20px] font-medium">
                        Charity List
                    </Button>
                    <Button className="border border-black mx-4 uppercase text-[20px] font-medium">
                        Sign In
                    </Button>
                </div>
                <div className="flex items-center w-2/12 justify-between">
                    <Button variant={'default'} className="border h-[3.5rem] w-36 border-black bg-red-600 uppercase text-[16px] font-medium">
                        Donate
                    </Button>
                    <Button variant={'default'}>
                        <SearchIcon className="text-red-500 w-12 h-8 rotate-90"/>
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Navbar;