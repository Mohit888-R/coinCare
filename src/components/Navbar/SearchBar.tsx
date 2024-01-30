import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchBar = () => {
    return (
        <div className="w-4/12 m-auto  items-center flex">
            <Input placeholder="Search by category or keyword" className="rounded-full border-primary"/>
            <Search size={32} className="-ml-12 hover:bg-gray-100 rounded-full hover:shadow-lg text-primary" />
        </div>
    )
}

export default SearchBar;