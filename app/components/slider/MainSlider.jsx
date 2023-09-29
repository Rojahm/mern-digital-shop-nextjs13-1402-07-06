"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
//for next not react its needed
SwiperCore.use([Autoplay]);

// import required modules
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import Image from "next/image";

function MainSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, Scrollbar]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="shadow">
          <div className="bg-stone-200/30 flex justify-center items-center">
            <Image
              className="rounded-md"
              alt="slide 1"
              width={1320}
              height={310}
              src={"/images/slider/slide1.jpg"}
              placeholder="data:image/webp;base64,UklGRiwEAABXRUJQVlA4WAoAAAAgAAAAhAEAXQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggPgIAAHATAJ0BKoUBXgA+7W6xVDO3KiMj8OqK4B2JZ27gS4mEfKnf6ke7pN+QOgAakHKq04glChC7iBAc0S/JZ4B+EH0z7utrR9q86HeHPAFN0xzHqoPQABb4FCfEuBMuVr73FoSuaIXemFZlKa+/I9P/z1pyKpSlKVXWV2E9Wm8yzg6zik1hMv2YoUW8iAyN2pjZpfE2WVRfeFaR/EdOL63i6CiZ2YoAAP7jE0WBD+duznbn9//BrfUr50htD3m1OUPrAAlMN+HftrC1aQum44ONa+F9TjLIRV/BqiYULywmOnhSpachmKkQlt3ps1Bf9oGRbM79RxJi6QAP3V0yQcI7M+b6dcwsJR8ifNb8gc60bMdDu1KmS4PlVW6X5MW2fjhtz6wer7umitfqNH50RAjRZePbOFjC3rYtZzsfrnYcR8BDczL6VVxTcGZmO0QjFjeHUJXmkmaUichEyJ51ZCpHrqYoEa8Tu+dgfcEx+A8Ga4LBRFnClCZwHYLadrusUMrALSAiMeymcT4s0x2Lh5UpwjnhV+RW+N72PtBep7OKt1GjRQpWTTbUOMWIkYi24dqEi+nqnfHhCdwcoXANebhrD3hCY3jZSmCq+WetEABzoAEqVYms+bwYqtL6CldqkUQt/DyG0NhsSDumdTjuIB9cI+noMzEZcb8hZOmKHHNCm/kXB5GLw8+3XGDOopYRnUmtcBJIaQnmDCrFbZDFbSThrtynVWnrBCzSMoRpyU1A+v9zJm/25dOUFJnKlzk4ZAA="
              objectFit="cover"
              layout="fixed"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow">
          <div className="bg-stone-200/30 flex justify-center items-center">
            <Image
              className="rounded-md"
              alt="slide 1"
              width={1320}
              height={310}
              src={"/images/slider/slide2.jpg"}
              placeholder="data:image/webp;base64,UklGRiwEAABXRUJQVlA4WAoAAAAgAAAAhAEAXQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggPgIAAHATAJ0BKoUBXgA+7W6xVDO3KiMj8OqK4B2JZ27gS4mEfKnf6ke7pN+QOgAakHKq04glChC7iBAc0S/JZ4B+EH0z7utrR9q86HeHPAFN0xzHqoPQABb4FCfEuBMuVr73FoSuaIXemFZlKa+/I9P/z1pyKpSlKVXWV2E9Wm8yzg6zik1hMv2YoUW8iAyN2pjZpfE2WVRfeFaR/EdOL63i6CiZ2YoAAP7jE0WBD+duznbn9//BrfUr50htD3m1OUPrAAlMN+HftrC1aQum44ONa+F9TjLIRV/BqiYULywmOnhSpachmKkQlt3ps1Bf9oGRbM79RxJi6QAP3V0yQcI7M+b6dcwsJR8ifNb8gc60bMdDu1KmS4PlVW6X5MW2fjhtz6wer7umitfqNH50RAjRZePbOFjC3rYtZzsfrnYcR8BDczL6VVxTcGZmO0QjFjeHUJXmkmaUichEyJ51ZCpHrqYoEa8Tu+dgfcEx+A8Ga4LBRFnClCZwHYLadrusUMrALSAiMeymcT4s0x2Lh5UpwjnhV+RW+N72PtBep7OKt1GjRQpWTTbUOMWIkYi24dqEi+nqnfHhCdwcoXANebhrD3hCY3jZSmCq+WetEABzoAEqVYms+bwYqtL6CldqkUQt/DyG0NhsSDumdTjuIB9cI+noMzEZcb8hZOmKHHNCm/kXB5GLw8+3XGDOopYRnUmtcBJIaQnmDCrFbZDFbSThrtynVWnrBCzSMoRpyU1A+v9zJm/25dOUFJnKlzk4ZAA="
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow">
          <div className="bg-stone-200/30 flex justify-center items-center">
            <Image
              className="rounded-md"
              alt="slide 1"
              width={1320}
              height={310}
              src={"/images/slider/slide3.jpg"}
              placeholder="data:image/webp;base64,UklGRiwEAABXRUJQVlA4WAoAAAAgAAAAhAEAXQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggPgIAAHATAJ0BKoUBXgA+7W6xVDO3KiMj8OqK4B2JZ27gS4mEfKnf6ke7pN+QOgAakHKq04glChC7iBAc0S/JZ4B+EH0z7utrR9q86HeHPAFN0xzHqoPQABb4FCfEuBMuVr73FoSuaIXemFZlKa+/I9P/z1pyKpSlKVXWV2E9Wm8yzg6zik1hMv2YoUW8iAyN2pjZpfE2WVRfeFaR/EdOL63i6CiZ2YoAAP7jE0WBD+duznbn9//BrfUr50htD3m1OUPrAAlMN+HftrC1aQum44ONa+F9TjLIRV/BqiYULywmOnhSpachmKkQlt3ps1Bf9oGRbM79RxJi6QAP3V0yQcI7M+b6dcwsJR8ifNb8gc60bMdDu1KmS4PlVW6X5MW2fjhtz6wer7umitfqNH50RAjRZePbOFjC3rYtZzsfrnYcR8BDczL6VVxTcGZmO0QjFjeHUJXmkmaUichEyJ51ZCpHrqYoEa8Tu+dgfcEx+A8Ga4LBRFnClCZwHYLadrusUMrALSAiMeymcT4s0x2Lh5UpwjnhV+RW+N72PtBep7OKt1GjRQpWTTbUOMWIkYi24dqEi+nqnfHhCdwcoXANebhrD3hCY3jZSmCq+WetEABzoAEqVYms+bwYqtL6CldqkUQt/DyG0NhsSDumdTjuIB9cI+noMzEZcb8hZOmKHHNCm/kXB5GLw8+3XGDOopYRnUmtcBJIaQnmDCrFbZDFbSThrtynVWnrBCzSMoRpyU1A+v9zJm/25dOUFJnKlzk4ZAA="
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MainSlider;
