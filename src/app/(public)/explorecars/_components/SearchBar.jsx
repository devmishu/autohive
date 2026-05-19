import { Label, Button, SearchField } from "@heroui/react";
import { Globe} from "@gravity-ui/icons";

const SearchBar = ({className}) => {
    return (
        <SearchField name="search" className={`className`}>
            <Label>Search</Label>
            <SearchField.Group>
                <SearchField.SearchIcon />
                <SearchField.Input className="w-[280px]" placeholder="Search..." />
                <SearchField.ClearButton />
            </SearchField.Group>
            <Button>
                <Globe />
                Search
            </Button>
        </SearchField>
    );
}

export default SearchBar 