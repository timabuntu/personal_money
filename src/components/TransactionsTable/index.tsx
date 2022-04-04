import { useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../TransactionsContext';

interface Transaction {
  id: number;
  title: string;
  value: number;
  transactionType: string;
  category: string;
  createdAt: string;
}

interface ITransactionsTableProps {
  modalIsOpen: boolean;
}

const TransactionsTable: React.FC<ITransactionsTableProps> = ({
  modalIsOpen,
}) => {
  const data = useContext(TransactionsContext);

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleGetTransactions = async () => {
    const response = await api.get('transactions');

    if (response) {
      setTransactions(response.data.transactions);
    }
  };

  useEffect(() => {
    if (!modalIsOpen) {
      handleGetTransactions();
    }
  }, [modalIsOpen]);

  return (
    <section>
      <header className="grid grid-cols-4 px-4 py-3 text-sm text-gray-400">
        <div>
          <span>Titulo</span>
        </div>
        <div>
          <span>Preço</span>
        </div>
        <div>
          <span>Categoria</span>
        </div>
        <div>
          <span>Data</span>
        </div>
      </header>
      {transactions.map((transaction) => {
        return (
          <div
            key={transaction.id}
            className="grid grid-cols-4 p-4 mt-2 text-sm rounded-md bg-slate-50"
          >
            <div>
              <span className="text-gray-700">{transaction.title}</span>
            </div>
            <div>
              <span
                className={
                  transaction.transactionType === 'deposit'
                    ? 'text-green-400'
                    : 'text-red-400 -ml-2'
                }
              >
                {transaction.transactionType === 'deposit' ? `` : `-`}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.value)}
              </span>
            </div>
            <div>
              <span className="text-gray-400">{transaction.category}</span>
            </div>
            <div>
              <span className="text-gray-400">
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TransactionsTable;
