import { useEffect, useState } from "react";

import { api } from "./services/api";
import Modal from "react-modal";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

import closeImg from "./assets/close.svg";
import incomeImg from "./assets/income.svg";
import outcomeImg from "./assets/outcome.svg";

const modalStyles = {
  content: {
    padding: "36px",
    width: "100%",
    maxWidth: "576px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    backgroundColor: "rgb(248,250, 252)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
        <form className="flex flex-col">
          <header className="flex justify-between">
            <h2 className="py-4 text-xl font-bold text-gray-700 ">
              Cadastrar transação
            </h2>
            <button type="button" className="-mt-16 -mr-6">
              <img
                src={closeImg}
                alt="Botão para fechar o modal"
                onClick={handleModalClose}
                className="p-4 transition hover:brightness-110"
              />
            </button>
          </header>
          <input
            type="text"
            placeholder="Título"
            className="px-4 py-4 text-sm text-gray-500 bg-gray-200 rounded-lg outline outline-1 outline-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-slate-400"
          />

          <input
            type="text"
            placeholder="Valor"
            className="px-4 py-4 mt-4 text-sm text-gray-500 bg-gray-200 rounded-lg outline outline-1 outline-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-slate-400g"
          />

          <div className="flex justify-between gap-4 mt-4">
            <div className="flex justify-center flex-1 gap-4 px-4 py-4 bg-white rounded-lg cursor-pointer outline outline-1 outline-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400">
              <img src={incomeImg} alt="Entrada" className="w-6 h-6" />
              <button type="button" className="text-sm text-gray-700">
                Entrada
              </button>
            </div>

            <div className="flex justify-center flex-1 gap-4 px-4 py-4 bg-white rounded-lg cursor-pointer outline outline-1 outline-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400">
              <img src={outcomeImg} alt="Saída" className="w-6 h-6" />
              <button className="text-sm text-gray-700 ">Saída</button>
            </div>
          </div>

          <input
            type="text"
            placeholder="Categoria"
            className="px-4 py-4 mt-4 text-sm text-gray-500 bg-gray-200 rounded-lg outline outline-1 outline-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-slate-400"
          />

          <button
            type="submit"
            className="py-4 mt-4 text-sm font-semibold transition rounded-lg text-slate-50 bg-emerald-500 hover:bg-emerald-600"
          >
            Cadastrar
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default App;
