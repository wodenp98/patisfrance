"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "../ui/scroll-area";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4",
        className
      )}
      {...props}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60">
          <ScrollArea className="h-96 w-full">
            {" "}
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "justify-start whitespace-normal hover:bg-accent hover:text-accent-foreground"
                }
              >
                <DropdownMenuItem
                  className={cn(
                    pathname === item.href
                      ? "bg-muted hover:bg-muted"
                      : "hover:bg-transparent hover:underline",
                    "cursor-pointer"
                  )}
                >
                  {item.title}
                </DropdownMenuItem>
              </Link>
            ))}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
