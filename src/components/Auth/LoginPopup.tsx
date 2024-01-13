/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft, ChevronLeft, Eye, EyeOff, LogIn, MoveLeft, Signpost } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import SignupPopup from "./SignupPopup";
import { Tabs } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

const LoginPopup = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; }) => {
    const [signupOpen, setSignupOpen] = useState(false);
    const [tab, setTab] = useState<'login' | 'signup' | 'forgot' | 'reset' | 'successfull_reset'>('login');
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
        setIsOpen(false);
        setSignupOpen(true);
    }

    console.log("Login : ", isOpen, signupOpen);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <Tabs value={tab}>
                    <TabsContent value="login">
                        <div className="text-[2em]  font-bold select-none text-[#2bb939] text-center">CoinCare</div>
                        <div className="text-center font-bold">Sign in to your account</div>
                        <Form {...form}>
                            <form className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel aria-required>Username<span className="text-red-600">*</span></FormLabel>
                                            <Input placeholder="Email" {...field} className="rounded-full" />
                                        </FormItem>
                                    )}>

                                </FormField>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel aria-required>Password<span className="text-red-600">*</span></FormLabel>
                                            <div className="flex items-center">
                                                <Input placeholder="Password" type={show ? 'text' : 'password'} {...field} className="rounded-full" />
                                                <span onClick={handlePasswordVisiblity} className="-ml-10">
                                                    {show ?
                                                        <EyeOff size={20} />
                                                        : <Eye size={20} />
                                                    }
                                                </span>
                                            </div>
                                        </FormItem>
                                    )}>
                                </FormField>
                            </form>
                        </Form>
                        <Button variant={'default'} className="w-full my-4 rounded-full text-white">
                            Sign in
                        </Button>

                        <div className="space-y-4">
                            <div className="text-center hover:underline hover:cursor-pointer text-primary" onClick={() => setTab('forgot')}>
                                Forgot the password?
                            </div>
                            <div className="flex">
                                <div className="w-1/2 ">
                                    <Separator />
                                </div>
                                or
                                <div className="w-1/2">
                                    <Separator />
                                </div>
                            </div>
                            <div className="text-center">
                                Don't have an account?
                                <span className="text-center hover:underline hover:cursor-pointer text-primary" onClick={() => setTab('signup')}>
                                    &nbsp; Sign up
                                </span>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="signup">
                        <div className="text-center font-bold">Sign up for free</div>
                        <Form {...form}>
                            <form className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel aria-required>Username<span className="text-red-600">*</span></FormLabel>
                                            <Input placeholder="Email" {...field} className="rounded-full" />
                                        </FormItem>
                                    )}>

                                </FormField>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel aria-required>Password<span className="text-red-600">*</span></FormLabel>
                                            <div className="flex items-center">
                                                <Input placeholder="Password" type={show ? 'text' : 'password'} {...field} className="rounded-full" />
                                                <span onClick={handlePasswordVisiblity} className="-ml-10">
                                                    {show ?
                                                        <EyeOff size={20} />
                                                        : <Eye size={20} />
                                                    }
                                                </span>
                                            </div>
                                        </FormItem>
                                    )}>
                                </FormField>
                            </form>
                        </Form>
                        <Button variant={'default'} className="w-full my-4 rounded-full text-white">
                            Sign up
                        </Button>

                        <div className="space-y-4">
                            <div className="flex">
                                <div className="w-1/2 ">
                                    <Separator />
                                </div>
                                or
                                <div className="w-1/2">
                                    <Separator />
                                </div>
                            </div>
                            <div className="text-center">
                                Already have an account?
                                <span className="text-center hover:underline hover:cursor-pointer text-primary"
                                    onClick={() => setTab('login')}
                                >
                                    &nbsp;    Sign in
                                </span>
                            </div>
                        </div>

                    </TabsContent>
                    <TabsContent value="forgot">
                        <div className="flex space-x-2 items-center hover:cursor-pointer" onClick={() => setTab('login')}>
                            <ArrowLeft />
                            <span className='text-[20px] '>Forgot Password</span>
                        </div>

                        <div className="text-[2em] py-4 font-bold select-none text-[#2bb939] text-center">CoinCare</div>
                        <div className="space-y-4">
                            <Input type="email" placeholder="Email" className="rounded-full"/>
                            <Button type="submit" variant={'default'} className="w-full text-white rounded-full" onClick={()=>setTab('reset')}>Continue</Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="reset">
                        <div className="flex space-x-2 items-center hover:cursor-pointer" onClick={() => setTab('login')}>
                            <ArrowLeft />
                            <span className='text-[20px] '>Reset Password</span>
                        </div>

                        <div className="text-[2em] py-4 font-bold select-none text-[#2bb939] text-center">CoinCare</div>
                        <div className="space-y-4">
                            <Input type="email" placeholder="New Password*" className="rounded-full" required/>
                            <Input type="email" placeholder="Confirm Password*" className="rounded-full" required/>
                            <Button type="submit" variant={'default'} className="w-full text-white rounded-full" onClick={()=>setTab('successfull_reset')}>Continue</Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="successfull_reset">
                        {/* <div className="flex space-x-2 items-center hover:cursor-pointer" onClick={() => setTab('login')}>
                            <ArrowLeft />
                            <span className='text-[20px] '></span>
                        </div> */}

                        <div className="text-[1.5em] pt-10 font-bold select-none text-[#2bb939] text-center"> Your password changed  successfully</div>
                        <div className="text-[1em]  font-normal px-20 py-2 select-none text-[#165c1d9a] text-center"> You have changed password successfully. And your old password overwrite with new one!</div>
                        <div className="space-y-4">
                            
                            <Button type="submit" variant={'default'} className="w-full text-white rounded-full" onClick={()=>{setTab('login');}}>Okk</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </DialogContent>
            {!isOpen && <SignupPopup isOpen={signupOpen} setIsOpen={setSignupOpen} />}
        </Dialog >
    )
}

export default LoginPopup;