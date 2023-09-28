//ui and fonts
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  return (
    <>
      <div className="self-end mb-3 flex gap-3 items-center">
        <div className="text-lime-900">444540</div>
        <div className="shadow-md bg-stone-300/90 border border-lime-800 rounded rotate-12 transition-all duration-200 hover:rotate-0">
          <BsTelephone className="w-10 h-10 p-2 text-lime-900 -rotate-12 transition-all duration-200 hover:rotate-0" />
        </div>
      </div>
      <div className="self-end mb-3 flex gap-3 items-center">
        <div className="text-lime-900">shop@lssi.ir</div>
        <div className="shadow-md bg-stone-300/90 border border-lime-800 rounded rotate-12 transition-all duration-200 hover:rotate-0">
          <TfiEmail className="w-10 h-10 p-2 text-lime-900 -rotate-12 transition-all duration-200 hover:rotate-0" />
        </div>
      </div>
    </>
  );
}

export default Contact;
