import Image from "next/image";
import Link from "next/link";
//custom components
import BlogBannerBox from "../BlogBannerBox";

//ui icons
import { FaEye, FaComment, FaCalendarAlt } from "react-icons/fa";

const SingleBlogPost = () => {
  return (
    <div className="container">
      <article className="flex flex-col gap-5 justify-center items-stretch">
        <Image
          src={"/images/product/ganj.jpg"}
          width={600}
          height={605}
          alt="ganj book cover"
          className="my-0 mx-auto rounded-2xl"
        />
        <h2 className="text-lime-600 font-semibold">
          چرا next.js بهتر از همه فریمورک های جاوا اسکریپ دیگر است؟
        </h2>
        <div className="flex gap-2 mb-10">
          <Link href={"/"}>
            <div className="flex justify-evenly gap-1 text-xs items-center bg-stone-300 p-2 rounded-md shadow text-stone-700">
              <FaEye size={16} />
              تعداد بازدید: 5
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex justify-evenly gap-1 text-xs items-center bg-stone-300 p-2 rounded-md shadow text-stone-700">
              <FaComment size={14} />
              تعداد دیدگاه: 5
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex justify-evenly gap-1 text-xs items-center bg-stone-300 p-2 rounded-md shadow text-stone-700">
              <FaCalendarAlt size={14} />
              تاریخ انتشار: 1402/07/10
            </div>
          </Link>
        </div>
        <h3 className="text-stone-500 font-bold">توضیحات کامل</h3>
        <p className="text-stone-500 text-justify leading-relaxed">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        {/* related menu */}
        <div>
          <h3 className="text-stone-500 font-bold mt-10 mb-5">مطالب مرتبط</h3>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-0 mx-auto w-fit">
            <BlogBannerBox />
            <BlogBannerBox />
            <BlogBannerBox />
          </div>
        </div>
        {/* comment section */}
        <div>
          <h3>دیدگاه ها</h3>
          <div className="bg-red-300 h-60"></div>
        </div>
      </article>
    </div>
  );
};

export default SingleBlogPost;
