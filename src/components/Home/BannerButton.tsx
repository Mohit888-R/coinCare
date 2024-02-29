import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";

const BannerButton = ()=>{
    return (
        <div className="flex justify-between items-center container py-20">
        <div className="text-white gap-4 flex ">
            <Button variant={'default'} className="bg-white h-[3.5rem] w-36  text-black hover:bg-white transition duration-150  uppercase text-[16px] font-medium">Fundraise</Button>
            <Button variant={'outline'} className="border h-[3.5rem] w-36 border-white text-white hover:text-white  uppercase text-[16px] font-medium">Donate</Button>
</div>
<ArrowDown className="text-white w-12 h-10"/>
        </div>
    )
}


export default BannerButton;