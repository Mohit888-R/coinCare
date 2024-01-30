import { Bell, Bookmark, LogIn, User } from "lucide-react";
import SearchBar from "./SearchBar";
import Login from "../Auth/LoginPopup";
import LoginPopup from "../Auth/LoginPopup";
import { useState } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" border-b shadow-md py-2">
            {/* logo */}
            <div className="flex items-center justify-between container ">
                <div className="text-[2em]  font-bold select-none  ml-12">CoinCare</div>
                {/* <SearchBar /> */}
                <div>
                    <Button className=" mx-8 border border-black text-[20px] font-medium">
                        Charity List
                    </Button>
                    <Button variant={'default'} className="border border-black  text-[20px] font-medium">
                        Donate
                    </Button>
                    <Button className="border border-black mx-8 text-[20px] font-medium">
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;