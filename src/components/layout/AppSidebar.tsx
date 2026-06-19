import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton, SidebarFooter, SidebarTrigger,
} from "@/components/ui/sidebar";

import {Avatar, AvatarBadge, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

import {Play, List, BarChart3, Search, Check, CloudSync, type LucideIcon, Settings} from "lucide-react";

import { useState } from "react";
import {Button} from "@/components/ui/button.tsx";
import logoFull from "@/assets/logo/logo-full.svg";
import logoIcon from "@/assets/logo/logo-icon.svg";

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
        <Sidebar collapsible="icon">
            <SidebarHeader className="group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:px-0 px-3">

                <div className="flex flex-row items-center justify-between group-data-[collapsible=icon]:hidden">
                    <img src={logoFull} className="h-6 max-h-6 justify-start" alt="Azusa" />
                    <SidebarTrigger />
                </div>
                <div className="group relative hidden mx-auto size-10 justify-center group-data-[collapsible=icon]:flex items-center">
                    <img src={logoIcon} className="h-7 group-hover:opacity-0" alt="Azusa" />
                    <SidebarTrigger className="absolute inset-0 opacity-0 group-hover:opacity-100" variant="ghost" size="lg"/>
                </div>
            </SidebarHeader>

            <SidebarContent className="pt-5">
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                className="text-sm
                                            h-9
                                            px-3
                                            group-data-[collapsible=icon]:w-full!
                                            group-data-[collapsible=icon]:h-8!
                                            group-data-[collapsible=icon]:justify-center
                                            group-data-[collapsible=icon]:px-0
                                            group-data-[collapsible=icon]:gap-0
                                            data-[active=true]:border-l-4
                                            data-[active=true]:border-sidebar-primary
                                            data-[active=true]:bg-sidebar-primary-foreground
                                            data-[active=true]:text-sidebar-foreground
                                            transition-all  duration-150 "

                                isActive={item.title === activeItem}
                                onClick={() => setActiveItem(item.title)}
                            >
                                <item.icon />
                                <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <div className="flex flex-row items-center gap-3 h-15 p-1 bg-card border-t-4 border-sidebar-border w-full group-data-[collapsible=icon]:border-t-0
                group-data-[collapsible=icon]:justify-center
                group-data-[collapsible=icon]:p-0
                group-data-[collapsible=icon]:bg-transparent">
                    <Button variant="ghost" className="h-15 gap-3 flex-1 justify-start
                    group-data-[collapsible=icon]:size-10
                    group-data-[collapsible=icon]:p-0
                    group-data-[collapsible=icon]:flex-none
                    group-data-[collapsible=icon]:justify-center">
                        <Avatar size="lg">
                            <AvatarImage src="https://github.com/2844dev.png" />
                            <AvatarFallback>CN</AvatarFallback>
                            <AvatarBadge className="bg-green-500 dark:bg-green-600">
                                <Check className="fill-white" />
                            </AvatarBadge>
                        </Avatar>
                        <div className="flex flex-col justify-start group-data-[collapsible=icon]:hidden">
                            <p className="text-sm min-w-0">2844a</p>
                            <p className="text-muted-foreground text-xs min-w-0">Anilist</p>
                        </div>
                    </Button>
                    <div className="group-data-[collapsible=icon]:hidden">
                        <Button variant="ghost" size="icon">
                        <CloudSync/>
                    </Button>
                        <Button variant="ghost" size="icon">
                            <Settings/>
                        </Button>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}