import logoImg from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Logotipo" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-slate-100">Personal Money</h1>
      </div>
      <button
        type="button"
        className="px-6 py-3 font-semibold bg-blue-500 rounded-lg text-slate-100"
      >
        Nova Transação
      </button>
    </header>
  );
};

export default Header;
