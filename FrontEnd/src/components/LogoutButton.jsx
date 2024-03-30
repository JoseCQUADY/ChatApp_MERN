
const LogoutButton = () => {
  return (
    <div className=" items-start flex justify-start h-12 ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 ml-3 my-2 cursor-pointer">
        <defs>
          <style>
            .cls-1 {'{'}  
            fill: none;
            stroke: #000;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
            {'}'}
          </style>
        </defs>
        <title></title>
        <g id="logout">
          <line class="stroke-current" x1="15.92" x2="28.92" y1="16" y2="16" />
          <path class="stroke-current" d="M23.93,25v3h-16V4h16V7h2V3a1,1,0,0,0-1-1h-18a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1V25Z" />
          <line class="stroke-current" x1="28.92" x2="24.92" y1="16" y2="20" />
          <line class="stroke-current" x1="28.92" x2="24.92" y1="16" y2="12" />
          <line class="stroke-current" x1="24.92" x2="24.92" y1="8.09" y2="6.09" />
          <line class="stroke-current" x1="24.92" x2="24.92" y1="26" y2="24" />
        </g>
      </svg>
    </div>
  )
}

export default LogoutButton