import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";


interface IDashboardProps {
  modalIsOpen: boolean;
}

const Dashboard: React.FC<IDashboardProps> = ({modalIsOpen}) => {
  return (
    <div className="mx-auto sm:max-w-3xl md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
      <Summary />
      <div className="mt-10">
        <TransactionsTable  modalIsOpen={modalIsOpen}/>
      </div>
    </div>
  );
};

export default Dashboard;
