import { Link } from "react-router-dom";


const CardInfo = ({ datas }) => {
  console.log(datas)
  return (
    <section className="border-2" key={datas.id}>
      <div className="h-[600px] md:h-[620px] flex flex-col md:flex-col md:gap-3 shadow-xl mx-auto relative">
        <div>
          <Link to={`${datas.media_type}/${datas.id}`}>
            <img
              datatestid="movie-poster"
              src={`https://image.tmdb.org/t/p/w500${datas.poster_path}`}
              alt={datas.title || datas.name}
              className="h-[460px] w-full object-cover cursor-pointer"
            />
          </Link>
          <div className="absolute top-2 mr-3 w-[19px] h-[19px] right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g filter="url(#filter0_b_39697_79)">
                <ellipse
                  cx="15"
                  cy="15.1842"
                  rx="15"
                  ry="14.6053"
                  fill="#F3F4F6"
                  fillOpacity="0.5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_39697_79"
                  x="-2"
                  y="-1.42105"
                  width="34"
                  height="33.2105"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="1"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_39697_79"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_39697_79"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="absolute top-2 mr-3 w-[19px] h-[19px] right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                fill="#D1D5DB"
              />
            </svg>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <p
            className=" h-[16px] font-bold text-xs md:text-[15px] text-[#9CA3AF] "
            data-testid="movie-release-date"
          >
            {datas.release_date || datas.first_air_date}
          </p>
          <h1
            className="w-full  font-bold text-[16px] md:text-[18px] text-[#111827] flex-wrap"
            data-testid="movie-title"
          >
            {datas.title || datas.name}
          </h1>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <p className="text-xs font-medium text-[#111827]  h-[12px] leading-[12px]">
                86.0 / 100
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-xs font-medium text-[#111827]   h-[12px] leading-[12px]">
                97%
              </p>
            </div>
          </div>
          <div className="">
            <p
              className="font-bold text-base text-[#9CA3AF]"
              data-testid="movie-type"
            >
              {datas.media_type}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardInfo;