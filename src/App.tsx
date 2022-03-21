import { useEffect, useState } from "react";
import Modal from "react-modal";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { api } from "./services/api";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    backgroundColor: "rgb(248,250, 252)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // position: "fixed",
    border: "2px solid red",
  },
};

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
        style={modalStyles}
      >
        <form className="flex flex-col max-w-3xl p-4">
          <h2 className="text-xl font-bold text-gray-800">
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
