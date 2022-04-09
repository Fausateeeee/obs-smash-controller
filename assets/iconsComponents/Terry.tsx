import * as React from 'react'
import { SVGProps } from 'react'

const SvgTerry = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 200 200'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='#000100'
      d='M88.88 8.85c11.9-4.31 25.37-4.17 37.22.29 12.86 4.61 24.6 12.03 34.95 20.9 4.8 3.88 6.58 10.08 8.2 15.78 3.15 12.42 4.67 25.3 4.19 38.11.79 3.56 2.37 6.91 3.04 10.51 2.21 8.66 1.69 17.67 1.56 26.52-.43 5.67-1.24 11.45-3.2 16.8-1.96 3.34-6.58 2.26-8.45-.6-1.64 4.09-3.52 8.36-6.89 11.32-2.18 1.6-4.87.34-6.64-1.22-3.85 5.86-8.71 10.97-13.54 16.02-5.66 5.51-11.59 11.1-18.95 14.22-8.35 3.08-17.73 3.08-26.13.18-5.29-2.02-9.7-5.67-14-9.25-3.35.85-6.77-.24-10.09.24-12.17 3.8-22.03 12.92-29.03 23.33-1.54 3.22-7.47 3.14-8.48-.47-1.6-4.48-1.61-9.35-1-14.02-1.91-.03-4.2-.03-5.37-1.86-2.01-2.87.09-6.29 1.29-9.04 4.97-10 15.44-15.73 25.82-18.62-1.37-2.8-2.7-5.62-3.97-8.46-.53 2.38-.84 4.85-1.84 7.1-1.79 3.11-7.13 2.59-8.12-.93-3.84-12.24-4.59-25.32-3.02-38.02-3.95.66-8.03 1.71-12.02.9-2.86-.84-2.92-4.17-2.36-6.58 1.41-2.02 3.99-2.72 5.96-4.07 5.36-3.37 10.29-8.06 12.73-13.97-.44-14.38 1.28-28.93 5.54-42.7 1.35-3.91 3.03-7.94 6.25-10.69 10.69-9.32 22.93-17.03 36.35-21.72m3.96 3.41C79.5 16.37 67.41 23.9 56.71 32.76c-4.47 3.33-5.93 9.01-7.51 14.06-1.17 3.3-.87 6.98-2.44 10.15-.57 8.28-1.67 16.5-2.27 24.76.26-.03.78-.08 1.04-.11.04 1.02.17 2.01.39 2.99-4.2 8.63-11.36 15.52-19.91 19.79 5.66-.22 11.36-1.23 16.45-3.83-3.51 14.27-2.77 29.44 1.16 43.55 1.77-6.33 2.89-12.95 5.89-18.86 2.67 8.09 5.07 16.39 9.72 23.63-.18-5.36-.24-10.73.33-16.07.51.38 1.54 1.14 2.05 1.53 1.38 4.27 2.6 8.66 4.84 12.59-.56 1.07-.93 2.2-1.12 3.39-8.38 1.26-16.95 3.16-24.11 7.91-5.36 3.35-9.27 8.63-11.37 14.56 2.74-2.78 6.2-4.63 9.9-5.77-3.19 7.09-5.42 15.29-2.77 22.91 6.73-10.09 15.82-18.97 27.03-23.89 2.82-1.12 5.73-2.54 8.85-2.18 2.75.96 5.66.24 8.32-.63l-1-1.02c5.11 4.55 10.34 9.43 16.96 11.64 8.94 2.31 19.28 1.99 26.99-3.59 8.42-5.82 15.34-13.49 21.89-21.27 3.73-4.21 4.99-9.85 6.86-15 1.34-.73 2.68-1.45 4.02-2.18.45 4.32.14 8.66.07 13 3.63-4.66 5.99-10.19 7.35-15.91.46-2.05 1.22-4.01 2.28-5.82 1.73 3.91 2.97 8 4.37 12.03 4.53-16.65 4.1-34.89-2.55-50.93l-.38.67c.17-.76.51-2.28.67-3.04l.79.17c.45-7.44-1.57-14.69-1.87-22.1-1.01-6.41-2.41-12.76-4.45-18.92-1.3-2.6-2.38-5.48-4.73-7.34-12.52-10.7-27.18-19.39-43.36-23.04-7.42-1.07-15.14-.85-22.25 1.67Z'
    />
    <path
      fill='#ed0000'
      d='M92.84 12.26c7.11-2.52 14.83-2.74 22.25-1.67 16.18 3.65 30.84 12.34 43.36 23.04 2.35 1.86 3.43 4.74 4.73 7.34 2.04 6.16 3.44 12.51 4.45 18.92.3 7.41 2.32 14.66 1.87 22.1l-.79-.17c-.69-.16-2.07-.47-2.76-.63-1.63 3.15-2.9 6.64-5.48 9.17-2.25 2.16-5.3.58-7.77-.19-17.11-6.44-35.65-7.96-53.79-7.37-12.49.96-25.04 2.68-36.81 7.16-2.48.61-5.41 2.6-7.8.78-3-2.38-4.26-6.19-6.17-9.39-.65.07-1.95.21-2.6.27-.26.03-.78.08-1.04.11.6-8.26 1.7-16.48 2.27-24.76 1.57-3.17 1.27-6.85 2.44-10.15 1.58-5.05 3.04-10.73 7.51-14.06 10.7-8.86 22.79-16.39 36.13-20.5M59.52 37.62c-2.6 1.51-3.13 4.67-3.99 7.3-2.94 11.09-3.68 22.61-4.13 34.03 33.26-20.64 78.01-20.55 111.33-.09-.15-7.7-.85-15.38-1.83-23.01-1.11-5.75-1.76-11.86-4.73-17.01-5.58-4.5-12.21-7.51-18.74-10.36-12.39-4.82-25.97-8.02-39.27-5.84-13.78 2.01-27.09 7.21-38.64 14.98Z'
    />
    <path
      fill='#fff'
      d='M59.52 37.62c11.55-7.77 24.86-12.97 38.64-14.98 13.3-2.18 26.88 1.02 39.27 5.84 6.53 2.85 13.16 5.86 18.74 10.36 2.97 5.15 3.62 11.26 4.73 17.01.98 7.63 1.68 15.31 1.83 23.01-33.32-20.46-78.07-20.55-111.33.09.45-11.42 1.19-22.94 4.13-34.03.86-2.63 1.39-5.79 3.99-7.3Z'
    />
    <path
      fill='#f2efee'
      d='M45.53 81.62c.65-.06 1.95-.2 2.6-.27 1.91 3.2 3.17 7.01 6.17 9.39 2.39 1.82 5.32-.17 7.8-.78 11.77-4.48 24.32-6.2 36.81-7.16 18.14-.59 36.68.93 53.79 7.37 2.47.77 5.52 2.35 7.77.19 2.58-2.53 3.85-6.02 5.48-9.17.69.16 2.07.47 2.76.63-.16.76-.5 2.28-.67 3.04-1.85 3.11-3.48 6.62-6.5 8.78-3.24 1.97-7.15.57-10.4-.64-.3-.11-.9-.31-1.2-.41-4.63-1.5-9.31-2.92-14.09-3.89-8.37-1.52-16.83-2.68-25.36-2.5-6-.02-12.03-.15-18 .55-4.03.57-8.05 1.27-12.09 1.78-4.24.46-8.38 1.55-12.39 2.97-4.65 1.3-9.4 4.09-14.34 2.72-3.81-1.93-5.62-6.14-7.75-9.61-.22-.98-.35-1.97-.39-2.99Z'
    />
    <g fill='#dfc046'>
      <path d='m168.04 84.86.38-.67c6.65 16.04 7.08 34.28 2.55 50.93-1.4-4.03-2.64-8.12-4.37-12.03a20.275 20.275 0 0 0-2.28 5.82c-1.36 5.72-3.72 11.25-7.35 15.91.07-4.34.38-8.68-.07-13-.72-6.94-.5-13.97-2.01-20.81-.95-6.07-2.84-11.94-3.75-18.01 3.25 1.21 7.16 2.61 10.4.64 3.02-2.16 4.65-5.67 6.5-8.78ZM26.01 104.4c8.55-4.27 15.71-11.16 19.91-19.79 2.13 3.47 3.94 7.68 7.75 9.61 4.94 1.37 9.69-1.42 14.34-2.72l-.4 1.19c-3.89 13.09-7.12 26.47-8.05 40.13-.57 5.34-.51 10.71-.33 16.07-4.65-7.24-7.05-15.54-9.72-23.63-3 5.91-4.12 12.53-5.89 18.86-3.93-14.11-4.67-29.28-1.16-43.55-5.09 2.6-10.79 3.61-16.45 3.83Z' />
    </g>
    <path
      fill='#ddc144'
      d='M92.49 86.75c5.97-.7 12-.57 18-.55 1.07 16.48 4 32.78 7.45 48.92-9.48-9.04-16.4-20.57-21.02-32.77-.96-2.55-1.89-5.11-2.6-7.75-.63-2.61-1.2-5.24-1.83-7.85Z'
    />
    <path
      fill='#ffe2b3'
      d='M110.49 86.2c8.53-.18 16.99.98 25.36 2.5-6.55 1.42-12.05 5.91-18.82 6.64-1.88 2.63-3.05 5.66-3.68 8.83 12.08-4.16 23.89-9.64 36.59-11.58.3.1.9.3 1.2.41.91 6.07 2.8 11.94 3.75 18.01 1.51 6.84 1.29 13.87 2.01 20.81-1.34.73-2.68 1.45-4.02 2.18-1.87 5.15-3.13 10.79-6.86 15-6.55 7.78-13.47 15.45-21.89 21.27-7.71 5.58-18.05 5.9-26.99 3.59-6.62-2.21-11.85-7.09-16.96-11.64-4.94-4.76-9.55-9.85-13.73-15.28-2.24-3.93-3.46-8.32-4.84-12.59-.51-.39-1.54-1.15-2.05-1.53.93-13.66 4.16-27.04 8.05-40.13 9.98 2.55 19.7 5.97 29.31 9.66 4.62 12.2 11.54 23.73 21.02 32.77-3.45-16.14-6.38-32.44-7.45-48.92Z'
    />
    <path
      fill='#ffe3b3'
      d='M80.4 88.53c4.04-.51 8.06-1.21 12.09-1.78.63 2.61 1.2 5.24 1.83 7.85-4.73-1.81-9.25-4.12-13.92-6.07Z'
    />
    <path
      fill='#766524'
      d='M68.01 91.5c4.01-1.42 8.15-2.51 12.39-2.97 4.67 1.95 9.19 4.26 13.92 6.07.71 2.64 1.64 5.2 2.6 7.75-9.61-3.69-19.33-7.11-29.31-9.66l.4-1.19Z'
    />
    <path
      fill='#756527'
      d='M117.03 95.34c6.77-.73 12.27-5.22 18.82-6.64 4.78.97 9.46 2.39 14.09 3.89-12.7 1.94-24.51 7.42-36.59 11.58.63-3.17 1.8-6.2 3.68-8.83Z'
    />
    <path
      fill='#00a2ed'
      d='M66.45 146.94c4.18 5.43 8.79 10.52 13.73 15.28l1 1.02c-2.66.87-5.57 1.59-8.32.63-5.23-2.23-8.26-7.95-7.53-13.54.19-1.19.56-2.32 1.12-3.39Z'
    />
    <path
      fill='#d3b542'
      d='M65.33 150.33c-.73 5.59 2.3 11.31 7.53 13.54-3.12-.36-6.03 1.06-8.85 2.18-11.21 4.92-20.3 13.8-27.03 23.89-2.65-7.62-.42-15.82 2.77-22.91-3.7 1.14-7.16 2.99-9.9 5.77 2.1-5.93 6.01-11.21 11.37-14.56 7.16-4.75 15.73-6.65 24.11-7.91Z'
    />
  </svg>
)

export default SvgTerry