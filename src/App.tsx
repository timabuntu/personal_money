import { useEffect, useState } from "react";
import Modal from "react-modal";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { api } from "./services/api";

Modal.setAppElement("#root");

const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => setModalIsOpen(true);

  const handleModalClose = () => setModalIsOpen(false);

  useEffect(() => {
    api.get("transactions").then((res) => console.log(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-slate-200">
      <main className="">
        <header className="px-4 py-6 bg-blue-800 h-80">
          <Header onModalOpen={handleModalOpen} />
        </header>
        <section className="px-4 -mt-[15rem]">
          <Dashboard />
        </section>
      </main>

      <button
        type="button"
        onClick={handleModalOpen}
        className="fixed w-10 h-10 font-semibold bg-blue-500 rounded-full hover:bg-blue-400 right-4 bottom-4 text-slate-100"
      >
        <span className="flex items-center justify-center h-full text-lg">
          +
        </span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center border-4 border-red-500 bg-gray-900/30"
      >
        <form className="w-full max-w-3xl p-8 bg-green-200">
          <h2 className="text-xl font-bold text-gray-900">
            Cadastrar transação
          </h2>
          <input type="text" placeholder="Título" />
          <input type="number" placeholder="Valor" />
          <input type="text" placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </form>
      </Modal>
    </div>
  );
};

export default App;
