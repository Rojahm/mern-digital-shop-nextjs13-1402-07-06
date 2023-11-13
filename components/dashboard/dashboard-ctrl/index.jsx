import DashboardBtn from "./btn";

function DashboardCtrl({ setContent }) {
  return (
    <div className="flex flex-col gap-4">
      <DashboardBtn
        title={"بنر میانی"}
        contentName={"banner-middle"}
        setContent={setContent}
      />
      <DashboardBtn
        title={"اسلایدر ها"}
        contentName={"slider-main"}
        setContent={setContent}
      />
      <DashboardBtn
        title={"اسلایدر ها"}
        contentName={"slider-middle"}
        setContent={setContent}
      />
      <DashboardBtn
        title={"اسلایدر ها"}
        contentName={"slider-ad"}
        setContent={setContent}
      />
    </div>
  );
}

export default DashboardCtrl;
