import * as React from 'react'
import { SVGProps } from 'react'

const SvgRobin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 200 200'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M80.19 17.19c5.34-1.97 9.58 2.33 12.7 6.04 12.06-2.04 24.99-1.87 36.19 3.58 10.49 4.89 18.55 13.72 24.66 23.37 8.43 13.33 13.93 28.25 18.73 43.2.91 3.35 2.76 6.89 1.51 10.39-1.13 1.65-3.26 2.03-5.09 1.57 1.51 2.86 3.85 7.42.08 9.56-3.9 1.23-8.09-.42-12.03-.9-1.88 9.5-9.15 17.12-17.78 21.06-.08 6.89-.54 14.11 2.26 20.59 3.21 4.42 6.6 8.69 9.91 13.04 1.55 1.94.76 5.06-1.4 6.2-6.36 4.16-13.61 6.85-21.04 8.38-5.86 1.29-11.91.77-17.87.78-3.47.02-6.7-1.53-9.93-2.43-4.97 2.53-10.61 2.64-16.05 2.5-11.3.4-22.58-3.13-32.13-9.08-2.4-1.15-3.28-4.6-1.43-6.62 3.04-3.89 6.07-7.79 8.98-11.78 3.05-6.78 2.74-14.48 2.58-21.78-8.89-4.21-16.36-12.45-17.52-22.48-3.37-5.68-5.37-12.13-5.71-18.74-2.02 2.66-3.95 5.41-6.34 7.76-1.72 1.88-5.08 1.54-6.47-.56-1.16-3.14.35-6.35 1.5-9.25 7.35-18.02 15.24-35.84 23.8-53.32 1.96-3.76 3.76-8.06 7.73-10.13 4-2.38 9.02-1.35 12.89.8 2.36-3.93 3.65-8.75 7.27-11.75m1.93 3.9c-2.89 4.37-4.84 9.29-7.52 13.79-3.26-1.7-6.6-4.86-10.72-3.76-4.47 1.19-6.05 6.02-8.01 9.66-8.82 18.16-17.04 36.63-24.53 55.38-.07.5-.2 1.51-.27 2.01 5.82-6.98 10.89-14.59 15.45-22.45.17 1.19-.7 2.18-.81 3.33-3.06 10.66-2 22.67 4.05 32.1.57 7.88 6.05 14.7 12.69 18.59 1.29.53 2.34 1.95 3.87 1.6.25.36.75 1.1 1 1.47.3 7.32.26 14.75-1.23 21.93l.69.03c-2.2 4.22-5.62 7.69-8.28 11.63-1.03 1.68-3.27 3.05-3.26 5.14 11.71 7.18 26.05 10.43 39.64 7.93 2.49-.27 4.52-2.18 7-2.37 2.65 1.16 5.31 2.4 8.22 2.73 13.02 1.78 26.49-1.46 37.63-8.32l.2-.6c-3.96-5.02-7.68-10.23-11.62-15.25.21-.28.63-.83.85-1.11l-.31-.09c-2.53-6.18-1.53-13.12-1.81-19.65.14-1.43.46-3.07 2.04-3.53 1.34-.17 2.43-1.04 3.6-1.63 7.17-4.35 13.22-12.22 12.4-20.98 4.57 1.39 9.3 2.13 14.04 2.6-3.76-8.2-7.86-16.3-12.89-23.81 6.44 3.06 12.41 7.59 16.31 13.63-4.67-16.12-10.36-32.17-18.95-46.67-6.15-10.23-14.47-19.79-25.68-24.5-10.92-4.74-23.28-4.32-34.74-2.07C88.95 25 86.66 21.6 83 20.58l-.88.51Z' />
    <path d='M74.02 142.01c1.61 1.59 3.23 3.17 4.91 4.69-2.71-1.66-4.89 1.41-7.59 1.34 1.1-1.91 1.9-3.98 2.68-6.03ZM125.44 145.32c1.12-.99 2.21-2.01 3.23-3.1.54 1.84 1.21 3.66 2.24 5.29-2.16.67-3.69-1.35-5.47-2.19Z' />
    <g fill='#cccdd6'>
      <path d='m82.12 21.09.88-.51c3.66 1.02 5.95 4.42 8.17 7.27 11.46-2.25 23.82-2.67 34.74 2.07 11.21 4.71 19.53 14.27 25.68 24.5 8.59 14.5 14.28 30.55 18.95 46.67-3.9-6.04-9.87-10.57-16.31-13.63 5.03 7.51 9.13 15.61 12.89 23.81-4.74-.47-9.47-1.21-14.04-2.6-1.1-.29-3.33-1.18-3.53.65-1.3 6.25-4.25 12.05-8.11 17.12-.48.95-2.03 2.15-.76 3.21-1.17.59-2.26 1.46-3.6 1.63 1.26-8.93 3.42-17.8 3.41-26.85-3.39-2.55-7.35-4.32-11.5-5.19l2.17-.2c-.87-.83-1.84-1.54-2.83-2.22-3.86-2.53-6.74-6.23-10.49-8.9 1.29 3.49 3.87 6.26 6.18 9.09.55.66 1.12 1.3 1.71 1.94 1.77 2.02 3.63 3.98 5.25 6.13-6.96.4-13.29-2.85-19.97-4.16-1.86-3.08-5.73-2.88-8.56-4.55-4.63-3.03-9.6-6.29-11.23-11.92-.48.02-1.45.04-1.93.05 2.22 6.46 5.94 12.26 8.81 18.43-3.01-1.05-5.42-3.23-7.77-5.31-5.08-3.26-8.65-8.16-11.52-13.39-2.19-2.62-2.52-6.35-5.04-8.69-.96 7.08.76 14.15 1.61 21.15-.03.8.06 1.59.27 2.37.45 1.66.95 3.31 1.21 5.02-2.85-.4-4.08-3.49-6.73-4.31.95-.93.08-1.82-.8-2.31-1.49-3.79-2.91-7.62-3.87-11.59-1.19 3.87-2.86 7.58-4.07 11.43-.6 8.01 1.24 15.91 2.28 23.81.72 3.44.79 7.14 2.65 10.23-1.53.35-2.58-1.07-3.87-1.6.28-2.25-1.8-3.68-2.87-5.4-3.48-4.42-5.03-9.88-7.02-15.03-.98.54-1.92 1.15-2.8 1.84-6.05-9.43-7.11-21.44-4.05-32.1.11-1.15.98-2.14.81-3.33-4.56 7.86-9.63 15.47-15.45 22.45.07-.5.2-1.51.27-2.01 7.49-18.75 15.71-37.22 24.53-55.38 1.96-3.64 3.54-8.47 8.01-9.66 4.12-1.1 7.46 2.06 10.72 3.76 2.68-4.5 4.63-9.42 7.52-13.79ZM128.67 142.22c2.3-2.32 4.4-4.81 6.37-7.41.28 6.53-.72 13.47 1.81 19.65-3.02-.57-3.98-3.84-5.44-6.11-.13-.21-.38-.63-.5-.84-1.03-1.63-1.7-3.45-2.24-5.29Z' />
    </g>
    <path
      fill='#fcf1de'
      d='M73.77 75.54c2.52 2.34 2.85 6.07 5.04 8.69 2.87 5.23 6.44 10.13 11.52 13.39l-.24 1.9c-4.75-1.6-9.66-2.83-14.71-2.83-.85-7-2.57-14.07-1.61-21.15Z'
    />
    <path
      fill='#fdf0de'
      d='M89.29 84.5c.48-.01 1.45-.03 1.93-.05 1.63 5.63 6.6 8.89 11.23 11.92 2.83 1.67 6.7 1.47 8.56 4.55 6.68 1.31 13.01 4.56 19.97 4.16-1.62-2.15-3.48-4.11-5.25-6.13.82.07 2.44.22 3.26.29 4.15.87 8.11 2.64 11.5 5.19.01 9.05-2.15 17.92-3.41 26.85-1.58.46-1.9 2.1-2.04 3.53-1.97 2.6-4.07 5.09-6.37 7.41-1.02 1.09-2.11 2.11-3.23 3.1-4.62 4.3-9.62 8.46-15.59 10.74-4.17 1.07-8.56 1.52-12.83.8-7.13-.79-12.81-5.72-18.09-10.16-1.68-1.52-3.3-3.1-4.91-4.69-2.72-2.68-5.27-5.6-6.7-9.2-.25-.37-.75-1.11-1-1.47-1.86-3.09-1.93-6.79-2.65-10.23-1.04-7.9-2.88-15.8-2.28-23.81 1.21-3.85 2.88-7.56 4.07-11.43.96 3.97 2.38 7.8 3.87 11.59-.77.41-3.74 2.47-1.42 2.68.56-.1 1.67-.28 2.22-.37 2.65.82 3.88 3.91 6.73 4.31-.26-1.71-.76-3.36-1.21-5.02 5.14-.4 10.24.38 15.18 1.79-.19-.33-.55-.99-.74-1.33l.24-1.9c2.35 2.08 4.76 4.26 7.77 5.31-2.87-6.17-6.59-11.97-8.81-18.43Z'
    />
    <path
      fill='#eee9df'
      d='M117.84 87.92c3.75 2.67 6.63 6.37 10.49 8.9-1.44.08-2.88.14-4.31.19-2.31-2.83-4.89-5.6-6.18-9.09Z'
    />
    <path
      fill='#bfb6a3'
      d='M75.65 99.06c-.21-.78-.3-1.57-.27-2.37 5.05 0 9.96 1.23 14.71 2.83.19.34.55 1 .74 1.33-4.94-1.41-10.04-2.19-15.18-1.79Z'
    />
    <path
      fill='#a9ab99'
      d='M124.02 97.01c1.43-.05 2.87-.11 4.31-.19.99.68 1.96 1.39 2.83 2.22l-2.17.2c-.82-.07-2.44-.22-3.26-.29-.59-.64-1.16-1.28-1.71-1.94Z'
    />
    <path
      fill='#b6b09d'
      d='M67.91 100.14c-2.32-.21.65-2.27 1.42-2.68.88.49 1.75 1.38.8 2.31-.55.09-1.66.27-2.22.37Z'
    />
    <path
      fill='#fcf0dd'
      d='M149.55 109.32c.2-1.83 2.43-.94 3.53-.65.82 8.76-5.23 16.63-12.4 20.98-1.27-1.06.28-2.26.76-3.21 3.86-5.07 6.81-10.87 8.11-17.12Z'
    />
    <path
      fill='#fff0de'
      d='M52.56 109.31c1.99 5.15 3.54 10.61 7.02 15.03 1.07 1.72 3.15 3.15 2.87 5.4-6.64-3.89-12.12-10.71-12.69-18.59.88-.69 1.82-1.3 2.8-1.84Z'
    />
    <path
      fill='#cccdd7'
      d='M67.32 132.81c1.43 3.6 3.98 6.52 6.7 9.2-.78 2.05-1.58 4.12-2.68 6.03-.16.24-.48.71-.65.94-1.1 2.07-2.87 3.7-3.91 5.79l-.69-.03c1.49-7.18 1.53-14.61 1.23-21.93Z'
    />
    <path
      fill='#171c61'
      d='M109.85 156.06c5.97-2.28 10.97-6.44 15.59-10.74 1.78.84 3.31 2.86 5.47 2.19.12.21.37.63.5.84-.95.36-1.88.77-2.79 1.22-5.35 10.11-15.38 17.78-26.55 20.24-12-1.8-22.66-10.32-28.24-20.99l-3.14.16c.17-.23.49-.7.65-.94 2.7.07 4.88-3 7.59-1.34 5.28 4.44 10.96 9.37 18.09 10.16 4.27.72 8.66.27 12.83-.8Z'
    />
    <path
      fill='#935193'
      d='M131.41 148.35c1.46 2.27 2.42 5.54 5.44 6.11l.31.09c-.22.28-.64.83-.85 1.11 3.94 5.02 7.66 10.23 11.62 15.25l-.2.6c-11.14 6.86-24.61 10.1-37.63 8.32-2.91-.33-5.57-1.57-8.22-2.73-2.48.19-4.51 2.1-7 2.37-13.59 2.5-27.93-.75-39.64-7.93-.01-2.09 2.23-3.46 3.26-5.14 2.66-3.94 6.08-7.41 8.28-11.63 1.04-2.09 2.81-3.72 3.91-5.79l3.14-.16c5.58 10.67 16.24 19.19 28.24 20.99 11.17-2.46 21.2-10.13 26.55-20.24.91-.45 1.84-.86 2.79-1.22Z'
    />
  </svg>
)

export default SvgRobin