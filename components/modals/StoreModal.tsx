"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { useState } from "react";
import {toast} from "react-hot-toast"

import { useStoreModal } from "@/hooks/useStoreModal"
import { Modal } from "@/components/ui/modal" 
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";


const formSchema = z.object({
    name: z.string().min(1)
}) ;
export const StoreModal = () => {


    const [loading , setLoading] = useState(false)
    const storeModal = useStoreModal()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues : {
            name : "" ,
        }   
    })
    const onSubmit = async (values :z.infer<typeof formSchema>) => {
        /// Create Store
        console.log(values)
        try {
            setLoading(true)
            const res = await axios.post('/api/stores' , values) ;
/*             console.log(res.data)
            toast.success('Store Created Succufully') */
            window.location.assign(`${res.data.id}`) ; 
        } catch (error) {
                toast.error(' something wrong Here')
        } finally { setLoading(false)}
    }
    return (
        <Modal
        title="Create Store"
        description="Add a new Store"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}>
                <div>
                    <div className="space-y-4 py-2 pb-4">
                        <Form {...form}>

                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                control={form.control}
                                render={({field})=> (
                                    <FormItem>
                                        <FormLabel >
                                            Name
                                        </FormLabel>
                                        <FormControl> 
                                            <Input disabled={loading} placeholder="Store " {...field} />
                                        </FormControl>
                                        <FormMessage >
                                        </FormMessage>
                                    </FormItem>
                                )}
                                name="name" />

                                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                    <Button variant={"outline"} 
                                    onClick={storeModal.onClose} 
                                    disabled={loading}>
                                        Cancel
                                         </Button>
                                    <Button disabled={loading} type="submit" > Add </Button>
                                </div>

                            </form>
                        </Form>
                    </div>
                </div>
        </Modal>
    )
}