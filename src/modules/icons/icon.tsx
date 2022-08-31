import React from "react";

import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
const ConfessSVG = () => (
  <svg
    aria-hidden="true"
    data-visualcompletion="ignore-dynamic"
    role="none"
    style={{ height: "40px", width: "40px" }}
  >
    <mask id="mask1">
      <circle cx="20" cy="20" fill="white" r="20"></circle>
    </mask>
    <g mask="url(#mask1)">
      <image
        x="0"
        y="0"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        xlinkHref="https://scontent.fsgn19-1.fna.fbcdn.net/v/t1.6435-1/67365937_2141331342826261_8699865959273332736_n.png?stp=cp0_dst-png_p40x40&amp;_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=1eb0c7&amp;_nc_ohc=Aif_zfhjgAsAX8CTMen&amp;tn=yRf3qtRi-Qz2G27y&amp;_nc_ht=scontent.fsgn19-1.fna&amp;oh=00_AT9C7ZG_9fU88a1KDyfhkk-pr_VSnKnlUhLV91k1bGWA0g&amp;oe=6335B7F3"
        style={{ height: "40px", width: "40px" }}
      ></image>
      <circle
        className="stroke-2 stroke-[#ffffff80] fill-[none]"
        cx="20"
        cy="20"
        r="20"
      ></circle>
    </g>
  </svg>
);

const SharePublicSVG = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    className="!block !transition-[color,fill,stroke] !duration-200"
  >
    <title>Đã chia sẻ với Công khai</title>
    <g fillRule="evenodd" transform="translate(-448 -544)">
      <g>
        <path
          d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434"
          transform="translate(354 143.5)"
        ></path>
        <path
          d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096"
          transform="translate(354 143.5)"
        ></path>
        <path
          fillRule="nonzero"
          d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
          transform="translate(354 143.5)"
        ></path>
      </g>
    </g>
  </svg>
);

export const ConfessIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ConfessSVG} {...props} />
);
export const SharePublicIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={SharePublicSVG} {...props} />
);
