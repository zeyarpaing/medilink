'use client';

import ChevronBtnIcon from '@/assets/icons/ChevronBtnIcon';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { testimonials } from '@/lib/constants';
import Image from 'next/image';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

export default function Testimonial() {
  return (
    <section className="relative">
      <div className="h-[38rem] sm:h-[45rem]">
        <Image
          src="https://img.freepik.com/free-vector/doctors-with-stethoscopes-nurses-standing-together-smiling-group-female-male-medical-staff-hospital-emergency-team-clinic-flat-vector-illustration-medicine-healthcare-concept_74855-21072.jpg?w=1380&t=st=1696329347~exp=1696329947~hmac=e9a3143f693f632d1077d9ad4f6dbd1840027269beee6dbd6643689991c65f14"
          className="h-full w-full object-cover"
          alt="hero image"
          height={2000}
          width={3556}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
      <div className="mcontainer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h2 className="header mb-16 text-center text-white">From our beloved customers</h2>
        <Swiper
          breakpoints={{
            '@0.20': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '@0.75': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwiper h-[22rem] [&_.swiper-pagination]:-mb-3"
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={item.title + idx}>
              <div className="flex h-80 flex-col justify-between rounded-xl bg-white p-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 26" fill="none" height="26" width="31">
                  <path
                    d="M30.3195 0.32011L29.5675 5.67811C28.0635 5.55278 26.8415 5.80344 25.9015 6.43011C24.9615 7.02545 24.3035 7.90278 23.9275 9.06211C23.5828 10.1901 23.5202 11.5061 23.7395 13.0101H30.3195V25.7941H17.5355V13.0101C17.5355 8.49811 18.5852 5.08278 20.6845 2.76411C22.7838 0.414113 25.9955 -0.400557 30.3195 0.32011ZM13.3055 0.32011L12.5535 5.67811C11.0495 5.55278 9.82749 5.80344 8.88749 6.43011C7.94749 7.02545 7.28949 7.90278 6.91348 9.06211C6.56882 10.1901 6.50615 11.5061 6.72548 13.0101H13.3055V25.7941H0.521484V13.0101C0.521484 8.49811 1.57115 5.08278 3.67048 2.76411C5.76982 0.414113 8.98148 -0.400557 13.3055 0.32011Z"
                    fill="#0096A9"
                  />
                </svg>
                <div>
                  <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                  <p>{item.content}</p>
                </div>
                <p className="text-sm">WINSTON CH ONG</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        className="swiper-prev absolute left-4 top-1/2 mt-10 hidden -translate-y-1/2 rotate-180 text-primary sm:block"
        aria-label="Previous review slides"
      >
        <ChevronBtnIcon />
      </button>
      <button
        className="swiper-next absolute right-4 top-1/2 mt-10 hidden -translate-y-1/2 text-primary sm:block"
        aria-label="Next review slides"
      >
        <ChevronBtnIcon />
      </button>
    </section>
  );
}
