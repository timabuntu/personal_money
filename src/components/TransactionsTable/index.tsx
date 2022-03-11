const TransactionsTable: React.FC = () => {
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

      <div className="grid grid-cols-4 p-4 mt-2 text-sm rounded-md bg-slate-50">
        <div>
          <span className="text-gray-700">Salário</span>
        </div>
        <div>
          <span className="text-green-500">R$ 4.000,00</span>
        </div>
        <div>
          <span className="text-gray-400">Pagamento</span>
        </div>
        <div>
          <span className="text-gray-400">07/03/2022</span>
        </div>
      </div>

      <div className="grid grid-cols-4 p-4 mt-2 text-sm rounded-md bg-slate-50">
        <div>
          <span className="text-gray-700">Aluguel</span>
        </div>
        <div>
          <span className="text-red-500">R$ 1.200,00</span>
        </div>
        <div>
          <span className="text-gray-400">Moradia</span>
        </div>
        <div>
          <span className="text-gray-400">10/03/2022</span>
        </div>
      </div>

      <div className="grid grid-cols-4 p-4 mt-2 text-sm rounded-md bg-slate-50">
        <div>
          <span className="text-gray-700">Pizza</span>
        </div>
        <div>
          <span className="text-red-500">R$ 70,00</span>
        </div>
        <div>
          <span className="text-gray-400">Gordice</span>
        </div>
        <div>
          <span className="text-gray-400">11/03/2022</span>
        </div>
      </div>
    </section>
  );
};

export default TransactionsTable;
