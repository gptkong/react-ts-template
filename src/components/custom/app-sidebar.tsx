import { Home, FileText, LucideIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Link, useRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";

// 路由图标映射
const routeIcons: Record<string, LucideIcon> = {
  "/": Home,
  "/about": FileText,
};

// 路由标题映射
const routeTitles: Record<string, string> = {
  "/": "首页",
  "/about": "关于",
};

export function AppSidebar() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  // 从路由树中获取子路由
  const routes = Object.entries(routeTree.children || {})
    .filter(([key]) => key !== "__root__")
    .map(([_, route]) => ({
      path: route.path,
      title: routeTitles[route.path] || route.path,
      icon: routeIcons[route.path] || Home,
    }))
    .sort((a, b) => {
      // 确保首页始终在第一位
      if (a.path === "/") return -1;
      if (b.path === "/") return 1;
      return a.path.localeCompare(b.path);
    });

  return (
    <Sidebar className="top-20">
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-muted-foreground">
            导航
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.path}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={route.path}
                      className={`flex w-full items-center gap-2 px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors ${
                        currentPath === route.path
                          ? "bg-accent text-accent-foreground"
                          : ""
                      }`}
                    >
                      <route.icon className="h-4 w-4" />
                      <span>{route.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
