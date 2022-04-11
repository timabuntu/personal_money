import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.transactionType === 'deposit') {
        acc.deposits += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.withdraws += transaction.value;
        acc.total -= transaction.value;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex flex-col p-4 bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Entradas</span>
          <img src={incomeImg} alt="Entradas" className="w-5 h-5" />
        </div>
        <p className="text-xl text-gray-700">
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </p>
      </div>

      <div className="flex flex-col p-4 bg-white rounded-lg">
        <div className="flex items-center justify-between ">
          <span className="text-gray-700">Saídas</span>
          <img src={outcomeImg} alt="Entradas" className="w-5 h-5" />
        </div>
        <p className="text-xl text-gray-700">
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </p>
      </div>

      <div className="flex flex-col p-4 rounded-lg bg-emerald-500">
        <div className="flex items-center justify-between">
          <span className="text-slate-100">Total</span>
          <img src={totalImg} alt="Entradas" className="w-5 h-5" />
        </div>
        <p className="text-xl text-slate-100">
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </p>
      </div>
    </div>
  );
};

export default Summary;
