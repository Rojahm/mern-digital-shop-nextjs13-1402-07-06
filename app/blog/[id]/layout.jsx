//custom components
import BreadCrumb from "@/app/components/breadCrumb";
import SideBar from "./SideBar";

const SingleBlogLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <BreadCrumb />
      <section className="grid grid-cols-4 gap-4">
        <main className="col-span-3">{children}</main>
        <aside className="col-span-1">
          <SideBar />
        </aside>
      </section>
    </div>
  );
};

export default SingleBlogLayout;
