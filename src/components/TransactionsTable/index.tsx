import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <section>
      <header className="grid grid-cols-4 px-4 py-3 text-sm text-gray-400 ">
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
                  transaction.type === 'deposit'
                    ? 'text-green-400'
                    : 'text-red-400'
                }
              >
                R$ {transaction.amount},00
              </span>
            </div>
            <div>
              <span className="text-gray-400">{transaction.category}</span>
            </div>
            <div>
              <span className="text-gray-400">{transaction.createdAt}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TransactionsTable;
