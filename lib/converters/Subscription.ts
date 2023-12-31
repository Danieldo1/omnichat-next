
import { db } from "@/firebase";
import { Subscription } from "@/types/Subscription";
import {DocumentData, FirestoreDataConverter,QueryDocumentSnapshot, SnapshotOptions, collection} from 'firebase/firestore'

const subscriptionConverter:FirestoreDataConverter<Subscription> = {
    toFirestore: function (subscription: Subscription): DocumentData {
        return {
            ...subscription
        }
    },

    fromFirestore: function (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Subscription {
        const data = snapshot.data(options)
        const sub: Subscription = {
            id: snapshot.id,
            cancel_at_period_end: data.cancel_at_period_end,
            created: data.created,
            current_period_end: data.current_period_end,
            current_period_start: data.current_period_start,
            ended_at: data.ended_at,
            metadata: data.metadata,
            product: data.product,
            quantity: data.quantity,
            status: data.status,
            stripeLink: data.stripeLink,
            canceled_at: data.canceled_at,
            cancel_at: data.cancel_at,
            trial_start: data.trial_start,
            trial_end: data.trial_end,
            price: data.price,
            items: data.items,
            prices: data.prices,
            role: data.role,
            payment_method: data.payment_method,
            latest_invoice: data.latest_invoice,
        }
        return sub
    }
}

export const subscriptionRef = (userId: string) => collection(db, 'customers', userId, 'subscriptions').withConverter(subscriptionConverter)