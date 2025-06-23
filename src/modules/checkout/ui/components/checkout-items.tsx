import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";


interface CheckoutItemProps {
    isLast?: boolean,
    imageUrl?: string | null;
    name: string;
    productUrl: string;
    tenantUrl: string;
    tenantName: string;
    id: string;
    price: number;
    onRemove: () => void;
}

export const CheckoutItem = ({
    isLast,
    imageUrl,
    name,
    productUrl,
    tenantUrl,
    tenantName,
    id,
    price,
    onRemove
}: CheckoutItemProps ) => {
    return(
        <div>
            
        </div>
    )
};