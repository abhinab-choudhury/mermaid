import { useState } from "react";
import { Link, Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronRight,
  Menu,
  Package,
  Settings,
  BadgeInfo,
  PlusCircle,
} from "lucide-react";
import useAuth from "@/hook/useAuth";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex h-screen dark:bg-gray-950">
      <aside
        className={`${
          isOpen ? "w-64" : "w-16"
        } ${isAuthenticated ? "block" : "hidden"} flex flex-col border-r transition-all duration-300 ease-in-out`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link
            to={""}
            className={`${isOpen ? "block" : "hidden"} text-lg font-semibold`}
          >
            Mermaid
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <nav className="p-2">
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link to={"c/"}>
                <PlusCircle className="mr-2 h-4 w-4" />
                {isOpen && "New"}
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link to={"about"}>
                <BadgeInfo className="mr-2 h-4 w-4" />
                {isOpen && "About"}
              </Link>
            </Button>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="mr-2 h-4 w-4" />
                  {isOpen && (
                    <>
                      History
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </>
                  )}
                </Button>
              </CollapsibleTrigger>
              {isOpen && (
                <CollapsibleContent className="ml-2 space-y-1 overflow-y-auto max-h-[70vh]">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    <span className="inline-block truncate max-w-[200px]">
                      How Authentication inoi uh iuwekj iu iudu;Works in CLI?
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    <span className="inline-block truncate max-w-[200px]">
                      How Authentication inoi uh iuwekj iu iudu;Works in CLI?
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    <span className="inline-block truncate max-w-[200px]">
                      How to add DNS?
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    <span className="inline-block truncate max-w-[200px]">
                      How NFT Works??
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap"
                  >
                    <span className="inline-block truncate max-w-[200px]">
                      How Authentication Works in CLI?
                    </span>
                  </Button>
                </CollapsibleContent>
              )}
            </Collapsible>
          </nav>
        </ScrollArea>
        <Button
          asChild
          variant="ghost"
          className="w-full justify-start rounded-none"
        >
          <Link to={"setting"}>
            <Settings className="ml-2 h-4 w-4" />
            {isOpen && "Settings"}
          </Link>
        </Button>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
