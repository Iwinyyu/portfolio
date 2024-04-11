export default function Logo(fill) {
  return (
    <div className="relative w-[55px] h-[55px]">
      <svg
      viewBox="0 0 600 600"
      fill="#FFC107"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[55px] h-[55px] absolute inset-0 "
    >
      <g clip-path="url(#clip0_192_137)">
        <path
          d="M300 36C367.394 28.6787 464.375 19.2565 455.175 86.4195C448.282 136.74 558.849 168.227 551.079 218.419C540.861 284.424 571.496 317.988 551.079 381.58C534.33 433.748 405.438 490.599 455.175 513.58C513.99 540.757 312.584 627.556 300 564C288.387 505.348 190.761 551.853 144.825 513.58C95.8157 472.748 103.714 414.244 48.9211 381.58C-8.44907 347.381 96.3135 265.482 48.9211 218.419C7.20524 176.994 92.82 59.0005 144.825 86.4195C215.406 123.633 220.676 44.6173 300 36Z"
          stroke="#FFC107"
          stroke-width="50"
        />
      </g>
    </svg>

    <button className="transition duration-300 ease-in-out flex justify-center items-center relative hover:-translate-y-1 hover:-translate-x-1">
    <svg
      viewBox="0 0 600 600"
      fill="rgb(52, 58, 64)"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[55px] h-[55px] inset-0"
    >
      <g clip-path="url(#clip0_192_137)">
        <path
          d="M300 36C367.394 28.6787 464.375 19.2565 455.175 86.4195C448.282 136.74 558.849 168.227 551.079 218.419C540.861 284.424 571.496 317.988 551.079 381.58C534.33 433.748 405.438 490.599 455.175 513.58C513.99 540.757 312.584 627.556 300 564C288.387 505.348 190.761 551.853 144.825 513.58C95.8157 472.748 103.714 414.244 48.9211 381.58C-8.44907 347.381 96.3135 265.482 48.9211 218.419C7.20524 176.994 92.82 59.0005 144.825 86.4195C215.406 123.633 220.676 44.6173 300 36Z"
          stroke="#FFC107"
          stroke-width="50"
        />
      </g>
    </svg>
    <span className="text-2xl textcolor absolute">IY</span>
    </button>
    </div>
  );
}
