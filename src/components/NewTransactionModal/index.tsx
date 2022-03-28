import { useEffect, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  modalIsOpen: boolean;
  handleModalClose: () => void;
}

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
const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  handleModalClose,
  modalIsOpen,
}) => {
  const [transactionType, setTransactionType] = useState("deposit");

  useEffect(() => {
    setTransactionType("deposit");
  }, [modalIsOpen]);
  return (
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
          <button
            onClick={() => {
              setTransactionType("deposit");
            }}
            type="button"
            className={
              transactionType === "deposit"
                ? "flex justify-center flex-1 gap-4 px-4 py-4 bg-green-100 rounded-lg cursor-pointer outline outline-1 outline-green-300 focus:outline-none focus:ring-1 focus:ring-green-400"
                : "flex justify-center flex-1 gap-4 px-4 py-4 bg-white rounded-lg cursor-pointer outline outline-1 outline-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            }
          >
            <img src={incomeImg} alt="Entrada" className="w-6 h-6" />
            <p className="text-sm text-gray-700">Entrada</p>
          </button>

          <button
            type="button"
            onClick={() => {
              setTransactionType("withdraw");
            }}
            className={
              transactionType === "withdraw"
                ? "flex justify-center flex-1 gap-4 px-4 py-4 bg-red-100 rounded-lg cursor-pointer outline outline-1 outline-red-300 focus:outline-none focus:ring-1 focus:ring-red-400"
                : "flex justify-center flex-1 gap-4 px-4 py-4 bg-white rounded-lg cursor-pointer outline outline-1 outline-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            }
          >
            <img src={outcomeImg} alt="Saída" className="w-6 h-6" />
            <p className="text-sm text-gray-700">Saída</p>
          </button>
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
  );
};

export default NewTransactionModal;
