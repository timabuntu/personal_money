import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

const Summary: React.FC = () => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex flex-col p-4 bg-white rounded-lg">
        <div className="flex items-center justify-between ">
          <span className="text-gray-700">Entradas</span>
          <img src={incomeImg} alt="Entradas" className="w-5 h-5" />
        </div>
        <p className="text-xl text-gray-700">R$ 17.000,00</p>
      </div>

      <div className="flex flex-col p-4 bg-white rounded-lg ">
        <div className="flex items-center justify-between ">
          <span className="text-gray-700">Saídas</span>
          <img src={outcomeImg} alt="Entradas" className="w-5 h-5" />
        </div>
        <p className="text-xl text-gray-700">R$ 7.000,00</p>
      </div>

      <div className="flex flex-col p-4 rounded-lg bg-emerald-500">
        <div className="flex items-center justify-between ">
          <span className="text-slate-100">Total</span>
          <img src={totalImg} alt="Entradas" className="w-5 h-5" />
        </div>
        <p className="text-xl text-slate-100">R$ 10.000,00</p>
      </div>
    </div>
  );
};

export default Summary;
