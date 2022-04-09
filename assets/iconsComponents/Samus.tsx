import * as React from 'react'
import { SVGProps } from 'react'

const SvgSamus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 200 200'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='#020101'
      d='M66.93 35.89c16.52-9.58 37.23-11.66 55.2-5.02 16.67 5.61 30.96 18.95 35.98 36.02 1.01 4.44 5.19 6.81 7.91 10.1 6.86 7.79 13.22 16.81 14.53 27.38 2.21 13.59-2.54 28.98-14.35 36.83-3.95 2.96-9.39 3.43-12.69 7.31-10.57 10.84-24.79 17.71-39.64 20.25-1.32 1.88-2.06 5.13-4.85 5.12-6 .23-12.04.24-18.04 0-2.79.01-3.53-3.24-4.84-5.12-13.71-2.37-26.87-8.34-37.13-17.82-2.46-2.21-4.57-5.03-7.85-6.07-5.93-2.14-11.31-5.88-15.02-11-6.92-9.27-8.6-21.67-6.07-32.79 1.98-9.27 7.85-17.08 13.92-24.11 2.71-3.3 6.88-5.66 7.9-10.08 3.92-13.08 13.23-24.26 25.04-31m9.77-.16c-13.36 5.12-24.52 15.65-29.91 28.96l-.37-.43c-.41 1.73-.83 3.46-1.27 5.18-.37 1.19-.7 2.39-.98 3.6-1.6 1.26-4.32 2.15-4.66 4.36-7.94 7.68-14.93 17.42-16.13 28.7-1.22 5.63.06 11.4 1.59 16.83 2.97 9.22 10.88 17.09 20.59 18.69 11.08 12.69 26.79 21.43 43.62 23.14.69 1.67 1.36 3.34 2.04 5.01 5.83.11 11.67.16 17.51-.02.66-1.66 1.32-3.31 1.99-4.96 16.62-1.78 32.31-10.21 43.22-22.84 7.69-1.68 14.7-6.6 18.51-13.54 3.8-6.68 4.81-14.62 4.02-22.18-1.03-11.32-8.1-21.04-15.99-28.76-.42-2.2-3.12-3.15-4.73-4.44a40.3 40.3 0 0 0-1.18-3.57c-.38-1.76-.75-3.52-1.11-5.28l-.42.48c-2.75-6.36-6.51-12.34-11.54-17.16-11.18-11.02-27.05-16.23-42.53-16.56-7.57.68-15.22 1.78-22.27 4.79Z'
    />
    <path
      fill='#e42e2a'
      d='M76.7 35.73c7.05-3.01 14.7-4.11 22.27-4.79 15.48.33 31.35 5.54 42.53 16.56 5.03 4.82 8.79 10.8 11.54 17.16-2.43 3.06-5.79 5.8-6.42 9.86-.97 6.3-1.7 12.66-1.68 19.04 2.56-6.15 2.64-12.91 4.39-19.27.57-2.57 3.28-3.52 5.24-4.83a40.3 40.3 0 0 1 1.18 3.57c2.02 9.78.69 19.69.22 29.53 4.06-7.72 3.71-16.65 4.51-25.09 7.89 7.72 14.96 17.44 15.99 28.76.79 7.56-.22 15.5-4.02 22.18-3.81 6.94-10.82 11.86-18.51 13.54 2.26-2.67 4.44-5.42 6.95-7.86 1.89-1.67 4.52-3.23 4.47-6.1.92-5.85-5.07-11.96-10.94-9.59-3.36 1.08-3.93 4.79-4.46 7.77-.96 4.33-4.22 7.36-7.63 9.9-7.26 3.54-13.83 8.32-20.23 13.21-2.44 1.37-5.32 2.47-6.8 5.01-1.91 3.32-3.11 6.98-4.58 10.5-.67 1.65-1.33 3.3-1.99 4.96-5.84.18-11.68.13-17.51.02-.68-1.67-1.35-3.34-2.04-5.01-1.46-3.49-2.67-7.12-4.59-10.41-1.47-2.51-4.28-3.67-6.7-5.03-6.44-4.83-12.92-9.77-20.27-13.16-3.42-2.56-6.7-5.61-7.62-9.97-.56-3.47-1.84-7.98-6.12-8.12-6.63-1.36-11.47 7.09-8.67 12.64.98 1.42 2.53 2.3 3.84 3.39 2.36 2.34 4.4 4.97 6.51 7.52-9.71-1.6-17.62-9.47-20.59-18.69-1.53-5.43-2.81-11.2-1.59-16.83 1.2-11.28 8.19-21.02 16.13-28.7.5 9.4.77 19.12 5.18 27.68-1.48-10.61-2.78-21.43-.52-32.04.28-1.21.61-2.41.98-3.6 2.01 1.32 4.92 2.18 5.51 4.83 1.34 5.29 1.96 10.74 3.06 16.08 1 4.8.32 9.73.88 14.57.58 3.11.56 6.97 3.61 8.83 11.37 8.32 22.78 16.6 34.08 25 2.76 1.69 2.33 5.21 2.77 7.98.04.55.14 1.65.19 2.2.11 1.42.24 2.83.39 4.25.05.5.16 1.51.21 2.01.1 1.16.18 2.33.25 3.5.02.54.07 1.63.1 2.17.03.51.1 1.53.13 2.04 2.49.23 4.99.31 7.48.24.08-.54.25-1.6.33-2.13.07-.53.2-1.59.27-2.12.16-1.26.3-2.52.47-3.78l.28-2.09c.16-1.35.29-2.7.39-4.05.16-2.84.12-5.75 1.05-8.46.99-1.32 2.34-2.29 3.64-3.28 11.77-8.47 23.42-17.11 35.09-25.71.03-5.95.59-11.89.93-17.82-14.08 5.81-28.91 10.41-44.28 10.63-16.23.37-32.2-3.99-46.92-10.58.27-4.28-.64-8.52-1.02-12.77-.41-3.13-.43-6.4-1.72-9.34-1.47-2.59-3.63-4.68-5.53-6.95 5.39-13.31 16.55-23.84 29.91-28.96Z'
    />
    <g fill='#6a0c10'>
      <path d='m46.42 64.26.37.43c1.9 2.27 4.06 4.36 5.53 6.95 1.29 2.94 1.31 6.21 1.72 9.34.38 4.25 1.29 8.49 1.02 12.77-.45 3.71-.46 7.44-.46 11.17-.56-4.84.12-9.77-.88-14.57-1.1-5.34-1.72-10.79-3.06-16.08-.59-2.65-3.5-3.51-5.51-4.83.44-1.72.86-3.45 1.27-5.18ZM155.75 73.03c1.61 1.29 4.31 2.24 4.73 4.44-.8 8.44-.45 17.37-4.51 25.09.47-9.84 1.8-19.75-.22-29.53Z' />
    </g>
    <path
      fill='#770b0b'
      d='m153.04 64.66.42-.48c.36 1.76.73 3.52 1.11 5.28-1.96 1.31-4.67 2.26-5.24 4.83-1.75 6.36-1.83 13.12-4.39 19.27-.02-6.38.71-12.74 1.68-19.04.63-4.06 3.99-6.8 6.42-9.86Z'
    />
    <g fill='#620b0e'>
      <path d='M39.51 77.4c.34-2.21 3.06-3.1 4.66-4.36-2.26 10.61-.96 21.43.52 32.04-4.41-8.56-4.68-18.28-5.18-27.68ZM35.21 130.71c-2.8-5.55 2.04-14 8.67-12.64 4.28.14 5.56 4.65 6.12 8.12-1.38-2.01-2.59-4.26-4.59-5.72-3.37-1.87-8 .49-8.91 4.14-1.04 3.38 1.15 6.56 2.55 9.49-1.31-1.09-2.86-1.97-3.84-3.39ZM154.42 118.4c5.87-2.37 11.86 3.74 10.94 9.59.05 2.87-2.58 4.43-4.47 6.1 1.28-2.83 3.26-5.79 2.58-9.03-.66-3.88-5.43-6.5-8.97-4.65-2.04 1.43-3.19 3.74-4.54 5.76.53-2.98 1.1-6.69 4.46-7.77ZM57.62 136.16c7.35 3.39 13.83 8.33 20.27 13.16-7.76-2.55-14.66-7.28-20.27-13.16ZM122.1 149.28c6.4-4.89 12.97-9.67 20.23-13.21-5.58 5.92-12.48 10.64-20.23 13.21Z' />
    </g>
    <path
      fill='#a4ea97'
      d='M54.6 104.92c0-3.73.01-7.46.46-11.17 14.72 6.59 30.69 10.95 46.92 10.58 15.37-.22 30.2-4.82 44.28-10.63-.34 5.93-.9 11.87-.93 17.82-11.67 8.6-23.32 17.24-35.09 25.71-1.3.99-2.65 1.96-3.64 3.28-.93 2.71-.89 5.62-1.05 8.46-1.5-4.15-7.11-1.83-10.49-2.24-.44-2.77-.01-6.29-2.77-7.98-11.3-8.4-22.71-16.68-34.08-25-3.05-1.86-3.03-5.72-3.61-8.83Z'
    />
    <g fill='#b4b4b4'>
      <path d='M36.5 124.61c.91-3.65 5.54-6.01 8.91-4.14 2 1.46 3.21 3.71 4.59 5.72.92 4.36 4.2 7.41 7.62 9.97 5.61 5.88 12.51 10.61 20.27 13.16 2.42 1.36 5.23 2.52 6.7 5.03 1.92 3.29 3.13 6.92 4.59 10.41-16.83-1.71-32.54-10.45-43.62-23.14-2.11-2.55-4.15-5.18-6.51-7.52-1.4-2.93-3.59-6.11-2.55-9.49ZM154.5 120.41c3.54-1.85 8.31.77 8.97 4.65.68 3.24-1.3 6.2-2.58 9.03-2.51 2.44-4.69 5.19-6.95 7.86-10.91 12.63-26.6 21.06-43.22 22.84 1.47-3.52 2.67-7.18 4.58-10.5 1.48-2.54 4.36-3.64 6.8-5.01 7.75-2.57 14.65-7.29 20.23-13.21 3.41-2.54 6.67-5.57 7.63-9.9 1.35-2.02 2.5-4.33 4.54-5.76Z' />
    </g>
    <path
      fill='#4e2422'
      d='M95.06 146.73c3.38.41 8.99-1.91 10.49 2.24-3.43.05-6.87.04-10.3-.04-.05-.55-.15-1.65-.19-2.2Z'
    />
    <path
      fill='#b7b0af'
      d='M95.25 148.93c3.43.08 6.87.09 10.3.04-.1 1.35-.23 2.7-.39 4.05-3.18-.03-6.35.01-9.52.16-.15-1.42-.28-2.83-.39-4.25Z'
    />
    <path
      fill='#4f201f'
      d='M95.64 153.18c3.17-.15 6.34-.19 9.52-.16l-.28 2.09c-3 .25-6.02.26-9.03.08-.05-.5-.16-1.51-.21-2.01Z'
    />
    <path
      fill='#b3b3b0'
      d='M95.85 155.19c3.01.18 6.03.17 9.03-.08-.17 1.26-.31 2.52-.47 3.78-2.77-.19-5.54-.24-8.31-.2-.07-1.17-.15-2.34-.25-3.5Z'
    />
    <path
      fill='#4e2b2c'
      d='M96.1 158.69c2.77-.04 5.54.01 8.31.2-.07.53-.2 1.59-.27 2.12-2.65-.01-5.29-.06-7.94-.15-.03-.54-.08-1.63-.1-2.17Z'
    />
    <path
      fill='#d39e95'
      d='M96.2 160.86c2.65.09 5.29.14 7.94.15-.08.53-.25 1.59-.33 2.13-2.49.07-4.99-.01-7.48-.24-.03-.51-.1-1.53-.13-2.04Z'
    />
  </svg>
)

export default SvgSamus