import { forbidden } from "next/navigation";

interface Props {
    minPrice?: string | null;
    maxPrice?: string | null;
    onMinPriceChange: (value: string) => void;
    onMaxPriceChange: (value: string) => void;
}

export const formatAsCurrent = (value: string) => {
    const numéricValue = value.replace(/[^0-9.]/g, "");

    const parts = numéricValue.split(".");
    const formattedValue = parts[0] + (parts.length > 1 ? "." + parts[1]?.slice(0, 2) : "");

    if (!formattedValue) return "";
    
    const numberValue = parseFloat(formattedValue);
    if (isNaN(numberValue)) return "";

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(numberValue);
};