import { AppSidebar } from "@/components/custom/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
          <h1 className="text-lg font-semibold">My Application</h1>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-3.5rem)] pt-14">
        {/* Sidebar */}
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 overflow-y-auto">
            <div className="h-full p-6">
              <Outlet />
            </div>
          </main>
        </SidebarProvider>
      </div>
    </div>
  ),
});
