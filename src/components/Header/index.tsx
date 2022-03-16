import logoImg from "../../assets/logo.png";

interface HeaderProps {
  onModalOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onModalOpen }) => {
  return (
    <header className="flex flex-col justify-between">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Logotipo" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-slate-100">Personal Money</h1>
      </div>
      <button
        type="button"
        onClick={onModalOpen}
        className="hidden px-6 py-3 mt-4 font-semibold bg-blue-500 rounded-lg text-slate-100"
      >
        Nova Transação
      </button>
    </header>
  );
};

export default Header;
