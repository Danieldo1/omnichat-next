'use client'

import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from "./ui/form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { addDoc, getDocs, serverTimestamp } from "firebase/firestore"
import { User, limitedMessagesRef, messagesRef } from "@/lib/converters/Message"
import { useRouter } from "next/navigation"
import { useSubscriptionStore } from "@/store/store"
import { useToast } from "./ui/use-toast"
import { ToastAction } from "./ui/toast"

const formSchema = z.object({
    input: z.string().max(1000),
})

function ChatInput({chatId}: {chatId: string}) {
const {data:session} = useSession()
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        input: '',
    },
})

const router = useRouter()
const subscription = useSubscriptionStore((state) => state.subscription)
const {toast} = useToast()

const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const inputCopy= values.input.trim()
    form.reset()
    if(inputCopy.length === 0){
        return
    }

    if(!session?.user) {
        return
    }

    const messages = (await getDocs(limitedMessagesRef(chatId))).docs.map((doc)=> doc.data()).length

    const isPro = subscription?.role === 'pro' && subscription.status === 'active'
    
    if(!isPro && messages >= 20){
        toast({
            title: 'Free chat limit reached',
            description: "You've reached your free chat message limit. Upgrade to get unlimited messages.",
            variant: 'destructive',
            action: (
                <ToastAction
                altText="Upgrade to Pro"
                onClick={() => router.push('/register')}
                >
                    Upgrade to OmniPro
                </ToastAction>
            )
        })
        return
    }


    const userToStore: User = {
        id: session.user.id!,
        name: session.user.name!,
        email: session.user.email!,
        image: session.user.image || '',
    }

    addDoc(messagesRef(chatId), {
        input: inputCopy,
        timestamp: serverTimestamp(),
        user: userToStore,
    })

    


}

  return (
    <div className="sticky bottom-0">
        <Form {...form} >
            <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex space-x-2 p-2 rounded-t-xl max-w-4xl mx-auto bg-secondary "
            >
                <FormField 
                control={form.control}
                name="input"
                render={({field}) => (
                    <FormItem className="flex-1" >
                        <FormControl>
                            <Input 
                            className="border-none bg-transparent dark:placeholder:text-white/70"
                            placeholder="Send a message in any language"
                            {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}
                />
                <Button type="submit" className="bg-violet-500 hover:bg-violet-600 text-white">
                    Send
                </Button>

            </form>
        </Form>
    </div>
  )
}

export default ChatInput


