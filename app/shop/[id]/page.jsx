import Image from "next/image";
import Link from "next/link";
//custom components
import BreadCrumb from "@/components/breadCrumb";
import RelatedPost from "@/components/RelatedPost";

//ui icons
import { FaEye, FaComment, FaCalendarAlt } from "react-icons/fa";
import { TiBrush } from "react-icons/ti";
import { IoIosResize } from "react-icons/io";
import { AiOutlineCopy } from "react-icons/ai";

const SingleProductPage = () => {
  return (
    <div className="container flex flex-col gap-5">
      <BreadCrumb page={"فروشگاه"} pageLink={"/shop"} pageTitle={"محصول 1"} />

      <article className="flex flex-col gap-5 justify-center items-stretch">
        {/* product image and detailes */}
        <div className="flex justify-between items-center gap-5 bg-stone-300 p-4 rounded-xl">
          <Image
            src={"/images/product/ganj.jpg"}
            width={350}
            height={205}
            alt="ganj book cover"
            className="rounded-xl"
          />
          <div className="w-full h-full self-start pt-2">
            <h1 className="mb-5 text-stone-600/70 font-semibold">
              کتاب گنج - نوشته جلال آل احمد
            </h1>
            {/* file details */}
            <div className="flex flex-col gap-1 p-2 text-stone-500 sm:text-base md:text-sm py-4 mt-4">
              <div className="flex justify-between">
                <span className="flex justify-start items-center gap-1">
                  <TiBrush size={"20px"} />
                  فرمت
                </span>
                <span>PSD</span>
              </div>
              <div className="flex justify-between">
                <span className="flex justify-start items-center gap-1">
                  <IoIosResize size={"20px"} />
                  ابعاد
                </span>
                <span>1080*720 پیکسل </span>
              </div>
              <div className="flex justify-between">
                <span className="flex justify-start items-center gap-1">
                  <AiOutlineCopy size={"20px"} />
                  حجم
                </span>
                <span>10 مگ</span>
              </div>
            </div>
          </div>
        </div>
        {/* product Icons */}
        <div className="flex justify-around gap-2 my-10">
          <div className="bg-lime-500/40 p-3 rounded-md shadow-md flex gap-5 justify-start items-center w-52">
            <Image
              src={"/images/icons/trophy.png"}
              alt="feedback"
              width={65}
              height={80}
            />
            <div>1</div>
          </div>
          <div className="bg-lime-500/40 p-3 rounded-md shadow-md flex gap-5 justify-start items-center w-52">
            <Image
              src={"/images/icons/feedback.png"}
              alt="feedback"
              width={65}
              height={80}
            />
            <div>1</div>
          </div>
          <div className="bg-lime-500/40 p-3 rounded-md shadow-md flex gap-5 justify-start items-center w-52">
            <Image
              src={"/images/icons/target1.png"}
              alt="feedback"
              width={65}
              height={80}
            />
            <div>1</div>
          </div>
        </div>
        {/* product description */}
        <div className="shadow-lg bg-stone-50/50 px-10 py-6 rounded-lg">
          <h3 className="text-stone-500 font-bold">توضیحات کامل</h3>
          <p className="text-stone-500 text-justify leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>
      </article>

      <RelatedPost title={"محصولات"} />

      {/* comment section */}
      <div className="flex flex-col gap-2">
        <h3>دیدگاه ها</h3>
        <div className="bg-red-300/50 h-60 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SingleProductPage;
