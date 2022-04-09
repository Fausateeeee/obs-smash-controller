import * as React from 'react'
import { SVGProps } from 'react'

const SvgSnake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 200 200'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='#ababab'
      d='M109.89 10.33c6.21-.6 13.33-.82 18.52 3.22 3.1 3.1 6.84 5.44 9.84 8.65 4.61-.39 9.22-.94 13.83-1.26 3.34.34 6.27 2.13 8.88 4.11 5.15 3.75 10.38 8.05 13.01 14.02 2.33 5.76 4.81 11.64 5.01 17.93-.19 2.95-1.43 5.66-2.43 8.39-1.22 11.94-1.24 24.03-3.33 35.87 5.37 3.75 7.61 10.45 7.8 16.75-.42 9.22-4.57 18.16-11.24 24.53.84 2.67 3.42 4.47 3.9 7.31 1.82 5.25-1.84 11.97-7.57 12.58 1.25 4.09.69 9.07-2.47 12.18-5.03 4.74-11.89 6.75-18.41 8.51-7.7 2.1-15.6 3.37-23.47 4.66-8.19 2.54-17 2.96-25.28.52-9.57-1.41-19.16-2.93-28.5-5.5-6.22-1.81-13-3.68-17.58-8.51-3.75 1.96-8.27 1.55-11.64-.95-6.81-5.29-12.38-11.96-17.31-18.95-3.81-4.4-2.89-11.78 2.01-14.99 4.97-3.22 9.3-7.17 14.04-10.69-3.84-9.11-2.72-21.11 5.43-27.52-1.16-11.43-2.05-22.88-3.15-34.32-2.63-3.66-5.13-8.28-3.18-12.84 2.84-6.6 5.49-13.28 8.36-19.86 3.69-5.64 10.9-6.88 16.52-9.85 15.57-6.31 31.68-11.79 48.41-13.99m-6.05 6.89c-16.47 3.22-32.36 9-47.61 15.95-2.27 1.32-5.52 1.87-6.43 4.71-2.51 6.08-5.11 12.11-7.57 18.21-1.5 3.47 2.12 6.05 3.42 8.91 1.04 11.65 2.04 23.31 3.12 34.95.1 1.51 1.25 2.68 1.57 4.15-3.81 1.14-6.8 4.22-8.07 7.95-2.06 5.9-.58 12.4 2.19 17.8-5.24 5.42-11.15 10.15-17.44 14.29-2.08 1.19-2.75 4.2-1.23 6.1 5.12 6.84 10.26 13.93 17.36 18.86 1.83 1.16 4.47.49 5.62-1.32 1.92-2.6 3.81-5.23 5.82-7.77-.41 3.47-2.33 7.96.67 10.75 4.79 3.85 10.86 5.48 16.69 7.02 10.22 2.75 20.8 3.63 31.12 5.8 8.67 1.75 16.95-2.02 25.44-2.93 9.97-1.93 20.49-3.4 29.26-8.86 5.48-3.16 1.99-10.36 1.18-15.15 2.43-.04 5.08.87 7.34-.34 1.96-1.2 2.55-4.09 1.22-5.96-1.97-2.79-3.72-5.72-5.36-8.72 7.1-5.81 12.65-14.27 12.88-23.66.15-5.72-2.91-11.8-8.55-13.76 3.02-12.99 2.79-26.52 4.05-39.76.8-2.46 2.27-4.74 2.47-7.36-.08-5.27-2.28-10.15-4.21-14.95-2.26-5.64-7.38-9.36-12.12-12.82-1.75-1-3.44-2.77-5.64-2.29-4.81.4-9.6.89-14.4 1.34-4.69-3.63-8.95-7.79-13.7-11.35-6.19-1.92-12.83-.76-19.09.21Z'
    />
    <path d='M103.84 17.22c6.26-.97 12.9-2.13 19.09-.21 4.75 3.56 9.01 7.72 13.7 11.35 4.8-.45 9.59-.94 14.4-1.34 2.2-.48 3.89 1.29 5.64 2.29 4.74 3.46 9.86 7.18 12.12 12.82 1.93 4.8 4.13 9.68 4.21 14.95-.2 2.62-1.67 4.9-2.47 7.36-1.26 13.24-1.03 26.77-4.05 39.76 5.64 1.96 8.7 8.04 8.55 13.76-.23 9.39-5.78 17.85-12.88 23.66 1.64 3 3.39 5.93 5.36 8.72 1.33 1.87.74 4.76-1.22 5.96-2.26 1.21-4.91.3-7.34.34.81 4.79 4.3 11.99-1.18 15.15-8.77 5.46-19.29 6.93-29.26 8.86-8.49.91-16.77 4.68-25.44 2.93-10.32-2.17-20.9-3.05-31.12-5.8-5.83-1.54-11.9-3.17-16.69-7.02-3-2.79-1.08-7.28-.67-10.75-2.01 2.54-3.9 5.17-5.82 7.77-1.15 1.81-3.79 2.48-5.62 1.32-7.1-4.93-12.24-12.02-17.36-18.86-1.52-1.9-.85-4.91 1.23-6.1 6.29-4.14 12.2-8.87 17.44-14.29-2.77-5.4-4.25-11.9-2.19-17.8 1.27-3.73 4.26-6.81 8.07-7.95-.32-1.47-1.47-2.64-1.57-4.15-1.08-11.64-2.08-23.3-3.12-34.95-1.3-2.86-4.92-5.44-3.42-8.91 2.46-6.1 5.06-12.13 7.57-18.21.91-2.84 4.16-3.39 6.43-4.71 15.25-6.95 31.14-12.73 47.61-15.95m-5.02 5.35c-15.4 3.95-30.66 9.05-44.72 16.51-3.05 6.08-5.53 12.55-7.95 18.92 1.49 2.48 3.41 4.74 4.21 7.58l-.34 1.15c1.01 11.04 1.97 22.09 2.97 33.13.34.19 1.03.56 1.37.74-1.07 1.92.25 4.1.29 6.15-.36.28-1.06.86-1.41 1.14-3.48.07-6.31 2.9-7.18 6.14-1.63 5.74.66 11.74 3.68 16.6-6.14 6.51-13.12 12.21-20.58 17.14 4.85 6.31 9.5 12.98 16.07 17.65 3.27-4.26 6.38-8.64 9.62-12.93 2.05-.21 4.06-.7 6.08-1.11.79 1.17-.45 2.62-.6 3.88-1.32 4.05-2.66 8.28-2.26 12.6 7.24 4.49 15.73 6.16 23.96 7.83 4.71.76 9.41 1.85 14.2 1.97 8.44 2.91 18.21 2.87 26.29-1.14 2.11.84 4.37.07 6.51-.25 9.28-1.84 19.01-3.22 27.15-8.39.97-5.74-2.05-11.04-3.17-16.51 3.53.49 7.04 1.54 10.64 1.15-2.33-4.07-4.53-8.31-7.13-12.17 6.3-3.98 11.47-10.06 13.52-17.31 1.05-3.7 1.19-7.92-.78-11.34-1.41-2.54-4.31-3.94-7.16-3.94.04-2.59.32-5.17.9-7.71.87-1.86.7-4.01 1.06-6 .78-9.46 1.74-18.94 1.98-28.41.3-3.1 2.09-5.76 2.67-8.77-.07-4.05-1.75-7.83-3.15-11.55-2.21-6.33-7.88-10.62-13.48-13.82-5.76-.57-11.57 1.53-17.28.81-5.08-3.54-9.14-8.48-14.44-11.7-7.22-1.21-14.49.52-21.54 1.96Z' />
    <path
      fill='#342928'
      d='M98.82 22.57c7.05-1.44 14.32-3.17 21.54-1.96 5.3 3.22 9.36 8.16 14.44 11.7 5.71.72 11.52-1.38 17.28-.81 5.6 3.2 11.27 7.49 13.48 13.82 1.4 3.72 3.08 7.5 3.15 11.55-.58 3.01-2.37 5.67-2.67 8.77-14.33-.03-28.66.02-42.99-.03-1.58.04-3.27-.14-4.68.7-6.1 3.4-12.13 6.92-18.26 10.27 1.25-3.72 2.98-7.25 4.31-10.94-2.96.1-6.15-.55-8.88.89-4.08 1.91-7.94 4.27-12.12 5.98 1.64-2.47 4.25-4.21 5.55-6.89-12.87-.01-25.74.04-38.61-.04-.8-2.84-2.72-5.1-4.21-7.58 2.42-6.37 4.9-12.84 7.95-18.92 14.06-7.46 29.32-12.56 44.72-16.51Z'
    />
    <g fill='#898989'>
      <path d='M50.36 65.58c12.87.08 25.74.03 38.61.04-1.3 2.68-3.91 4.42-5.55 6.89 4.18-1.71 8.04-4.07 12.12-5.98 2.73-1.44 5.92-.79 8.88-.89-1.33 3.69-3.06 7.22-4.31 10.94 6.13-3.35 12.16-6.87 18.26-10.27 1.41-.84 3.1-.66 4.68-.7 14.33.05 28.66 0 42.99.03-.24 9.47-1.2 18.95-1.98 28.41-.36 1.99-.19 4.14-1.06 6-6.11 2.01-12.6 2.29-18.96 2.83-19.99 1.16-40.05 1.08-60.06.56-9.89-.56-19.97-.37-29.62-2.84-.34-.18-1.03-.55-1.37-.74-1-11.04-1.96-22.09-2.97-33.13l.34-1.15ZM29.16 147.77c7.46-4.93 14.44-10.63 20.58-17.14 2.28 3.36 5.19 6.23 8.45 8.63-2.51 4.32-4.54 8.92-7.56 12.94 1.3.52 2.71.62 4.22.29-3.24 4.29-6.35 8.67-9.62 12.93-6.57-4.67-11.22-11.34-16.07-17.65Z' />
    </g>
    <path
      fill='#332a28'
      d='M144.04 102.88c6.36-.54 12.85-.82 18.96-2.83-.58 2.54-.86 5.12-.9 7.71-1.03 1.49-.87 3.43-1.31 5.13-1.72 8.64-3.77 17.28-7.09 25.45-1.44-.59-1.8-1.67-1.08-3.25.99-7.31 1.63-14.67 1.68-22.05-.09-2.55.01-5.28-1.27-7.58-8.73 2.53-17.83 5.22-27.01 3.69-6.12-.54-11.79-3.85-18.04-3.22-7.76.6-15.09 4.16-22.95 3.84-7.43-.03-14.54-2.39-21.63-4.32-1.39 3.31-1 6.99-.97 10.5.5 8.55 1.55 17.06 2.91 25.51l-.52.51c-3.84-11.12-7.51-22.35-9.85-33.9-.43-.04-1.3-.13-1.73-.18.35-.28 1.05-.86 1.41-1.14-.04-2.05-1.36-4.23-.29-6.15 9.65 2.47 19.73 2.28 29.62 2.84 20.01.52 40.07.6 60.06-.56Z'
    />
    <path
      fill='#f3c59e'
      d='M62.43 115.95c-.03-3.51-.42-7.19.97-10.5 7.09 1.93 14.2 4.29 21.63 4.32 7.86.32 15.19-3.24 22.95-3.84 6.25-.63 11.92 2.68 18.04 3.22 9.18 1.53 18.28-1.16 27.01-3.69 1.28 2.3 1.18 5.03 1.27 7.58-.05 7.38-.69 14.74-1.68 22.05-.72 1.58-.36 2.66 1.08 3.25-.45 1.06-.72 2.19-1.06 3.29-2.54 4.9-3.18 10.81-6.98 15.03-6.77 7.61-14.34 14.64-23.14 19.86-8.08 4.01-17.85 4.05-26.29 1.14-10.04-4.98-18.29-12.9-25.71-21.17-3.68-3.84-3.82-9.64-6.46-13.96l.76-.56.52-.51c-1.36-8.45-2.41-16.96-2.91-25.51Z'
    />
    <path
      fill='#f3b97b'
      d='M46.06 114.03c.87-3.24 3.7-6.07 7.18-6.14.43.05 1.3.14 1.73.18 2.34 11.55 6.01 22.78 9.85 33.9l-.76.56c-2.08-.87-4.07-1.93-5.87-3.27-3.26-2.4-6.17-5.27-8.45-8.63-3.02-4.86-5.31-10.86-3.68-16.6Z'
    />
    <path
      fill='#f4b97c'
      d='M160.79 112.89c.44-1.7.28-3.64 1.31-5.13 2.85 0 5.75 1.4 7.16 3.94 1.97 3.42 1.83 7.64.78 11.34-2.05 7.25-7.22 13.33-13.52 17.31-1.24.48-2.44 2.17-3.88 1.28.34-1.1.61-2.23 1.06-3.29 3.32-8.17 5.37-16.81 7.09-25.45Z'
    />
    <path
      fill='#342927'
      d='M50.63 152.2c3.02-4.02 5.05-8.62 7.56-12.94 1.8 1.34 3.79 2.4 5.87 3.27 2.64 4.32 2.78 10.12 6.46 13.96 7.42 8.27 15.67 16.19 25.71 21.17-4.79-.12-9.49-1.21-14.2-1.97-8.23-1.67-16.72-3.34-23.96-7.83-.4-4.32.94-8.55 2.26-12.6.15-1.26 1.39-2.71.6-3.88-2.02.41-4.03.9-6.08 1.11-1.51.33-2.92.23-4.22-.29Z'
    />
    <path
      fill='#332928'
      d='M152.64 141.63c1.44.89 2.64-.8 3.88-1.28 2.6 3.86 4.8 8.1 7.13 12.17-3.6.39-7.11-.66-10.64-1.15 1.12 5.47 4.14 10.77 3.17 16.51-8.14 5.17-17.87 6.55-27.15 8.39-2.14.32-4.4 1.09-6.51.25 8.8-5.22 16.37-12.25 23.14-19.86 3.8-4.22 4.44-10.13 6.98-15.03Z'
    />
  </svg>
)

export default SvgSnake
