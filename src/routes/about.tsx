import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="overflow-auto w-full font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
      Hello "/about"!
    </div>
  );
}
