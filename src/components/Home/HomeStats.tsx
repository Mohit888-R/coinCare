import { HomeStatsData } from "@/lib/utils/constant";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const HomeStats = () => {
    return (
        <div className="container gap-12 select-none flex w-full mt-20">
            {HomeStatsData.map((item, index) => (
                <div key={index} className="w-4/12 bg-red-200 rounded-md  py-4 pb-12   text-center">
                    <Link href={item.url} className="flex justify-end "> <ArrowUpRight className="w-12 h-12  text-red-600" /> </Link>
                    <div className="transition hover:-translate-y-3 hover:transform-gpu hover:duration-500 hover:ease-in-out   "> <div className="text-[4rem] font-semibold text-red-600 "> {item?.totalCount} </div>
                        <div className="text-red-600 text-[1.5rem] "> {item?.title} </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeStats;