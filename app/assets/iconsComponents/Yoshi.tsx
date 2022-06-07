import * as React from 'react'
import { SVGProps } from 'react'

const SvgYoshi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 200 200'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M78.62 33.8c4.98-4.74 12.7-4.66 18.75-2.21 10.58 4.55 17.01 15.57 19.08 26.52 11.38-2.68 23.66-2.71 34.65 1.62 14.65 5.59 26.41 18.22 30.8 33.29 4.98 16.31 1.09 34.97-10.08 47.87-12.07 14.45-32.45 21.37-50.78 16.81-13.07 11.05-31.53 14.67-48.05 10.85-7.23-1.54-13.98-4.66-20.4-8.25-9.42.03-20.06-1.94-26.24-9.75-4.68-6.45-1.96-15.12 2.03-21.19-4.58-3.86-8.65-8.64-10.36-14.49-2.05-6.77-1.23-14.84 3.65-20.24 3.6-4.18 8.93-6.26 14.16-7.54-2.15-5.33-3.6-11.41-1.74-17.03 2.24-5.56 7.86-8.84 13.31-10.62 1.58-9.22 5.91-18.91 14.68-23.29 5.05-2.9 11.02-2.57 16.54-2.35m6.16 1.1c-2.19.51-3.31 2.59-4.51 4.27-6.22-1.9-13.47-1.69-18.83 2.35-6.86 4.97-9.63 13.61-10.34 21.71-5.31.73-10.94 3.42-13.29 8.48-1.78 6.62 1.01 13.48 4.62 18.97-6.17.45-12.77 1.86-17.32 6.35-4.15 4.11-4.9 10.58-3.5 16.04 1.77 6.65 6.87 11.8 12.46 15.51-3.31 4.48-6.71 9.61-6.13 15.46.32 3.86 3.47 6.66 6.65 8.44 5.59 3.02 12.15 4.2 18.46 3.39 4.26 2.53 8.7 4.93 13.44 6.38 17.41 7.13 39.3 4.07 53.1-9.08 18.22 5.68 39.24-1.9 50.38-17.21 9.17-12.07 11.78-28.71 6.9-43.05-4.39-13.36-15.13-24.39-28.31-29.26-11.59-4.37-24.59-3.64-36.22.19-.07-8.68-3.68-17.26-9.8-23.41-4.51-4.61-11.37-7.31-17.76-5.53Z' />
    <path
      fill='#5db432'
      d='M84.78 34.9c6.39-1.78 13.25.92 17.76 5.53 6.12 6.15 9.73 14.73 9.8 23.41 11.63-3.83 24.63-4.56 36.22-.19 13.18 4.87 23.92 15.9 28.31 29.26 4.88 14.34 2.27 30.98-6.9 43.05-11.14 15.31-32.16 22.89-50.38 17.21-2.01-.68-4.01-1.41-5.95-2.28-12.78-6.09-22.93-17.31-28.04-30.47-1.18-2.91-1.64-6.08-3.08-8.87-8.78-11.52-26.86-14.64-38.52-5.62-8.62 6.16-9.8 18.06-7.19 27.6-3.14-7.33-4.77-15.49-3.31-23.42 1.59-8.98 6.76-17.07 13.59-23 2.14-1.8 4.2-4.11 4.03-7.12-.03-5.58-.64-11.18-.02-16.76.71-8.1 3.48-16.74 10.34-21.71 5.36-4.04 12.61-4.25 18.83-2.35 1.2-1.68 2.32-3.76 4.51-4.27Z'
    />
    <path
      fill='#ee582c'
      d='M37.81 71.71c2.35-5.06 7.98-7.75 13.29-8.48-.62 5.58-.01 11.18.02 16.76.17 3.01-1.89 5.32-4.03 7.12-6.83 5.93-12 14.02-13.59 23-1.46 7.93.17 16.09 3.31 23.42 2.78 8.95 8.1 17.39 16.24 22.34-6.31.81-12.87-.37-18.46-3.39-3.18-1.78-6.33-4.58-6.65-8.44-.58-5.85 2.82-10.98 6.13-15.46-5.59-3.71-10.69-8.86-12.46-15.51-1.4-5.46-.65-11.93 3.5-16.04 4.55-4.49 11.15-5.9 17.32-6.35-3.61-5.49-6.4-12.35-4.62-18.97Z'
    />
    <path
      fill='#fff'
      d='M44 105.93c11.66-9.02 29.74-5.9 38.52 5.62 1.44 2.79 1.9 5.96 3.08 8.87 5.11 13.16 15.26 24.38 28.04 30.47-7.55 8.72-19.37 12.3-30.6 12.46-5.55.25-10.99-1.26-16.55-1.1-4.74-1.45-9.18-3.85-13.44-6.38-8.14-4.95-13.46-13.39-16.24-22.34-2.61-9.54-1.43-21.44 7.19-27.6Z'
    />
    <path
      fill='#bec6c6'
      d='M113.64 150.89c1.94.87 3.94 1.6 5.95 2.28-13.8 13.15-35.69 16.21-53.1 9.08 5.56-.16 11 1.35 16.55 1.1 11.23-.16 23.05-3.74 30.6-12.46Z'
    />
  </svg>
)

export default SvgYoshi