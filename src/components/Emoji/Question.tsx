import React from 'react'

const SvgQuestion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <path
      fill="#BE1931"
      d="M17 27c-1.657 0-3-1.343-3-3v-4c0-1.657 1.343-3 3-3 .603-.006 6-1 6-5 0-2-2-4-5-4-2.441 0-4 2-4 3 0 1.657-1.343 3-3 3s-3-1.343-3-3c0-4.878 4.58-9 10-9 8 0 11 5.982 11 11 0 4.145-2.277 7.313-6.413 8.92-.9.351-1.79.587-2.587.747V24c0 1.657-1.343 3-3 3z"
    />
    <circle fill="#BE1931" cx={17} cy={32} r={3} />
  </svg>
)

export default SvgQuestion
