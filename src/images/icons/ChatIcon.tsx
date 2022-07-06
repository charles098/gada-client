import React, { SVGProps } from 'react';

const ChatIcon = ({
    height = '35px',
    width = '30px',
    color = '#4B2F1B',
    ...props
}: React.SVGProps<SVGSVGElement>) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height}
      viewBox="0 0 30 35" 
      fill="none"
      {...props}
    >
        <path d="M15 32.1533C23.2838 32.1533 30 25.5567 30 17.4194C30 9.28211 23.2838 2.68555 15 2.68555C6.71625 2.68555 0 9.28211 0 17.4194C0 21.1239 1.39313 24.5127 3.69375 27.1017C3.51188 29.2402 2.91188 31.585 2.24813 33.3446C2.1 33.7361 2.38687 34.1739 2.76 34.1066C6.99 33.3278 9.50437 32.1322 10.5975 31.5092C12.0336 31.9392 13.5137 32.1557 15 32.1533Z" fill={color}/>
    </svg>
)

export default ChatIcon;