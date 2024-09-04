/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/inicio',
                destination: '/',
            },
            {
                source: '/contacto',
                destination: '/contact',
            },
            {
                source: '/sobre-nosotros',
                destination: '/about',
            },
            {
                source: '/simuladores',
                destination: '/simulator',
            },

        ];
    },

};


export default nextConfig;
