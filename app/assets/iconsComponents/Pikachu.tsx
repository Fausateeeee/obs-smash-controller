import * as React from 'react'
import { SVGProps } from 'react'

const SvgPikachu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 200 200'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M16.79 31.75c3.88-1.87 8.21.16 11.85 1.7 21.28 9.88 37.46 28.46 48 49.09 14.94-5.53 31.81-5.81 46.76-.18 10.77-20.76 27.13-39.56 48.77-49.27 3.56-1.47 8.07-3.36 11.63-.95 3.18 2.45 2.24 6.96 1.39 10.31-3.12 10.25-8.4 19.67-13.97 28.76-6.32 10.52-14.81 19.57-23.89 27.75 7.9 9.83 11.64 23.08 9.04 35.52-2.29 11.66-10.51 21.53-20.81 27.16-15.55 8.63-34.28 9.94-51.54 6.85-14.16-2.69-28.53-9.73-36.12-22.48-8.68-14.62-5.59-34.08 4.81-47.01-9.64-8.65-18.52-18.34-25.03-29.6-5.21-8.68-10.17-17.67-13-27.44-.9-3.39-1.51-8.17 2.11-10.21m.79 7.52c2.35 9.89 7.47 18.85 12.6 27.53 2.29 3.52 4.12 7.44 7.29 10.28 6.41 7.67 13.27 15.01 21.01 21.38-11.92 11.79-15.89 32.16-6.42 46.55 8.01 11.92 22.31 17.77 36.08 19.75 16.01 2.11 33.3.42 47.25-8.3 9.28-5.72 16.18-15.59 17.1-26.6 1.36-11.61-3.51-23.22-11.54-31.48 7.72-6.23 14.49-13.53 20.83-21.13 1.54-1.32 2.8-2.94 3.88-4.66 5.12-8.1 10.06-16.37 13.64-25.28 1.64-3.97 2.99-8.14 2.84-12.49-8.09-1.03-14.89 4.8-21.55 8.51l.23.61c-15.48 10.98-27.64 26.44-35.54 43.64-16.04-7.17-34.98-6.94-50.97.22-8.01-17.18-20.03-32.75-35.57-43.74l.22-.52c-5.89-3.74-11.94-7.98-18.99-9.03-2.8-.44-2.99 2.81-2.39 4.76Z' />
    <path
      fill='#959289'
      d='M17.58 39.27c-.6-1.95-.41-5.2 2.39-4.76 7.05 1.05 13.1 5.29 18.99 9.03l-.22.52c-1.52 3.43-2.7 7.07-2.82 10.84-.37 7.42-.16 14.93 1.55 22.18-3.17-2.84-5-6.76-7.29-10.28-5.13-8.68-10.25-17.64-12.6-27.53m.95-3.58c.32 3.06.76 6.14 1.95 8.99 3.72 9.65 8.82 18.73 14.57 27.31.09-9.33-1.6-19.16 2.28-27.99-5.8-3.61-11.78-7.75-18.8-8.31Z'
    />
    <path
      fill='#908d86'
      d='M160.59 43.33c6.66-3.71 13.46-9.54 21.55-8.51.15 4.35-1.2 8.52-2.84 12.49-3.58 8.91-8.52 17.18-13.64 25.28-1.08 1.72-2.34 3.34-3.88 4.66.93-3.13 1.37-6.38 1.65-9.62.67-4.72.81-9.52-.02-14.22-.37-3.28-1.44-6.41-2.59-9.47l-.23-.61m1.48.71c3.77 8.96 3.04 18.94 1.93 28.37 4.31-6.02 7.87-12.54 11.18-19.16 2.71-5.52 5.1-11.29 5.99-17.42-7.17.17-13.2 4.63-19.1 8.21Z'
    />
    <g fill='#3a2c27'>
      <path d='M18.53 35.69c7.02.56 13 4.7 18.8 8.31-3.88 8.83-2.19 18.66-2.28 27.99-5.75-8.58-10.85-17.66-14.57-27.31-1.19-2.85-1.63-5.93-1.95-8.99ZM162.07 44.04c5.9-3.58 11.93-8.04 19.1-8.21-.89 6.13-3.28 11.9-5.99 17.42-3.31 6.62-6.87 13.14-11.18 19.16 1.11-9.43 1.84-19.41-1.93-28.37Z' />
    </g>
    <path
      fill='#f3d823'
      d='M125.28 87.58c7.9-17.2 20.06-32.66 35.54-43.64 1.15 3.06 2.22 6.19 2.59 9.47-.3 4.73-.3 9.48.02 14.22-.28 3.24-.72 6.49-1.65 9.62-6.34 7.6-13.11 14.9-20.83 21.13 8.03 8.26 12.9 19.87 11.54 31.48-.92 11.01-7.82 20.88-17.1 26.6-13.95 8.72-31.24 10.41-47.25 8.3-13.77-1.98-28.07-7.83-36.08-19.75-9.47-14.39-5.5-34.76 6.42-46.55-7.74-6.37-14.6-13.71-21.01-21.38-1.71-7.25-1.92-14.76-1.55-22.18.12-3.77 1.3-7.41 2.82-10.84C54.28 55.05 66.3 70.62 74.31 87.8c15.99-7.16 34.93-7.39 50.97-.22m16.09 38.05c-4.73 1.96-7.72 6.63-9.46 11.25-1.3 3.93-1.67 8.75.83 12.29 1.68 2.38 5.16 2.44 7.48 1.02 4.17-2.53 6.7-7.06 8.19-11.58 1-3.71 1.5-8.04-.51-11.5-1.32-2.23-4.35-2.34-6.53-1.48m-86.97 1.88c-2.32 1.67-2.7 4.82-2.67 7.47.25 6.08 3.34 12.49 8.92 15.34 2.59 1.41 6.15.45 7.36-2.33 3.07-6.89.19-15.81-6.12-19.85-2.17-1.4-5.18-2.14-7.49-.63Z'
    />
    <path
      fill='#decf69'
      d='M163.41 53.41c.83 4.7.69 9.5.02 14.22-.32-4.74-.32-9.49-.02-14.22Z'
    />
    <g fill='#d61518'>
      <path d='M141.37 125.63c2.18-.86 5.21-.75 6.53 1.48 2.01 3.46 1.51 7.79.51 11.5-1.49 4.52-4.02 9.05-8.19 11.58-2.32 1.42-5.8 1.36-7.48-1.02-2.5-3.54-2.13-8.36-.83-12.29 1.74-4.62 4.73-9.29 9.46-11.25ZM54.4 127.51c2.31-1.51 5.32-.77 7.49.63 6.31 4.04 9.19 12.96 6.12 19.85-1.21 2.78-4.77 3.74-7.36 2.33-5.58-2.85-8.67-9.26-8.92-15.34-.03-2.65.35-5.8 2.67-7.47Z' />
    </g>
  </svg>
)

export default SvgPikachu