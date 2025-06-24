import Stripe from "stripe";

export const stripe = new Stripe(process.env.STIPE_SECRET_KEY!, {
    apiVersion: "2025-03-31.basil",
    typescript: true,
});

