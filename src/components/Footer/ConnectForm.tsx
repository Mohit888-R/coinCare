import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 3 characters.",
  }),
})

function ConnectForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: ''
    }
  });

  return (
    <div className='bg-white text-black pl-8 pb-8 '>
      <div className='w-10/12 m-auto'>
        <div className='uppercase text-[24px] font-bold pt-8'>Connect With Us</div>
        <div className='uppercase text-[20px] font-light mb-8'>Sign up to our Newsletter</div>
        <Form {...form}>
          <form className=''>
            <div className=' space-y-4 border p-4 mb-2 '>
              <FormField name='firstName' render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name <span className='text-red-400'>*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter first name" className='placeholder-gray-500  placeholder-opacity-75 w-4/12' required  {...field} />
                  </FormControl>
                </FormItem>

              )} />
              <FormField name='lastName'  render={({ field }) => (
                <FormItem >
                  <FormLabel>Last Name <span className='text-red-400'>*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter last name" className='placeholder-gray-500  placeholder-opacity-75 w-4/12' required  {...field} />
                  </FormControl>
                </FormItem>

              )} />
              <FormField name='email' render={({ field }) => (
                <FormItem>
                  <FormLabel>Email <span className='text-red-400'>*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Email" className='placeholder-gray-500  placeholder-opacity-75 w-4/12' required  {...field} />
                  </FormControl>
                </FormItem>

              )} />
            </div>

            <Button type='submit' variant={'secondary'} className=' bg-red-500 hover:bg-red-400 text-white  w-30 mt-4 flex m-auto w-2/12 '>Subscribe</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ConnectForm
