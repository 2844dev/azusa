import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton, SidebarProvider,
} from "@/components/ui/sidebar";

import { Play, List, BarChart3, Search, type LucideIcon } from "lucide-react";

import { useState } from "react";

type SidebarItem = {
    title: string;
    icon: LucideIcon;
};

const items: SidebarItem[] = [
    { title: "Now playing", icon: Play },
    { title: "Anime list", icon: List },
    { title: "Statistics & history", icon: BarChart3 },
    { title: "Search", icon: Search },
];


export function AppSidebar() {

    const [activeItem, setActiveItem] = useState("Now playing");

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    {/* aquí irá el nombre/logo de Azusa */}
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    isActive={item.title === activeItem}
                                    onClick={() => setActiveItem(item.title)}
                                    className="bg-red-500 text-white"
                                >
                                    <item.icon/>
                                    <span>{item.title}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    );
}