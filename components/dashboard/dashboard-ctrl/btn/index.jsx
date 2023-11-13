const DashboardBtn = ({ title, contentName, setContent }) => {
  return (
    <div
      onClick={() => setContent(contentName)}
      className="bg-orange-400 text-stone-100 w-32 h-12 text-center rounded border-2 border-orange-300 hover:border-orange-400 hover:cursor-pointer flex justify-center items-center shadow-sm"
    >
      <h1>{title}</h1>
    </div>
  );
};

export default DashboardBtn;
