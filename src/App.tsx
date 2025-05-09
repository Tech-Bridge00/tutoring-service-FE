import { Outlet, useLoaderData } from "react-router";

function App() {
  const data = useLoaderData() as { message: string };

  return (
    <div className="w-dvw h-screen">
      <main className="p-4">
        <h2 className="text-white mb-4">{data.message}</h2>

        <Outlet />
      </main>
    </div>
  );
}

export default App;
