import { Link, Outlet } from "react-router";
import {
  PlusCircle,
  BadgeInfo,
  Package,
  ChevronRight,
  Settings,
  Search,
} from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import useAuth from "@/hook/useAuth";

export default function AppSidebar() {
  const { isAuthenticated } = useAuth();
  // Product details
  const product = {
    name: "Mermaid",
    logo: "logo.svg", // Update with your logo path
  };

  // Main navigation items
  const navItems = [
    { title: "New", icon: PlusCircle, url: "c/" },
    { title: "About", icon: BadgeInfo, url: "about" },
    { title: "Search", icon: Search, url: "" },
  ];

  // History items
  const historyItems = [
    "How Authentication in CLI Works?",
    "How to add DNS?",
    "How NFT Works??",
    "Another history example item",
  ];

  // Settings item
  const settingsItem = { title: "Settings", icon: Settings, url: "setting" };

  if (!isAuthenticated) {
    // Show public layout (no sidebar, maybe centered content)
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <Outlet />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent className="bg-white dark:bg-gray-950">
          {/* Logo */}
          <div className="flex items-center gap-2 p-4 border-b">
            <img src={product.logo} alt={product.name} className="h-8 w-8" />
            <span className="text-lg font-semibold">{product.name}</span>
          </div>

          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Main navigation */}
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

                {/* History collapsible */}
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Package className="h-4 w-4" />
                      <span>History</span>
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-2 space-y-1 overflow-y-auto max-h-[70vh]">
                    {historyItems.map((historyItem, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton
                          size="sm"
                          className="w-full justify-start text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap"
                        >
                          <span className="inline-block truncate max-w-[200px]">
                            {historyItem}
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Settings */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild variant={"outline"}>
              <Link to={settingsItem.url}>
                <settingsItem.icon className="h-4 w-4" />
                <span>{settingsItem.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>

      {/* Main content */}
      <div className="relative inline">
        <SidebarTrigger className="m-1 absolute" />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
