import * as React from 'react'
import { SVGProps } from 'react'

const SvgKazuya = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 200 200'
    {...props}
  >
    <path d='M89 197.7c-8.8-3.3-23.1-16.7-33.5-31.6-3.1-4.4-6.1-8.1-6.6-8.1-1.7 0-9-7.3-11.4-11.4-3.8-6.5-5.6-15-4.4-20.5.5-2.5 1.6-5.2 2.3-6.1 1-1.1 1.2-2.9.6-7-1.7-11.3-1.2-20.4 1.6-28.2 6.2-17.3 21.5-42.9 37.8-63.2C84.4 10.5 87 8.4 89.7 9.9c1.6.8 2.3.3 4.3-3 4-6.4 8-6.4 12 0 2 3.3 2.7 3.8 4.3 3 2.7-1.5 5.3.6 14.3 11.7 16.3 20.3 31.6 45.9 37.8 63.2 2.8 7.8 3.3 16.9 1.6 28.2-.6 4.1-.4 5.9.6 7 .7.9 1.8 3.6 2.3 6.1 1.2 5.5-.6 14-4.4 20.5-2.4 4.1-9.7 11.4-11.4 11.4-.5 0-3.5 3.7-6.7 8.2-7.6 10.8-20.8 24.4-28 28.8-5.2 3.1-6.4 3.4-14.8 3.7-5.8.2-10.4-.2-12.6-1zm22.3-9.7c9-5.7 22.9-20.7 29.2-31.5 1.5-2.4 3.9-4.8 6-5.8 6.1-2.9 14.2-16.4 13-21.8-.4-1.5-1.3-3.3-2.1-4-.8-.6-1.4-2.9-1.4-5 0-2.2-.4-3.9-1-3.9-.5 0-1-1.6-1-3.5 0-2.7.4-3.5 1.8-3.5 1 0 1.3-.3.6-.8-.6-.4-1.4-5.4-1.7-11.2-.8-12-3.9-22-6.9-22-1.3 0-1.8-.8-1.8-3.1 0-3.7-3.5-9.9-5.6-9.9-.9 0-1.4-1.1-1.4-2.9 0-3.7-6.8-14-9.2-14.1-1.1 0-1.8-.8-1.8-1.9 0-3.3-1.1-5.1-3.1-5.1-1.2 0-1.9-.7-1.9-2 0-1.1-.7-2-1.5-2-.9 0-1.5-.9-1.5-2.5 0-1.8-.5-2.5-2-2.5-1.3 0-2-.7-2-2s-.7-2-2-2c-1.1 0-2 .5-2 1 0 .6-1.6 1-3.5 1-3.1 0-3.5-.3-3.5-2.5 0-1.6-.6-2.5-1.5-2.5s-1.5-.9-1.5-2.4-.7-2.6-2-2.9c-1.7-.4-2 0-2 2.4 0 1.9-.5 2.9-1.5 2.9-.9 0-1.5.9-1.5 2.5 0 2.2-.4 2.5-3.5 2.5-1.9 0-3.5-.4-3.5-1 0-.5-.9-1-2-1-1.3 0-2 .7-2 2s-.7 2-1.9 2c-2.2 0-5.1 4-5.1 7 0 1.3-.7 2-1.9 2-2 0-3.1 1.8-3.1 5.1 0 1.1-.7 1.9-1.7 1.9C68 45 61 55.8 61 59.3c0 2-.5 2.7-2 2.7-1.1 0-2 .4-2 1 0 .5-1.3 3.1-2.8 5.7-1.5 2.6-4.3 8.3-6.2 12.7-3.1 7.2-3.4 8.6-3.1 16.2.1 5.5-.1 8.4-.8 8.4-.6 0-1.1.7-1.1 1.5s.6 1.5 1.4 1.5c.9 0 1.6 2 2.1 6.6.4 3.6.5 6.6.3 6.7-3.2 1.7-4.5 2.8-5.7 5.1-1.1 2.5-1 3.5.8 8.4 2.7 7 8.1 13.7 12.4 15.3 2.1.7 3.8 2.4 4.9 4.8C61.8 161.2 74 176 81 182.1c8.4 7.5 11.3 8.8 19.1 8.9 5.5 0 7.2-.4 11.2-3z' />
    <g fill='#2d2d2d'>
      <path d='m83.3 189.5-2.8-2.4 3.8-.1c3.3 0 3.7.3 3.7 2.5 0 3.1-1.1 3.2-4.7 0zM56.7 160.1c-2.2-3.8-2.2-4.1.8-4.1 2.2 0 2.5.4 2.5 3.5 0 4.3-1 4.4-3.3.6zM140 159.5c0-3.1.3-3.5 2.5-3.5 3 0 3 .3.8 4.1-2.3 3.8-3.3 3.7-3.3-.6zM45.1 131.3c-1.3-4.2-3-8.2-3.8-8.8-1-.8-1.2-1.4-.6-1.8.7-.5.7-2.3.1-5.4-.5-2.7-1-9.1-1.1-14.3-.2-10.2 1-14.3 8.8-30 5.6-11.3 19-32.8 24.6-39.4.9-1.2 4-4.9 6.9-8.4 6.6-8.1 8.9-9.1 9.3-4.3.2 2.7 1.5 2.7 2.7-.1 1.8-4 6.5-11.1 7.6-11.5.6-.2 3 2.8 5.4 6.7 2.3 3.8 4.6 7 5.1 7s.8-.3.8-.8c-.4-2.5.3-4.2 1.9-4.2 1.4.1 5.9 5.2 15.5 17.5 2 2.6 13.7 19.6 13.7 20 0 .2 2.3 4.2 5 9 5.5 9.5 11.3 22.5 13 29.3 1 4 .9 10.5-.6 23-.4 3.5-.2 5.8.6 6.7 1 1.2.9 1.5-.7 1.5-1.7 0-2.4 1.5-4.3 8l-2.3 8h-3.8c-3.4 0-4-.4-4.5-2.7-.4-1.5 0-6.6.9-11.3 1.9-9.9 2.1-13.8.7-16-.7-1.1-1 .1-1 4.1 0 4.9-.3 5.8-3.2 8.6-9 8.4-23.5 15.6-30.6 15.1l-4.7-.3-.3-4c-.3-3.8 0-4.2 5.2-8.3 3-2.4 6.6-6.1 8.1-8.2 3.4-5 6.5-13.2 6.5-17.5 0-3.4.1-3.5 3.9-3.5 2.2 0 4.3.5 4.6 1 .8 1.4 4.5 1.3 4.5-.1 0-2.8-4.6-8.9-8.1-10.9-3.4-1.8-4.4-2-7.3-1-3.6 1.2-13.8 11.2-17.5 17.3-2 3.2-2.7 3.7-6.1 3.7-3.4 0-4.1-.5-6.1-3.7C90.2 95.2 80 85.2 76.4 84c-4.7-1.6-9.7.9-12.9 6.5-3.4 5.7-3.3 6.6.7 5.4 1.8-.5 4.8-.9 6.5-.9 2.9 0 3.3.3 3.3 2.8 0 8.7 5.9 19.4 14.5 26.3 4.9 3.9 5.5 4.8 5.5 8 0 8.1-11.3 6.3-27.7-4.4-9.7-6.3-11.1-8.1-11.5-14.7-.3-5-.4-5.2-1.2-2.5-.6 1.9-.4 5.5.5 10.5.7 4.1 1.3 9.8 1.4 12.5v5l-4.1.3-4.1.3-2.2-7.8zM159 135.5c0-2.8.4-3.5 2-3.5 2.2 0 2.6 2 1 5.1-1.6 3-3 2.3-3-1.6z' />
    </g>
    <path
      d='M40.8 120.7c.7-.8.8-2.7.2-5.2-.4-2.2-1.1-7.6-1.4-12-.8-10.2.5-14.8 8.9-32 7.4-15.1 15.5-27.9 26.6-42 12.6-16 12.5-15.9 13.3-14 .3.9.6 2.5.6 3.6 0 3.5 1.7 2 5.9-5.1 2.3-3.9 4.6-7 5-7 .5 0 2.8 3.2 5.1 7 4.4 7.3 6 8.5 6 4.8.1-5.8 1.7-4.9 9.9 5.4C136.7 44 151.6 68.6 158 85.5c2.4 6.4 2.9 18.4 1.2 29.2-.6 3.4-.5 5.6.2 6.3.7.7 0 1-2.2 1-1.8 0-3.2-.4-3.2-1 0-.5.6-1 1.4-1 1.7 0 4.1-19.2 3.1-25.2-2.2-12.8-17-40.4-33.6-62.3-10.6-14-11.5-15-12.3-13-.3.9-.6 3-.6 4.6 0 1.6-.3 2.9-.7 2.9-.5 0-3-3.9-5.8-8.5-2.7-4.7-5.2-8.5-5.5-8.5-.3 0-2.7 3.6-5.3 8-5 8.2-6.6 9.6-6.8 5.8-.2-6.4-1.3-6-8.2 2.7C68 41.1 58 56.9 50.4 72.3 41.5 90.6 40.6 94.4 42 108c.5 5.6 1 10.6 1 11.1s.7.9 1.5.9 1.5.5 1.5 1c0 .6-1.4 1-3.1 1-2.4 0-2.9-.3-2.1-1.3z'
      fill='#b1b1b1'
    />
    <path
      d='M84.2 190c-9-6-24.7-23.7-28.3-31.8-.8-1.8-2.5-3.4-4.6-4.1-4.2-1.5-9.5-8.1-12.3-15.1-2.7-6.9-2.4-13.9.9-17.4 3.7-3.9 5.6-2.4 8.1 6.5 1.3 4.3 2.6 7.9 3.1 7.9 1.7 0 1.8-2.1.4-9-2.8-13.5-1.7-23 2.9-23 .7 0 1.7-2.5 2.4-6.1 2.6-14.2 11.8-21 22.9-16.8 3.6 1.3 12.6 10.1 16.5 16.2 1.6 2.6 3.4 4.7 3.8 4.7.4 0 2.2-2.1 3.8-4.7 3.9-6.1 12.9-14.9 16.5-16.2 8.1-3.1 16.4.4 20.2 8.3 1.3 2.8 2.7 7.2 3.1 9.8.4 3 1.1 4.8 1.9 4.8.8 0 2.1.7 2.9 1.6 2 2 2.1 12.3.2 21.3-1.4 6.2-1.2 9.1.4 9.1.4 0 1.7-3.6 3-7.9 2.5-8.9 4.4-10.4 8-6.6 3.1 3.3 3.7 10.1 1.5 16.3-2.5 6.8-7.9 13.9-12.1 15.9-2.2 1.1-4.6 3.6-6.6 6.8-7.1 11.5-19.5 24.8-28.5 30.5-4.4 2.8-5.4 3-14.4 3-9.6 0-9.7 0-15.7-4zm5.8-57c1.2-.8.8-1.5-2.5-4.2-10.1-8.2-15-16-16.2-25.7-.3-2.8-.9-5.1-1.4-5.1-.4 0-1.7 1.2-2.9 2.8-1.9 2.4-2.1 2.5-1.7.5.8-3.8-2-1.5-4.8 4-3.4 6.8-3.2 9.6.8 13.4 4 3.8 13.3 9.8 20.1 12.9 5.8 2.6 6.5 2.7 8.6 1.4zm29.5-1.9c12.4-5.7 22.5-13.7 22.5-18.1 0-3-4.7-13-6.1-13-.5 0-.9.8-.9 1.8-.1 1.3-.5 1.1-2.1-1-1.1-1.6-2.4-2.8-2.9-2.8-.4 0-1 2.2-1.2 4.8-.9 9.4-6.2 17.9-16.2 25.9-3.7 3-4.1 5.3-1 5.3.8 0 4.3-1.3 7.9-2.9z'
      fill='#ffd7b7'
    />
  </svg>
)

export default SvgKazuya
