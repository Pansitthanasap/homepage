export default function Packages() {
  const packages = [
    {
      title: "Starter HR Package",
      price: 15900,
      for: "ธุรกิจเริ่มต้น / SME เล็ก",
      description: [
        "วางระบบ HR เบื้องต้น",
        "มี Template เอกสาร",
        "ประหยัดต้นทุน",
      ],
    },
    {
      title: "Growth Plan Package",
      price: 25000,
      for: "SME มี 10-30 คน",
      description: ["ได้ทั้ง HR System", "Recruitment", "Career Path"],
    },
    {
      title: "PRO Outsource Package",
      price: 39000,
      for: "ธุรกิจหลายสาขา / ไม่มี HR",
      description: ["ทีม HR ครบวงจร", "ดูแลแทนทั้งหมด", "รายงานตรง CEO"],
    },
  ];

  return (
    <div
      className="relative flex flex-col h-screen px-16 py-16 gap-4 bg-[#2D2D2D]"
      id="packages"
    >
      <svg
        viewBox="0 0 1440 597"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0 w-full"
      >
        <g clipPath="url(#clip0_15_108)">
          <path
            d="M1065.11 -270.245C1126.72 -284.782 1197.67 -284.502 1249.34 -243.824C1304.4 -200.478 1319.66 -126.456 1301.28 -35.0193C1276.62 87.6292 1217.17 166.814 1136.66 212.973C1086.94 241.479 1031.41 256.089 975.379 262.465C1048.08 340.322 1148.78 406.205 1248.13 448.892C1311.58 476.154 1371.87 492.801 1420.89 497.6C1472.45 502.648 1500.77 493.671 1512.3 483.701L1574.44 555.554C1532.51 591.821 1470.41 597.903 1411.63 592.148C1350.3 586.143 1280.33 566.124 1210.63 536.176C1079.61 479.882 940.27 384.395 855.069 265.514C829.306 264.278 803.848 262.063 779.162 259.341C721.853 253.021 648.277 223.365 574.221 186.25C498.609 148.356 416.984 99.8095 341.837 51.0705C266.647 2.30379 197.117 -47.1922 145.64 -87.2976C119.996 -107.276 98.1897 -125.422 82.2314 -140.298C74.339 -147.655 67.057 -154.969 61.2842 -161.82C58.4134 -165.227 55.2557 -169.294 52.4746 -173.795C50.1813 -177.506 45.7015 -185.321 44 -195.659L137.738 -211.087C136.444 -218.949 133.326 -223.676 133.291 -223.731C132.773 -224.57 132.783 -224.399 133.935 -223.032C136.207 -220.335 140.393 -215.955 147.008 -209.789C160.064 -197.618 179.426 -181.404 204.025 -162.239C253.032 -124.058 320.284 -76.1403 393.531 -28.6336C466.821 18.9008 545.288 65.4879 616.785 101.32C689.837 137.931 750.385 160.591 789.576 164.913C792.968 165.287 796.364 165.648 799.763 165.998C777.33 109.832 767.71 49.3251 777.425 -13.618C787.529 -79.0825 832.135 -136.358 883.605 -178.842C935.908 -222.012 1001.56 -255.248 1065.11 -270.245ZM1190.58 -169.179C1172.58 -183.347 1137.47 -189.711 1086.93 -177.785C1038.34 -166.318 985.766 -139.985 944.079 -105.576C901.56 -70.4804 876.413 -32.1653 871.313 0.87326C862.485 58.0762 876.082 115.529 907.577 171.526C976.556 170.609 1039.27 159.303 1089.41 130.557C1143.39 99.6108 1188.22 45.3525 1208.14 -53.742C1223.2 -128.652 1205.19 -157.679 1190.58 -169.179Z"
            fill="url(#paint0_linear_15_108)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_15_108"
            x1="233.369"
            y1="60.6275"
            x2="1544.87"
            y2="365.627"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0721154" />
            <stop offset="1" stopColor="#64B386" />
          </linearGradient>
          <clipPath id="clip0_15_108">
            <rect width="1440" height="597" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="z-5 text-6xl font-bold text-white">
        <span className="text-[#64B386]">HR Outsource</span> ที่เหมาะกับธุรกิจของคุณ
      </div>
      <div className="flex h-full w-full z-5 justify-center content-center gap-10">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="group flex flex-col w-4/12 px-6 py-4 justify-center content-center gap-4 border-4 border-gray-400 rounded-4xl bg-white/10 backdrop-blur-md cursor-pointer
            hover:border-[#4CAF50] hover:scale-105 transition-border duration-300"
          >
            <div className="text-[#64B386] text-4xl font-bold transition-colors duration-300 group-hover:text-[#95E999]">
              {pkg.title}
            </div>
            <div className="font-bold text-3xl text-white/80 transition-opacity duration-300 group-hover:text-white">
              {pkg.price}
            </div>
            <div className="text-3xl text-white/30 transition-opacity duration-300 group-hover:text-white/80">
              {pkg.for}
            </div>
            <div className="justify-center items-center">
              <div className="flex flex-col w-full">
                {pkg.description.map((desc, idx) => (
                  <div key={idx} className="flex flex-row items-center gap-2">
                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <rect opacity="0.3" width="39" height="39" fill="url(#pattern0_83_2017)" />
                      <defs>
                        <pattern id="pattern0_83_2017" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlinkHref="#image0_83_2017" transform="scale(0.00195312)" />
                        </pattern>
                        <image id="image0_83_2017" width="512" height="512" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
                      </defs>
                    </svg>
                    <span className="text-white/30 text-xl">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
