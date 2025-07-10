import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
        Responsive
      </button>
    </div>
  );
}
