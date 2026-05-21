"use client"
import { Label, Button, SearchField } from "@heroui/react";
import { Globe } from "@gravity-ui/icons";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
    const [search, setSearch] = useState();
    console.log("searchhhhhhhh:", search);
    const searchParams = useSearchParams();
    const router = useRouter()

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams.toString());
        if (search) {
            params.set("searchTerm", search)
        } else {
            params.delete("searchTerm")
        }

        router.push(`explorecars?${params.toString()}`)
    }


    return (
        <SearchField name="search" className="w-full max-w-md flex flex-col gap-1.5">
           
            <Label className="text-xs font-semibold text-primary">Search Cars</Label>

           
            <div className="relative flex items-center w-full">

               
                <div className="relative flex items-center w-full">
                    
                    <span className="absolute  text-zinc-400 dark:text-zinc-500 pointer-events-none text-sm ">
                        <SearchField.SearchIcon />
                    </span>

                   
                    <SearchField.Input
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by brand, name..."
                        className="input-primary w-full pl-9 pr-24 text-sm " 
                    />

                   
                    <div className="absolute right-20 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 ">
                        <SearchField.ClearButton />
                    </div>
                </div>

               
                <button
                    onClick={handleSearch}
                    className="button-primary absolute right-1 py-1 px-3 text-xs font-medium flex items-center space-x-1 h-[calc(100%-8px)] rounded-md"
                >
                    <Globe size={13} />
                    <span>Search</span>
                </button>

            </div>
        </SearchField>
    );
}

export default SearchBar 