//custom components
import SideBar from "../../components/SideBar";

const SingleBlogLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <main className="col-span-3">{children}</main>
      <aside className="col-span-1">
        <SideBar />
      </aside>
    </div>
  );
};

export default SingleBlogLayout;
