import ActionButton from "./ActionButton";
const cirlces = [
  { x: 165, y: 150, r: 120, w: 30 },
  { x: 140, y: 150, r: 110, w: 23 },
  { x: 120, y: 150, r: 80, w: 20 },
  { x: 100, y: 150, r: 60, w: 12 },
  { x: 80, y: 150, r: 50, w: 10 },
];
export default function Landing() {
  return (
    <div className="columns-2 gap-8">
      <div className="w-full my-9 px-9 space-y-3">
        <div className="text-5xl font-bold space-y-4">
          <p>A Decentralised</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#C517F1] to-[#5AFFFF]">
            Future
          </p>
        </div>
        <p>
          The Key is a trusted ecosystem that includes apps and services for a
          decentralized future.
        </p>
        <ActionButton />
      </div>
      <div className="w-full my-9 px-9">
        <div className="text-5xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            height="300"
            width="300"
          >
            <defs>
              <filter id="emboss" x="-25%" y="-25%" width="150%" height="150%">
                <feOffset
                  in="SourceAlpha"
                  dx="0.16666666666666666"
                  dy="0.8333333333333334"
                  result="17"
                ></feOffset>
                <feGaussianBlur
                  stdDeviation="0.5"
                  in="17"
                  result="18"
                ></feGaussianBlur>
                <feSpecularLighting
                  surfaceScale="1"
                  specularConstant="0.9"
                  specularExponent="15"
                  in="18"
                  result="19"
                >
                  <fePointLight x="-1000" y="-5000" z="300"></fePointLight>
                </feSpecularLighting>
                <feComposite
                  in="19"
                  in2="SourceAlpha"
                  operator="in"
                  result="20"
                ></feComposite>
                <feOffset
                  in="SourceAlpha"
                  dx="-0.16666666666666666"
                  dy="-0.8333333333333334"
                  result="21"
                ></feOffset>
                <feGaussianBlur
                  stdDeviation="0.5"
                  in="21"
                  result="22"
                ></feGaussianBlur>
                <feSpecularLighting
                  surfaceScale="1"
                  specularConstant="1.8"
                  specularExponent="8"
                  in="22"
                  result="23"
                >
                  <fePointLight x="100" y="5000" z="300"></fePointLight>
                </feSpecularLighting>
                <feComposite
                  in="23"
                  in2="SourceAlpha"
                  operator="in"
                  result="24"
                ></feComposite>
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .85 0"
                  in="24"
                  result="25"
                ></feColorMatrix>
                <feComposite
                  k1="0"
                  k2="0.8"
                  k3="0.5"
                  k4="0"
                  in="20"
                  in2="25"
                  operator="arithmetic"
                  result="26"
                ></feComposite>
                <feMerge in="26" result="27">
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                  <feMergeNode in="26"></feMergeNode>
                </feMerge>
                <feDropShadow
                  dx="2"
                  dy="2"
                  stdDeviation="3"
                  floodOpacity="0.5"
                />
              </filter>
              <linearGradient id="Gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#C517F1" />
                <stop offset="67.71%" stopColor="#5AFFFF" />
                <stop offset="100%" stopColor="#E91ED5" />
              </linearGradient>
            </defs>
            {cirlces.map((item) => (
              <circle
                cx={item.x}
                cy={item.y}
                r={item.r}
                stroke="url(#Gradient)"
                strokeWidth={item.w}
                fill="none"
                filter="url(#emboss)"
              />
            ))}
            {/* {cirlces.map((item) => (
              <circle
                cx={item.x}
                cy={item.y}
                r={item.r}
                stroke="white"
                stroke-width={item.w}
                fill="white"
                filter="url(#emboss)"
              />
            ))} */}
          </svg>
        </div>
      </div>
    </div>
  );
}
