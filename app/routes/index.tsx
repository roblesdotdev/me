import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Aldo R. Robles" },
    {
      name: "description",
      content:
        "Welcome to my personal website. (Aldo R. Robles)! Full Stack Developer.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="font-bold text-2xl">Hello</h1>
    </div>
  );
}
