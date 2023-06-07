/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      // 颜色
      colors: {
        'mycolor': '#abcdef',
      },
      // 字体
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont'],
        serif: ['Georgia'],
      },
      // 字号
      fontSize: {
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
      },
      // 间距
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      // 响应式布局
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
    // 默认断点的设置来自于常见的设备分辨率。
    screens: {
      'hh': '875px', // 屏幕名称  断点开始的地方
      // => @media (min-width: 875px) { ... }
      'ee': {'max': '539px'},
      // => @media (max-width: 739px) { ... }
      'zz': {'min': '640px', 'max': '767px'},
    },
  },
  // 可以使用 "@responsive" 指令来创建自己的响应式 "variants"，并使用它来实现基于窗口大小的样式变化效果。
  // variants: {
  //   display: ['responsive', 'hover', 'focus', 'active'],
  // },
  // plugins: [
  //   require('@tailwindcss/forms'),
  //   require('@tailwindcss/typography'),
  // ],
}
