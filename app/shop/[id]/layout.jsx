//custom components
import SideBar from "@/components/SideBar";

const SingleFileLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-4 px-6">
      <main className="col-span-3">{children}</main>
      <aside className="col-span-1 mt-14">
        <SideBar />
      </aside>
    </div>
  );
};

export default SingleFileLayout;
