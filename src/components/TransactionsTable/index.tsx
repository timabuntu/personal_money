const TransactionsTable: React.FC = () => {
  return (
    <div>
      <table className="w-full table-auto">
        <thead>
          <tr className="py-4 text-gray-500">
            <th className="px-4 py-4 font-normal text-left">Título</th>
            <th className="py-4 font-normal text-left">Valor</th>
            <th className="py-4 font-normal text-left">Categoria</th>
            <th className="py-4 font-normal text-left">Data</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          <tr className="h-10 bg-slate-50">
            <td className="px-4">Criação de Post</td>
            <td className="">R$ 70,00</td>
            <td className="">Arte</td>
            <td className="">10/07/1983</td>
          </tr>
          <tr className="h-10 bg-slate-50">
            <td className="px-4">Criação de Post</td>
            <td>R$ 70,00</td>
            <td>Arte</td>
            <td>10/07/1983</td>
          </tr>
          <tr className="h-10 bg-slate-50">
            <td className="px-4">Criação de Post</td>
            <td>R$ 70,00</td>
            <td>Arte</td>
            <td>10/07/1983</td>
          </tr>
          <tr className="h-10 bg-slate-50">
            <td className="px-4">Criação de Post</td>
            <td>R$ 70,00</td>
            <td>Arte</td>
            <td>10/07/1983</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
