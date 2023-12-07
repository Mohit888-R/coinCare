import { Bell, Bookmark, LogIn, User } from "lucide-react";
import SearchBar from "./SearchBar";
import Login from "../Auth/LoginPopup";
import LoginPopup from "../Auth/LoginPopup";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex py-2 items-center">
            {/* logo */}
            <div className="text-[2em]  font-bold select-none text-[#2bb939] ml-12">CoinCare</div>
            <SearchBar />
            <div className="flex  w-2/12 justify-evenly text-primary">
                <Bell size={32} className="drop-shadow-xl active:scale-105 " />
                <Bookmark size={32} className="drop-shadow-xl active:scale-105" />
                {/* <LogIn size={32} className="drop-shadow-xl active:scale-105" /> */}
                <LogIn size={32} className="drop-shadow-xl active:scale-105" onClick={() => setIsOpen(true)} />
                {/* <User size={32} className="drop-shadow-xl active:scale-105"/> */}

                {<LoginPopup isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
        </div>
    )
}

export default Navbar;