import * as React from 'react'
import { SVGProps } from 'react'

const SvgMario = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 200 200'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='#000100'
      d='M55.95 37c13.48-10.75 30.57-18.13 48.08-16.87 17.8 1.44 34.25 10.63 46.87 22.95 9.92 9.83 18.03 22.16 20.47 36.1 1.79 9.8-.06 20.41-5.97 28.55 3.93 3.93 5.77 9.68 5 15.17-1.4 9.72-7.31 18.79-15.88 23.68-5.37 12.45-17.31 20.46-29.42 25.53-9.64 7.66-22.99 10.93-34.98 7.58-5.24-1.48-10.45-3.65-14.58-7.28-12.34-5.14-24.6-13.15-30.08-25.86-8.58-4.87-14.48-13.97-15.86-23.7-.78-5.48 1.09-11.2 4.99-15.13-6.69-9.17-8.05-21.38-5.2-32.19C33.38 60.07 43.69 46.91 55.95 37m34.46-12.33c-2.33 1.35-5.15 1.63-7.78 1.99-1.47 1.55-3.83 1.43-5.58 2.43-17.09 7.63-31.81 21.09-40.02 38.04-1.04 1.66-.92 3.94-2.38 5.4-.55 2.35-.52 5.01-1.96 7.02-.33 4.17-.08 8.37-.11 12.55 1.24 2.21 1.57 4.76 2.12 7.21 1.78 1.87 2.05 5.05 4.52 6.27 1.49.62 2.6 1.86 4.01 2.6-4.2.47-7.63 3.96-8.83 7.91-1.58 4.85-.13 10.08 1.97 14.54 2.68 5.41 6.9 10.44 12.53 12.83.19.24.56.72.75.96 4.9 12.22 16.97 19.48 28.61 24.28 12.19 10.58 32.14 10.59 44.29-.06 12.23-4.79 24.24-12.81 29.33-25.42 8.04-3.89 13.48-12.34 14.73-21.07.95-6-2.66-12.87-8.91-14.12 2.35-1.78 5.6-2.88 6.64-5.87 1.52-3.01 3.11-6.15 3.28-9.53.8-4.18.87-8.7-.04-12.89-.36-4.62-2.41-8.93-4.16-13.22-9.25-18.8-26.65-33.18-46.15-39.91-2.38-.56-4.96-.69-7.07-2.03-6.59-.48-13.2-.63-19.79.09Z'
    />
    <path
      fill='#e51617'
      d='M90.41 24.67c6.59-.72 13.2-.57 19.79-.09 2.11 1.34 4.69 1.47 7.07 2.03 19.5 6.73 36.9 21.11 46.15 39.91 1.75 4.29 3.8 8.6 4.16 13.22-.43 4.28-.86 8.64.04 12.89-.17 3.38-1.76 6.52-3.28 9.53-1.04 2.99-4.29 4.09-6.64 5.87-.32.13-.96.38-1.28.5-2.83-4.18-6.62-8.21-11.77-9.26-.94 2.99-2.67 5.9-5.69 7.15-3.68 1.01-7.55.06-10.96-1.43-7.11-3.08-14.17-6.66-21.93-7.76-9.82-1.74-19.75 1.11-28.62 5.24-5.18 2.15-10.54 5.45-16.37 4.06-2.86-1.1-4.6-3.77-5.96-6.37-4.92.24-7.63 5.4-10.85 8.5l-1.04-.48c-1.41-.74-2.52-1.98-4.01-2.6-2.47-1.22-2.74-4.4-4.52-6.27-.55-2.45-.88-5-2.12-7.21.03-4.18-.22-8.38.11-12.55 1.44-2.01 1.41-4.67 1.96-7.02 1.46-1.46 1.34-3.74 2.38-5.4 8.21-16.95 22.93-30.41 40.02-38.04 1.75-1 4.11-.88 5.58-2.43 2.63-.36 5.45-.64 7.78-1.99M85.6 43.61c-7.83 5.9-13.89 15.35-12.82 25.48.51 3.97 2.12 8.56 6.08 10.31 1.46.13 2.9-.2 4.35-.29l.22-.53c12.05-1.88 24.69-2.25 36.58.77 2.6.68 4.53-1.65 5.82-3.55 2.87-5 2.64-11.17 1.08-16.55-2.93-8.03-9.07-15.24-17.09-18.46-7.96-1.77-17.29-2.2-24.22 2.82Z'
    />
    <path
      fill='#fff'
      d='M85.6 43.61c6.93-5.02 16.26-4.59 24.22-2.82 8.02 3.22 14.16 10.43 17.09 18.46 1.56 5.38 1.79 11.55-1.08 16.55-1.29 1.9-3.22 4.23-5.82 3.55-11.89-3.02-24.53-2.65-36.58-.77l-.22.53c-1.45.09-2.89.42-4.35.29-3.96-1.75-5.57-6.34-6.08-10.31-1.07-10.13 4.99-19.58 12.82-25.48m6.35 2.72c-4.14 7.05-8.4 14.02-12.62 21.02 1.67 2.12 3.59 4.02 5.14 6.23l1.42.24c2.24-5.63 5.2-11.03 7.13-16.79 2.92 1.76 4.62 5.36 7.6 6.8 2.45-2.04 4.24-5.14 7.08-6.56 2.3 5.61 4.88 11.09 7.24 16.66 2.85-1 4.07-4.5 6.51-6.3-4.11-7.23-8.43-14.36-12.82-21.43l-.71.01c-2.52 2.9-4.95 5.9-7.66 8.62-2.38-3-5-5.8-7.54-8.67l-.77.17Z'
    />
    <path
      fill='#e71416'
      d='m91.95 46.33.77-.17c2.54 2.87 5.16 5.67 7.54 8.67 2.71-2.72 5.14-5.72 7.66-8.62l.71-.01c4.39 7.07 8.71 14.2 12.82 21.43-2.44 1.8-3.66 5.3-6.51 6.3-2.36-5.57-4.94-11.05-7.24-16.66-2.84 1.42-4.63 4.52-7.08 6.56-2.98-1.44-4.68-5.04-7.6-6.8-1.93 5.76-4.89 11.16-7.13 16.79l-1.42-.24c-1.55-2.21-3.47-4.11-5.14-6.23 4.22-7 8.48-13.97 12.62-21.02Z'
    />
    <path
      fill='#d52c30'
      d='M167.58 79.74c.91 4.19.84 8.71.04 12.89-.9-4.25-.47-8.61-.04-12.89Z'
    />
    <g fill='#ffdcaa'>
      <path d='M77.45 102.47c8.87-4.13 18.8-6.98 28.62-5.24 7.76 1.1 14.82 4.68 21.93 7.76 3.41 1.49 7.28 2.44 10.96 1.43 3.02-1.25 4.75-4.16 5.69-7.15-.33 7.49-.12 15.05-1.49 22.46 2.96 2.88 6.11 5.58 9.19 8.35 1.17 4.34.61 8.86-.47 13.14-5.09 12.61-17.1 20.63-29.33 25.42-12.15 10.65-32.1 10.64-44.29.06-11.64-4.8-23.71-12.06-28.61-24.28-.19-.24-.56-.72-.75-.96-.81-4.84-1.69-9.98-.04-14.74l.97 1.34c2.64-3.1 5.96-5.73 8.37-8.93-2.07-6.78-2.7-13.91-3.08-20.97 1.36 2.6 3.1 5.27 5.96 6.37 5.83 1.39 11.19-1.91 16.37-4.06m2.86 28.34c-7.65-1.38-15.58-2.21-22.74-5.41-3.75 5.17-1.82 14.74 5.31 15.57-.84 2.86-.13 6.08 2 8.2 3.57 3.84 9.79 3.99 14.06 1.23.13 2.99 1.73 5.89 4.34 7.39 5.42 3.23 12.75 2.12 17.35-2.06 3.97 4.16 10.67 4.93 15.82 2.73 3.21-1.36 5.4-4.53 5.56-8.01 3.13 1.83 7.06 2.54 10.47 1.1 4.25-1.47 6.98-6.28 5.56-10.66 7.14-.61 9.24-10.56 5.19-15.49-6.88 2.64-14.21 3.79-21.43 5.1-3.1-2.06-4.06-6.04-6.99-8.31-5.64-4.26-13.08-5.12-19.9-4.03-6.54 1.42-12.69 6.05-14.6 12.65Z' />
      <path d='M94.3 119.4c7.84-2.28 17.39.36 21.71 7.61 2.12 4.5 1.66 10.42-2.17 13.9-7.81 9.24-24.83 7.09-29.54-4.24-2.98-7.32 2.94-15.27 10-17.27Z' />
    </g>
    <g fill='#5e381a'>
      <path d='M44.27 108.66c3.22-3.1 5.93-8.26 10.85-8.5.38 7.06 1.01 14.19 3.08 20.97-2.41 3.2-5.73 5.83-8.37 8.93l-.97-1.34c-2.91-6.28-4.21-13.19-4.59-20.06ZM144.65 99.27c5.15 1.05 8.94 5.08 11.77 9.26-.64 7.25-.61 14.96-4.07 21.55-3.08-2.77-6.23-5.47-9.19-8.35 1.37-7.41 1.16-14.97 1.49-22.46Z' />
    </g>
    <g fill='#facd9b'>
      <path d='M34.4 116.09c1.2-3.95 4.63-7.44 8.83-7.91l1.04.48c.38 6.87 1.68 13.78 4.59 20.06-1.65 4.76-.77 9.9.04 14.74-5.63-2.39-9.85-7.42-12.53-12.83-2.1-4.46-3.55-9.69-1.97-14.54ZM156.42 108.53c.32-.12.96-.37 1.28-.5 6.25 1.25 9.86 8.12 8.91 14.12-1.25 8.73-6.69 17.18-14.73 21.07 1.08-4.28 1.64-8.8.47-13.14 3.46-6.59 3.43-14.3 4.07-21.55Z' />
    </g>
    <path
      fill='#edc293'
      d='M80.31 130.81c1.91-6.6 8.06-11.23 14.6-12.65 6.82-1.09 14.26-.23 19.9 4.03 2.93 2.27 3.89 6.25 6.99 8.31-.32.08-.95.25-1.27.33.97 4.64-.05 9.74-3.27 13.31-8.1 9.57-24.54 9.79-33.12.76-3.52-3.69-5.08-9.12-3.83-14.09M94.3 119.4c-7.06 2-12.98 9.95-10 17.27 4.71 11.33 21.73 13.48 29.54 4.24 3.83-3.48 4.29-9.4 2.17-13.9-4.32-7.25-13.87-9.89-21.71-7.61Z'
    />
    <path
      fill='#3b2c28'
      d='M62.88 140.97c-7.13-.83-9.06-10.4-5.31-15.57 7.16 3.2 15.09 4.03 22.74 5.41-1.25 4.97.31 10.4 3.83 14.09 8.58 9.03 25.02 8.81 33.12-.76 3.22-3.57 4.24-8.67 3.27-13.31.32-.08.95-.25 1.27-.33 7.22-1.31 14.55-2.46 21.43-5.1 4.05 4.93 1.95 14.88-5.19 15.49 1.42 4.38-1.31 9.19-5.56 10.66-3.41 1.44-7.34.73-10.47-1.1-.16 3.48-2.35 6.65-5.56 8.01-5.15 2.2-11.85 1.43-15.82-2.73-4.6 4.18-11.93 5.29-17.35 2.06-2.61-1.5-4.21-4.4-4.34-7.39-4.27 2.76-10.49 2.61-14.06-1.23-2.13-2.12-2.84-5.34-2-8.2Z'
    />
  </svg>
)

export default SvgMario
