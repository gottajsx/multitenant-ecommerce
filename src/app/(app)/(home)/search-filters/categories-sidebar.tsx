"use client";

import { useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CustomCategory } from "../types";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Categories } from "./categories";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data: CustomCategory[];
};

export const CategoriesSidebar = ({
    open,
    onOpenChange,
    data
}: Props) => {
    const [parentCategories, setParentCategories] = useState<CustomCategory[] | null>(null);
    const [selectedCategoriy, setSelectedCategpory] = useState<CustomCategory| null>(null);

    // If we have parent categories, show those, otherwise show root categories
    const currentCategories = parentCategories ?? data ?? [];


    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="left"
                className="p-0 transition-none"
                style={{ backgroundColor: "white"}}
            >
                <SheetHeader className="p-4 border-b">
                    <SheetTitle>
                        Categories
                    </SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {parentCategories && (
                        <button
                            onClick={() => {}}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium cursor-pointer"
                        >
                            <ChevronLeftIcon className="size-4 mr-2" />
                            Back
                        </button>
                    )}
                    {currentCategories.map((category) => (
                        <button
                            key={category.slug}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center text-base font-medium cursor-pointer"
                        >
                            {category.name}
                            {category.subcategories && category.subcategories.length > 0 && (
                                <ChevronRightIcon className="size-4"/>
                            )}
                        </button>
                    ))}
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};