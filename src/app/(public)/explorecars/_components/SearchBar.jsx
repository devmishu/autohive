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
        <SearchField name="search" className={`className`}>
            <Label>Search</Label>
            <SearchField.Group>
                <SearchField.SearchIcon />
                <SearchField.Input
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-[280px]" placeholder="Search..." />
                <SearchField.ClearButton />
            </SearchField.Group>

            <Button
                onClick={handleSearch}
            >

                <Globe />
                Search
            </Button>
        </SearchField>
    );
}

export default SearchBar 