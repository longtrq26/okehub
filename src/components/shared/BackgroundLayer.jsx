import React from "react";

const BackgroundLayer = () => {
  return (
    <div className="relative flex items-start gap-x-16">
      {/* Large SVG for desktop */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="translate-y-48 lg:translate-y-12 w-[1350px] hidden md:block"
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

      {/* Large SVG for mobile */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="translate-y-12 w-[328px] block md:hidden"
        viewBox="0 0 328 276"
        fill="none"
      >
        <path
          d="M297.382 0.51782C296.101 0.654831 294.865 0.928851 293.675 1.20287C188.213 21.5718 151.777 109.99 141.021 146.937C138.732 154.792 129.898 158.72 122.574 155.112C102.159 145.156 61.2379 130.359 7.13385 136.159C-72.0539 144.653 -110 217.543 -110 217.543L-103.683 276.001C-103.683 276.001 -76.4939 191.511 11.5281 182.103C75.1072 175.298 117.447 217.497 136.031 241.474C143.584 251.202 155.577 256.272 167.798 254.993C182.4 253.44 193.065 240.698 192.333 226.038C184.597 75.2344 303.104 53.6324 303.104 53.6324C317.797 52.0339 328.462 38.8809 326.86 24.2207C325.258 9.56054 312.076 -1.08064 297.382 0.51782Z"
          fill="url(#paint0_linear_1_1751)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_1751"
            x1="-89.7393"
            y1="279.503"
            x2="263.929"
            y2="40.7888"
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

      {/* Small SVG for desktop */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="translate-y-28 lg:translate-y-0 w-[154px] h-[177px] hidden md:block"
        viewBox="0 0 154 177"
        fill="none"
      >
        <path
          d="M88.729 176.583C137.304 176.583 176.683 137.205 176.683 88.6294C176.683 40.054 137.304 0.675781 88.729 0.675781C40.1536 0.675781 0.775391 40.054 0.775391 88.6294C0.775391 137.205 40.1536 176.583 88.729 176.583Z"
          fill="#F5485D"
        />
      </svg>

      {/* Small SVG for mobile */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[39px] h-[57px] block md:hidden"
        viewBox="0 0 39 57"
        fill="none"
      >
        <path
          d="M29.4945 57.0013C45.2402 57.0013 58.0046 44.2412 58.0046 28.5007C58.0046 12.7602 45.2402 0 29.4945 0C13.7488 0 0.984375 12.7602 0.984375 28.5007C0.984375 44.2412 13.7488 57.0013 29.4945 57.0013Z"
          fill="#F5485D"
        />
      </svg>
    </div>
  );
};

export default BackgroundLayer;
