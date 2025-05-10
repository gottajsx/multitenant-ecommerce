import { CustomCategory } from "../types";
import { SearchInput } from "./search-input";
import { Categories } from "./categories";

interface Props {
    data: CustomCategory[];
};

export const SearchFilters = ({
    data,
}: Props) => {
    return(
        <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
            <SearchInput />
            <Categories data={data} />
        </div>
    );
};