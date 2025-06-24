import z from "zod";

import { Media, Tenant } from "@/payload-types";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";


export const checkoutRouter = createTRPCRouter({
    purchase: protectedProcedure
        .input(
            z.object({
                productIds: z.array(z.string()).min(1),
                tenantSlug: z.string().min(1),
            })
        )
        .mutation(async({ ctx, input}) => {
            const products = await ctx.db.find({
                collection: "products",
                depth: 3,
                where: {
                    and: [
                        {
                            id: {
                                in: input.productIds,
                            }
                        },
                        {
                            "tenant.slug": {
                                equals: input.tenantSlug,
                            }
                        }
                    ]
                }
            })
})
    ,
    getProducts: baseProcedure
        .input(
            z.object({
                ids: z.array(z.string()),
            })
        )
        .query(async({ ctx, input }) => {
            const data = await ctx.db.find({
                collection: "products",
                depth: 2, // Populate "category", "image", "tenant" & "tenant.image"
                where: {
                    id: {
                        in: input.ids,
                    },
                },
            });

            if (data.totalDocs !== input.ids.length) {
                throw new TRPCError({ code: "NOT_FOUND", message: "Product not found" })
            }

            const totalPrice = data.docs.reduce((acc, product) => {
                const price = Number(product.price);
                return acc + (isNaN(price) ? 0 : price);
            }, 0);

            return {
                ...data,
                totalPrice: totalPrice,
                docs: data.docs.map((doc) => ({
                    ...doc,
                    image: doc.image as Media | null,
                    tenant: doc.tenant as Tenant & { image: Media | null },
                }))
            };
        }),
});