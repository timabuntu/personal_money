import { useEffect } from "react";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { api } from "./services/api";

const App: React.FC = () => {
  useEffect(() => {
    api.get("transactions").then((res) => console.log(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="px-4 bg-blue-900 h-[20rem]">
        <main className="mx-auto sm:max-w-3xl md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <header className="py-6">
            <Header />
          </header>
          <section>
            <Dashboard />
          </section>
        </main>
      </div>
      <button
        type="button"
        className="absolute w-10 h-10 font-semibold bg-blue-500 rounded-full hover:bg-blue-400 right-4 bottom-4 text-slate-100"
      >
        <span className="flex items-center justify-center h-full text-lg">
          +
        </span>
      </button>
    </div>
  );
};

export default App;
