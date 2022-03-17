import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";

const Dashboard: React.FC = () => {
  return (
    <div className="mx-auto sm:max-w-3xl md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
      <Summary />
      <div className="mt-10">
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Dashboard;
