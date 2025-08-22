import React from "react";

const BackgroundLayer = () => {
  return (
    <div className="relative flex gap-x-10 md:gap-x-12 lg:gap-x-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="translate-y-12 w-[1350px] hidden lg:block"
        viewBox="0 0 1350 725"
        fill="none"
      >
        <path
          d="M1257.7 0.990471C1253.75 1.41329 1249.94 2.25892 1246.27 3.10456C920.917 65.9635 808.514 338.822 775.33 452.842C768.269 477.084 741.015 489.205 718.422 478.07C655.442 447.346 529.2 401.681 362.289 419.581C117.995 445.795 0.931641 670.735 0.931641 670.735L20.4187 851.137C20.4187 851.137 104.298 590.399 375.845 561.366C571.987 540.366 702.606 670.594 759.938 744.587C783.237 774.607 820.234 790.251 857.938 786.305C902.984 781.513 935.886 742.191 933.626 696.949C909.762 231.567 1275.36 164.903 1275.36 164.903C1320.68 159.97 1353.59 119.38 1348.64 74.138C1343.7 28.8965 1303.03 -3.94241 1257.7 0.990471Z"
          fill="url(#paint0_linear_16561_891)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_16561_891"
            x1="63.4357"
            y1="861.945"
            x2="1154.73"
            y2="125.603"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.04" stopColor="#292664" stopOpacity="0" />
            <stop offset="0.24" stopColor="#6B8ED2" stopOpacity="0.24" />
            <stop offset="0.43" stopColor="#5CBAFF" />
            <stop offset="0.75" stopColor="#E759AE" />
            <stop offset="0.99" stopColor="#F4475C" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[154px] h-[177px] hidden lg:block"
        viewBox="0 0 154 177"
        fill="none"
      >
        <path
          d="M88.729 176.583C137.304 176.583 176.683 137.205 176.683 88.6294C176.683 40.054 137.304 0.675781 88.729 0.675781C40.1536 0.675781 0.775391 40.054 0.775391 88.6294C0.775391 137.205 40.1536 176.583 88.729 176.583Z"
          fill="#F5485D"
        />
      </svg>
    </div>
  );
};

export default BackgroundLayer;
