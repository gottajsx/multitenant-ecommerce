import { getPayload } from "payload";
import configPromise from "@payload-config"

import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";


export const categoriesRouter = createTRPCRouter({
    getMany: baseProcedure.query(async({ ctx }) => {
        const data = await ctx.db.find({
            collection: "categories",
            depth: 1, // Populate subcategories
            pagination: false,
            where: {
                parent: {
                    exists: false,
                },
            },
            sort: "name"
        });

        const formattedData = data.docs.map((doc) => ({
            ...doc,
            subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
                // because of 'depth:1'; we are "confident" doc will be of type "Category"
                ...(doc as Category),
            }))
        }));

        return formattedData;
    }),
});