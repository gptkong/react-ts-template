import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
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

// 路由配置
const routes = [
  {
    title: "首页",
    path: "/",
    icon: Home,
  },
  {
    title: "关于",
    path: "/about",
    icon: Inbox,
  },
  {
    title: "日历",
    path: "/calendar",
    icon: Calendar,
  },
  {
    title: "搜索",
    path: "/search",
    icon: Search,
  },
  {
    title: "设置",
    path: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

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
