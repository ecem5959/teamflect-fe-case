const Expand = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="22" height="22" rx="11" fill="white" />
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="11"
        stroke="#233043"
        strokeWidth="2"
      />
      <g clipPath="url(#clip0_44_1208)">
        <g clipPath="url(#clip1_44_1208)">
          <path
            d="M8 12H16"
            stroke="#233043"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8L12 16"
            stroke="#233043"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_44_1208">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
        <clipPath id="clip1_44_1208">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Expand;
