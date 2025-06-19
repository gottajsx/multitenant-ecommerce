"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Props {
    slug: string;
}

export const Navbar = ({ slug }: Props) => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.tenants.getOne.queryOptions({ slug }))

    return (
        <nav className="h-20 border-b font-medium bg-white">
            <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
                <p className="text-xl">{data.name}</p>
            </div>
        </nav>
    );
};

export const NavbarSkeleton = () => {
    return(
        <nav className="h-20 border-b font-medium bg-white">
            <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
                <div>
                    {/* TODO: Skeleton for checkout button */}
                </div>
            </div>
        </nav>
    );
};