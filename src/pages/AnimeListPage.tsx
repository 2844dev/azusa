import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"


import { DataTable } from "@/components/anime-list/data-table.tsx";
import { columns } from "@/components/anime-list/columns.tsx";
import { AnimeItem } from "@/components/anime-list/types.tsx";

import {SearchIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export const items: AnimeItem[] = [
    {
        id: 32,
        title: "Toradora ",
        status: "Watching",
        progress: "3/25",
        score: 10,
        type: "TV",
        season: "Fall 2026",
        cover: "example"
    }
];

export function AnimeListPage() {
    return (
        <div className="w-full">
            <h1> Anime list </h1>
            <InputGroup>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                    <SearchIcon />
                </InputGroupAddon>
            </InputGroup>
            <DataTable columns={columns} data={items}></DataTable>
        </div>
    );
}