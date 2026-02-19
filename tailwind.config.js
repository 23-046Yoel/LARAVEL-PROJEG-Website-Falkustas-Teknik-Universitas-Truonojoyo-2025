php artisan serveimport defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    plugins: [forms],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                heading: ['Montserrat', 'Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                utm: {
                    main: '#003366', // Deep Blue - Professional & Academic
                    light: '#0055aa',
                    accent: '#FFD700', // Gold/Yellow - Vibrant accent
                    dark: '#001a33',
                },
                'neutral-surface': '#F8FAFC',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-in-right': 'slideInRight 1s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                }
            }
        },
    },
};
