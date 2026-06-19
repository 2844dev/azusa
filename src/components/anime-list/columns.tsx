import { ColumnDef } from "@tanstack/react-table"

import type { AnimeItem } from "./types";

export const columns: ColumnDef<AnimeItem>[] = [
    {
        accessorKey: "title",
        header: "Anime title",
    },
    {
        accessorKey: "progress",
        header: "Progress",
    },
    {
        accessorKey: "score",
        header: "Score",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "season",
        header: "Season",
    },
]