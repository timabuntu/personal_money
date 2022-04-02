import { useState } from 'react';

import Modal from 'react-modal';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import NewTransactionModal from './components/NewTransactionModal';

Modal.setAppElement('#root');

const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => setModalIsOpen(true);

  const handleModalClose = () => setModalIsOpen(false);

  return (
    <div className="min-h-screen bg-slate-200">
      <main>
        <header className="px-4 py-6 bg-blue-800 h-80">
          <Header onModalOpen={handleModalOpen} />
        </header>
        <section className="px-4 -mt-[15rem]">
          <Dashboard modalIsOpen={modalIsOpen} />
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
      {modalIsOpen && (
        <NewTransactionModal
          handleModalClose={handleModalClose}
          modalIsOpen={modalIsOpen}
        />
      )}
    </div>
  );
};

export default App;
