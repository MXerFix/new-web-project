import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: 'var(--background-def)',
        foreground: 'var(--foreground-def)',
        bgsecondary: 'var(--background-secondary)',
        fgsecondary: 'var(--foreground-secondary)',
        banner: 'var(--banner-bg)',
        header: 'var(--header)',
        card: 'var(--card)',
        button_hover: 'var(--button-hover-bg)',
        e_commerce_cart_btn: 'var(--e-commerce-demo-cart-button)',
        border_no_accent: 'var(--border-no-accent)'
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
export default config
