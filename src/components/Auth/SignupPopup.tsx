/* eslint-disable react/no-unescaped-entities */
import { Dialog, DialogContent } from "../ui/dialog"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import LoginPopup from './LoginPopup';

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

const SignupPopup = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; }) => {
    const [show, setShow] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })


    const handlePasswordVisiblity = () => {
        setShow(!show)
    }

    const handleOpen = () => {
        setIsOpen(true);
    }


    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <div className="text-[2em]  font-bold select-none text-[#2bb939] text-center">CoinCare</div>
                {<LoginPopup isOpen={!isOpen} setIsOpen={setIsOpen} />}
            </DialogContent>
        </Dialog>

    )
}

export default SignupPopup;