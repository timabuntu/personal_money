import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <div className="w-full bg-blue-900 h-36">
        <main className="px-4 mx-auto sm:max-w-3xl md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <header className="py-6">
            <Header />
          </header>
        </main>
      </div>
    </div>
  );
};

export default App;
