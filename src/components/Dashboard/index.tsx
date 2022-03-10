import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Summary />
      <div className="mt-10">
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Dashboard;
