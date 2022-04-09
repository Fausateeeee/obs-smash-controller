import * as React from 'react'
import { SVGProps } from 'react'

const SvgRyu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 200 200'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='#ababab'
      d='M91.85 15.88c4.27-3.52 8.23-8.55 14.19-8.87 6.9.16 10.24 7.04 14.87 11.06 3.49-2.58 7.55-5.92 12.21-4.59 3.99.64 6.67 3.99 8.26 7.46 2.68-1.61 5.96-2.68 9.04-1.63 4.09.96 6.69 4.62 8.72 8.02 3.56-.12 7.43 1.05 9.55 4.09 2.41 3.41 2.64 7.76 3.46 11.72 4.82-.39 10.63 1.11 12.55 6.07 1.94 3.63.58 7.71-1.21 11.08 3.44 5.35 8.5 11.94 5.41 18.56-1 3.22-4.33 4.65-7.29 5.53 1.58 4.06.65 8.83-2.24 12.05-1.78 1.62-4.17 2.19-6.43 2.76 5.57 4.06 8.08 11.15 8.02 17.85-.86 11.02-6.82 21.6-15.84 27.99 1.1 4.21 3.79 8.71 1.79 13.08-.62 2.16-2.39 3.63-3.99 5.06.75 4.52-1.32 9.88-5.97 11.35-4.77 2.43-9.64-.68-14.1-2.25-4.53 4.5-9.74 8.33-15.32 11.43-5.94 3.36-12.85 4.29-19.54 4.89-3.87-.23-7.69-1.05-11.46-1.88-9.01-2.33-16.07-8.68-23.17-14.32-3.75 1.71-8 4.07-12.2 2.52-1.96-.59-3.63-1.82-5.3-2.96-4.13 4.95-7.95 10.18-11.04 15.85-2.89 5.38-10.83 6.79-15.39 2.76-2.86-2.24-3.6-5.93-4.96-9.09-1.83-4.84-4.06-9.54-5.61-14.48-1.58-4.73 1.07-9.78 4.95-12.51-3.03-2.73-5.87-5.67-9.09-8.19-4.95-3.88-4.8-12.54.39-16.16 6.43-4.05 13.74-6.53 21.18-7.94-1.78-7.61-.05-16.65 6.16-21.85 1.26-.94 1.61-2.24 1.04-3.89-5.89 2.12-13.18-2.04-13.61-8.43-.39-5.24 1.1-10.44 2.77-15.35-6.22-1.6-8.69-9.84-5.33-15 2.37-3.44 6.39-5.01 10.02-6.71-1.99-4.98.03-11.3 5.14-13.44-.96-3.93.69-8.68 4.27-10.76 4.86-2.63 10.56-1.36 15.81-1.22-.62-5.66 3.52-11.49 9.46-11.6 6.63.26 13.22 1.33 19.83 1.94m11.35-1.8c-3.19 2.56-6.31 5.2-9.38 7.89-6.99-.47-13.92-1.55-20.9-2.05-2.65-.36-5.06 2.43-4.33 5 .48 2.27 1.27 4.45 1.95 6.65-6.21 0-12.42-.46-18.62-.36-3.56.01-5.19 5.08-2.5 7.29 1.71 1.19 3.67 1.94 5.54 2.85-3.29.54-6.67.69-9.89 1.61-3.04 1.05-3.6 5.97-.57 7.38.58.73 3.05.99 2.24 2.18-4.28 2.55-8.91 4.51-13.16 7.11-2.75 1.56-2.3 6.03.49 7.31 2.36.63 4.85.43 7.25.91-3.13 5.94-5.64 12.43-5.56 19.25-.1 2.86 3.49 5 5.95 3.53 1.97-1.32 3.84-2.79 5.95-3.89.33 5.3 2 10.36 2.69 15.6-2.6 1.25-5.2 2.83-6.61 5.46-3.47 5.82-2.24 13.05.24 19.01-8.71 1.25-17.57 3.31-25.13 8.02-2.34 1.38-2.49 5.06-.36 6.72 4.67 4.25 9.51 8.33 14.22 12.53-2.79 3.23-7.19 5.6-8.43 9.85 1.8 6.89 5.09 13.36 7.6 20.03.85 3.58 6.35 4.15 7.82.76 4.37-7.98 10.05-15.15 16.21-21.82 1.68-1.72 3.17-3.83 5.58-4.59-.69 3.48-3.55 9.53 1.51 11.02 4.23.34 7.95-2.76 12.02-3.74 6.1 5.53 12.41 11.13 20.06 14.42 8.31 3.19 17.68 3.22 26.03.14 7.66-3.08 13.78-8.77 19.97-14.04 4.74-1 8.99 4.77 13.85 2.93 3.85-2.22 1.37-7.06.61-10.31 2.61.42 6.03-.7 6.16-3.79-.44-4.27-2.56-8.16-3.57-12.32 9.01-5.4 16.14-14.84 16.84-25.55.46-5.94-2.59-12.09-8.2-14.5-.34-3.5 1.16-7.13 1.72-10.65 2.39 1.36 6.08 1.92 7.53-1.01 1.36-3.97-1.33-7.75-2.15-11.55 3.49-.65 9.24.28 10.13-4.39-.74-5.39-4.33-10.07-7.8-14.13 1.4-3.03 4.99-6.36 2.82-9.86-3.06-3.37-8.32-1.26-12.31-1.74-.81-4.9-.26-10.42-3.1-14.73-2.41-2.55-5.94-.65-7.71 1.63-1.05-4.02-2.55-8.38-6.13-10.84-4.11-1.9-6.62 2.9-9.54 4.88-1.97-3.16-3.78-6.42-5.96-9.43-1.17-1.71-3.75-2.19-5.45-.99-3.06 1.96-5.67 4.54-8.78 6.43-3.55-3.88-7.04-7.8-10.66-11.6-1.46-1.89-4.43-2.16-6.18-.51Z'
    />
    <path d='M103.2 14.08c1.75-1.65 4.72-1.38 6.18.51 3.62 3.8 7.11 7.72 10.66 11.6 3.11-1.89 5.72-4.47 8.78-6.43 1.7-1.2 4.28-.72 5.45.99 2.18 3.01 3.99 6.27 5.96 9.43 2.92-1.98 5.43-6.78 9.54-4.88 3.58 2.46 5.08 6.82 6.13 10.84 1.77-2.28 5.3-4.18 7.71-1.63 2.84 4.31 2.29 9.83 3.1 14.73 3.99.48 9.25-1.63 12.31 1.74 2.17 3.5-1.42 6.83-2.82 9.86 3.47 4.06 7.06 8.74 7.8 14.13-.89 4.67-6.64 3.74-10.13 4.39.82 3.8 3.51 7.58 2.15 11.55-1.45 2.93-5.14 2.37-7.53 1.01-.56 3.52-2.06 7.15-1.72 10.65 5.61 2.41 8.66 8.56 8.2 14.5-.7 10.71-7.83 20.15-16.84 25.55 1.01 4.16 3.13 8.05 3.57 12.32-.13 3.09-3.55 4.21-6.16 3.79.76 3.25 3.24 8.09-.61 10.31-4.86 1.84-9.11-3.93-13.85-2.93-6.19 5.27-12.31 10.96-19.97 14.04-8.35 3.08-17.72 3.05-26.03-.14-7.65-3.29-13.96-8.89-20.06-14.42-4.07.98-7.79 4.08-12.02 3.74-5.06-1.49-2.2-7.54-1.51-11.02-2.41.76-3.9 2.87-5.58 4.59-6.16 6.67-11.84 13.84-16.21 21.82-1.47 3.39-6.97 2.82-7.82-.76-2.51-6.67-5.8-13.14-7.6-20.03 1.24-4.25 5.64-6.62 8.43-9.85-4.71-4.2-9.55-8.28-14.22-12.53-2.13-1.66-1.98-5.34.36-6.72 7.56-4.71 16.42-6.77 25.13-8.02-2.48-5.96-3.71-13.19-.24-19.01 1.41-2.63 4.01-4.21 6.61-5.46-.69-5.24-2.36-10.3-2.69-15.6-2.11 1.1-3.98 2.57-5.95 3.89-2.46 1.47-6.05-.67-5.95-3.53-.08-6.82 2.43-13.31 5.56-19.25-2.4-.48-4.89-.28-7.25-.91-2.79-1.28-3.24-5.75-.49-7.31 4.25-2.6 8.88-4.56 13.16-7.11.81-1.19-1.66-1.45-2.24-2.18-3.03-1.41-2.47-6.33.57-7.38 3.22-.92 6.6-1.07 9.89-1.61-1.87-.91-3.83-1.66-5.54-2.85-2.69-2.21-1.06-7.28 2.5-7.29 6.2-.1 12.41.36 18.62.36-.68-2.2-1.47-4.38-1.95-6.65-.73-2.57 1.68-5.36 4.33-5 6.98.5 13.91 1.58 20.9 2.05 3.07-2.69 6.19-5.33 9.38-7.89m-8.25 11.73c-7.33.61-14.59-.67-21.81-1.69.28 4.07 2.67 7.6 2.86 11.67-7.05.49-14.14-.56-21.16.36 4.07 3.01 9.25 4.12 13.12 7.44-6.72.85-13.34 2.48-20.13 2.67 1.75 3.21 6.23 3.03 8.63 5.68-5.58 4.48-13.23 5.83-18.39 10.83 4.25.72 8.56 1.03 12.82 1.75-1.85 1.61-3.71 3.24-5.26 5.16-2.57 2.92-3.17 6.9-4.72 10.35-.89 1.9-1.1 3.97-.82 6.04 3.45-1.62 6.43-4.23 10.25-5.01 1.94 3.74 1.53 8.11 2.28 12.15l.72.31c.59 1.08 1.26 2.21.88 3.49-.5 3.06.25 6.07.97 9.01-3.42 0-7.03 1.53-8.37 4.88-2.67 6.37.04 13.47 3.63 18.89-9.89 2.01-20.98 2.6-29.36 8.92 5.53 4.05 10.1 9.33 15.79 13.15 6.28-6.22 14.96-8.9 23.13-11.64-11.64 6.11-22.59 13.94-31.41 23.73 1.19 6.06 5.16 11.49 6.17 17.71.78-.01 1.56-.02 2.35-.02 1.09-3.43 3.36-6.25 5.42-9.14 5-6.6 10.29-13.04 16.52-18.53.81-.44 1.6-.88 2.4-1.33l1.45 1.45c1.22-.02 2.87-1.23 3.73.16-.07 3.04-1.28 5.88-1.77 8.86.28.27.82.83 1.09 1.11 3.59-1.21 7.12-3.04 11.03-2.6 5.95 5.72 12.3 11.34 19.95 14.64 7.37 2.54 15.65 2.53 22.97-.17 7.54-3.37 13.81-8.97 19.71-14.64 4.38.01 8.2 2.55 12.5 2.78-.51-3.32-1.23-6.61-1.91-9.89 2.04-.4 5.08.44 6.41-1.41-.58-4.3-2.47-8.3-4.14-12.27l.02-.04c6.81-2.6 12.31-8.13 15.63-14.54 2.46-4.91 3.83-11.13.97-16.16-1.45-2.79-4.73-3.53-7.5-4.24.32-3.75 2.87-8.06.02-11.37.84-.34 1.66-.69 2.49-1.06-.33-3.05 1.8-6.21 1-9.03 2.15 1.48 4.43 2.77 6.82 3.84-.44-4.5-4.49-8-3.72-12.65 3.61-.24 7.2-.72 10.82-.82-.42-5.34-4.27-9.61-8.81-12.08 1.82-2.67 3.6-5.41 4.63-8.5-3.85-.54-7.75-.12-11.61-.42-.2-.22-.6-.65-.8-.86-.53-4.23-.43-8.51-.69-12.76-3.55-1.6-5.96 2.35-9.41 1.95-.52-4.22-.38-10.46-5.15-12.19-1.9 1.92-3.74 3.94-5.94 5.52-.93 1.07-2.26.51-2.96-.49-2.77-3.37-4.63-7.35-7.13-10.9-4.07 2.48-7.92 5.28-11.88 7.92-4.89-4.22-8.14-9.98-13.24-13.96-3.84 2.47-6.92 6.08-11.09 7.99Z' />
    <path
      fill='#1b050f'
      d='M94.95 25.81c4.17-1.91 7.25-5.52 11.09-7.99 5.1 3.98 8.35 9.74 13.24 13.96 3.96-2.64 7.81-5.44 11.88-7.92 2.5 3.55 4.36 7.53 7.13 10.9.7 1 2.03 1.56 2.96.49 2.2-1.58 4.04-3.6 5.94-5.52 4.77 1.73 4.63 7.97 5.15 12.19 3.45.4 5.86-3.55 9.41-1.95.26 4.25.16 8.53.69 12.76.2.21.6.64.8.86 3.86.3 7.76-.12 11.61.42-1.03 3.09-2.81 5.83-4.63 8.5 4.54 2.47 8.39 6.74 8.81 12.08-3.62.1-7.21.58-10.82.82-.77 4.65 3.28 8.15 3.72 12.65a43.076 43.076 0 0 1-6.82-3.84c-1.44-1.01-2.9-1.99-4.35-2.98-1.3 2.92-2.45 5.91-3.39 8.96-4.8-2.77-7.2-8.15-10.95-12.05-3.49 3.71-7.23 7.18-10.76 10.85-1.87-2.62-3.21-5.54-4.6-8.43-4.31 3.15-7.63 7.67-12.65 9.77.08-2.88.22-5.75.32-8.62-5.8 3.23-10.49 8.28-16.84 10.57.6-3.36 1.52-6.65 2.44-9.94-5.7 2.3-11.12 5.5-17.26 6.59.64-3.03 1.54-5.99 2.56-8.91-5.95 2.02-11.47 5.14-17.5 6.97-.27-2.26-.45-4.55-.95-6.78-1.1-.22-2 .56-2.89 1.05-3.6 2.34-7.04 4.95-10.88 6.89-.06-3.96-.02-7.92.13-11.88-.23.13-.69.41-.92.54-.95.55-1.89 1.11-2.83 1.68-1.22.75-2.34 1.65-3.45 2.56-3.82.78-6.8 3.39-10.25 5.01-.28-2.07-.07-4.14.82-6.04 1.55-3.45 2.15-7.43 4.72-10.35 1.55-1.92 3.41-3.55 5.26-5.16-4.26-.72-8.57-1.03-12.82-1.75 5.16-5 12.81-6.35 18.39-10.83-2.4-2.65-6.88-2.47-8.63-5.68 6.79-.19 13.41-1.82 20.13-2.67-3.87-3.32-9.05-4.43-13.12-7.44 7.02-.92 14.11.13 21.16-.36-.19-4.07-2.58-7.6-2.86-11.67 7.22 1.02 14.48 2.3 21.81 1.69Z'
    />
    <path
      fill='#df170f'
      d='M56.62 76.82c.23-.13.69-.41.92-.54-.15 3.96-.19 7.92-.13 11.88 3.84-1.94 7.28-4.55 10.88-6.89.89-.49 1.79-1.27 2.89-1.05.5 2.23.68 4.52.95 6.78 6.03-1.83 11.55-4.95 17.5-6.97-1.02 2.92-1.92 5.88-2.56 8.91 6.14-1.09 11.56-4.29 17.26-6.59-.92 3.29-1.84 6.58-2.44 9.94 6.35-2.29 11.04-7.34 16.84-10.57-.1 2.87-.24 5.74-.32 8.62 5.02-2.1 8.34-6.62 12.65-9.77 1.39 2.89 2.73 5.81 4.6 8.43 3.53-3.67 7.27-7.14 10.76-10.85 3.75 3.9 6.15 9.28 10.95 12.05.94-3.05 2.09-6.04 3.39-8.96 1.45.99 2.91 1.97 4.35 2.98.8 2.82-1.33 5.98-1 9.03-.83.37-1.65.72-2.49 1.06-1.71.66-3.44 1.27-5.19 1.81-2.11.6-4.26 1.04-6.4 1.49-2.21-1.35-4.65-2.27-7.07-3.15-4 1.61-7.38 4.28-10.78 6.86-11.56 2.14-23.44 3.01-35.16 1.72-3.51-.39-7.01-.76-10.53-.99-4.16-2.76-7.71-6.63-12.48-8.34-3.36-.27-6.25 1.87-8.84 3.72-1.65-.42-3.3-.83-4.94-1.31-2.36-.7-4.65-1.61-6.89-2.6l-.72-.31c-.75-4.04-.34-8.41-2.28-12.15 1.11-.91 2.23-1.81 3.45-2.56l2.01.72c0 3.07.03 6.17.69 9.2.36-3.86.32-7.74.13-11.6Z'
    />
    <path
      fill='#d22829'
      d='M56.62 76.82c.19 3.86.23 7.74-.13 11.6-.66-3.03-.69-6.13-.69-9.2l-2.01-.72c.94-.57 1.88-1.13 2.83-1.68Z'
    />
    <path
      fill='#1e050d'
      d='M53.34 93.52c2.24.99 4.53 1.9 6.89 2.6-1.76 12.63-.29 25.38 1.89 37.85-3.63-8.92-4.85-18.59-6.93-27.95-.72-2.94-1.47-5.95-.97-9.01.38-1.28-.29-2.41-.88-3.49Z'
    />
    <g fill='#1b0510'>
      <path d='M65.17 97.43c2.59-1.85 5.48-3.99 8.84-3.72 4.77 1.71 8.32 5.58 12.48 8.34 3.57 2.5 7.08 5.37 11.48 6.2.99 2.88 1.92 5.78 2.95 8.65-6.35-4.04-13.79-5.6-20.91-7.69-2.95-.74-6.01-1.89-9.08-1.18-3.48.78-6.86 1.91-10.37 2.54 2.15-4.2 4.99-7.99 8.04-11.58-1.93.12-3.87.22-5.81.31.6-.47 1.79-1.4 2.38-1.87ZM62.5 140.07l2.04.96c1.15 3 2.07 6.1 3.26 9.09 1.87 4.65 5.82 7.95 9.19 11.5-3.91-.44-7.44 1.39-11.03 2.6-.27-.28-.81-.84-1.09-1.11.49-2.98 1.7-5.82 1.77-8.86-.86-1.39-2.51-.18-3.73-.16l-1.45-1.45c-.8.45-1.59.89-2.4 1.33 1.97-4.39 2.53-9.22 3.44-13.9ZM146.7 153.68c2.85-3.9 3.39-8.89 5.78-13.02 1.67 3.97 3.56 7.97 4.14 12.27-1.33 1.85-4.37 1.01-6.41 1.41.68 3.28 1.4 6.57 1.91 9.89-4.3-.23-8.12-2.77-12.5-2.78 2.45-2.51 4.98-4.96 7.08-7.77Z' />
    </g>
    <path
      fill='#1b0511'
      d='M132.18 101.32c3.4-2.58 6.78-5.25 10.78-6.86 2.42.88 4.86 1.8 7.07 3.15 1.14.86 2.23 1.79 3.31 2.72-1.85-.07-3.71-.14-5.56-.23 2.98 3.63 5.86 7.38 7.94 11.61-3.58-.7-7.04-1.95-10.62-2.65-3.05-.6-6.05.52-8.96 1.27-7.06 2.03-14.38 3.69-20.71 7.56 1.01-2.82 1.92-5.68 2.81-8.54 5.43-1.07 9.57-4.93 13.94-8.03Z'
    />
    <path
      fill='#1c050f'
      d='M156.43 96.12c1.75-.54 3.48-1.15 5.19-1.81 2.85 3.31.3 7.62-.02 11.37-1.99 9.17-3.51 18.48-6.5 27.4-.01-.3-.04-.91-.06-1.22 1.71-11.83 3.18-23.82 1.39-35.74Z'
    />
    <path
      fill='#f3c890'
      d='M60.23 96.12c1.64.48 3.29.89 4.94 1.31-.59.47-1.78 1.4-2.38 1.87 1.94-.09 3.88-.19 5.81-.31-3.05 3.59-5.89 7.38-8.04 11.58 3.51-.63 6.89-1.76 10.37-2.54 3.07-.71 6.13.44 9.08 1.18 7.12 2.09 14.56 3.65 20.91 7.69-1.03-2.87-1.96-5.77-2.95-8.65-4.4-.83-7.91-3.7-11.48-6.2 3.52.23 7.02.6 10.53.99 11.72 1.29 23.6.42 35.16-1.72-4.37 3.1-8.51 6.96-13.94 8.03-.89 2.86-1.8 5.72-2.81 8.54 6.33-3.87 13.65-5.53 20.71-7.56 2.91-.75 5.91-1.87 8.96-1.27 3.58.7 7.04 1.95 10.62 2.65-2.08-4.23-4.96-7.98-7.94-11.61 1.85.09 3.71.16 5.56.23-1.08-.93-2.17-1.86-3.31-2.72 2.14-.45 4.29-.89 6.4-1.49 1.79 11.92.32 23.91-1.39 35.74-1.16 2.82-2.24 5.7-2.54 8.76l-.02.04c-2.39 4.13-2.93 9.12-5.78 13.02-2.1 2.81-4.63 5.26-7.08 7.77-5.9 5.67-12.17 11.27-19.71 14.64-7.32 2.7-15.6 2.71-22.97.17-7.65-3.3-14-8.92-19.95-14.64-3.37-3.55-7.32-6.85-9.19-11.5-1.19-2.99-2.11-6.09-3.26-9.09-.71-2.39-1.48-4.75-2.42-7.06-2.18-12.47-3.65-25.22-1.89-37.85Z'
    />
    <g fill='#f3b97b'>
      <path d='M46.82 110.9c1.34-3.35 4.95-4.88 8.37-4.88 2.08 9.36 3.3 19.03 6.93 27.95.94 2.31 1.71 4.67 2.42 7.06l-2.04-.96c-4.87-2.23-8.91-5.99-12.05-10.28-3.59-5.42-6.3-12.52-3.63-18.89ZM155.1 133.08c2.99-8.92 4.51-18.23 6.5-27.4 2.77.71 6.05 1.45 7.5 4.24 2.86 5.03 1.49 11.25-.97 16.16-3.32 6.41-8.82 11.94-15.63 14.54.3-3.06 1.38-5.94 2.54-8.76.02.31.05.92.06 1.22Z' />
    </g>
    <path
      fill='#de170f'
      d='M21.09 138.71c8.38-6.32 19.47-6.91 29.36-8.92 3.14 4.29 7.18 8.05 12.05 10.28-.91 4.68-1.47 9.51-3.44 13.9-6.23 5.49-11.52 11.93-16.52 18.53-2.06 2.89-4.33 5.71-5.42 9.14-.79 0-1.57.01-2.35.02-1.01-6.22-4.98-11.65-6.17-17.71 8.82-9.79 19.77-17.62 31.41-23.73-8.17 2.74-16.85 5.42-23.13 11.64-5.69-3.82-10.26-9.1-15.79-13.15Z'
    />
  </svg>
)

export default SvgRyu
