
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {api} from "@/lib/api"
import { useRouter } from "next/navigation"
const FormSchema = z.object({
    name: z.string().min(1,"Username must be mandatory."),
    email:z.string().email("Digite um email valido").min(1,'O email é obrigatorio'),
    phone:z.string().refine((value)=> {
        return  /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) || /^\d{2}\s\d{9}$/.test(value) || /^\d{13}$/.test(value)
    }, {
        message: "O numero de telefone deve estar (DD) 999999999"
    }),
    address:z.string(),
})


export function InputForm({userId}: {userId: string}) {
    const { toast } = useToast()
    const rout = useRouter()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            phone:"",
            email:"",
            address:""
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "cliente criado com sucesso",
            description: ` oii`,
        })

        
        const response = await api.post("/api/cliente", {
            name:data.name,
            phone:data.phone,
            address:data.address,
            email:data.email,
            userId: userId
        })
        rout.replace("/dashboard/costumer")
        console.log(response.data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Endereço<output></output></FormLabel>
                            <FormControl>
                                <Input placeholder="Endereço" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>telefone</FormLabel>
                            <FormControl>
                                <Input placeholder="Telefone" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="" type="submit">Submit</Button>
            </form>
        </Form>
    )
}



