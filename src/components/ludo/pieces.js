import React, {
  useState
} from 'react';

export const LudoPiece2 = (props) => {
  return (
    <>
      {props.pos==null?null:(
        <svg className={"ludoPiece"} style={{top: props.pos[0], left: props.pos[1]}} width={47} height={47} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 338C100 260.68 162.68 198 240 198H260C337.32 198 400 260.68 400 338V338C400 415.32 337.32 478 260 478H240C162.68 478 100 415.32 100 338V338Z" fill="#0A365F" />
          <path d="M100 325C100 247.68 162.68 185 240 185H260C337.32 185 400 247.68 400 325V325C400 402.32 337.32 465 260 465H240C162.68 465 100 402.32 100 325V325Z" fill="#0089ff" />
          <path d="M150 122C150 66.7715 194.772 22 250 22V22C305.228 22 350 66.7715 350 122V122C350 177.228 305.228 222 250 222V222C194.772 222 150 177.228 150 122V122Z" fill="#00b8ff" />
        </svg>
      )}
    </>
  )
}

export const LudoPiece = (props) => {
  return (
    <>
      {props.pos==null?null:(
        <svg className={"ludoPiece"} style={{top: props.pos[0], left: props.pos[1]}} width={47} height={47} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M100 338C100 260.68 162.68 198 240 198H260C337.32 198 400 260.68 400 338C400 415.32 337.32 478 260 478H240C162.68 478 100 415.32 100 338Z"
              fill="#041759"
            />
            <g filter="url(#filter0_d)">
              <path
                d="M100 325C100 247.68 162.68 185 240 185H260C337.32 185 400 247.68 400 325C400 402.32 337.32 465 260 465H240C162.68 465 100 402.32 100 325Z"
                fill="url(#paint0_linear)"
              />
            </g>
            <g filter="url(#filter1_d)">
              <path
                d="M150 122C150 66.7715 194.772 22 250 22C305.228 22 350 66.7715 350 122C350 177.228 305.228 222 250 222C194.772 222 150 177.228 150 122Z"
                fill="url(#paint1_linear)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d"
              x={86}
              y={181}
              width={328}
              height={308}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={10} />
              <feGaussianBlur stdDeviation={7} />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d"
              x={84}
              y={-40}
              width={332}
              height={332}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy={4} />
              <feGaussianBlur stdDeviation={33} />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0649688 0 0 0 0 0.07287 0 0 0 0 0.2625 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1={363}
              y1={293}
              x2={134}
              y2="267.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#094C89" />
              <stop offset="0.971305" stopColor="#2381D8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="344.5"
              y1={122}
              x2={146}
              y2={61}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0A559B" />
              <stop offset={1} stopColor="#3C9CF3" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width={500} height={500} fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  )
}