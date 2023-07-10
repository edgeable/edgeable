import {defineConfig} from 'vitepress'

export default defineConfig({
    title      : "Edgeable Docs",
    description: "Serverless edge-able cloud functions",
    base       : '/',
    srcDir     : './pages',
    themeConfig: {
        sidebar: [
            {
                text : 'Introduction',
                items: [
                    {text: '⭐ - What is Edgeable?', link: '/'},
                    {text: '☁️ - Requirements', link: '/requirements'},
                    {text: '🏁 - Getting started', link: '/getting-started'},
                ],
            },
            {
                text : 'Installation',
                items: [
                    {text: '🔧 - Installation', link: '/'},
                ],
            },
            {
                text : 'Core',
                items: [
                    {text: '🔧 - CLI', link: '/'},
                ],
            },
            {
                text : 'Advance',
                items: [
                    {text: '🎓 - From Single to HA', link: '/moving-from-single-to-ha'},
                ],
            },

        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/byawitz/edgeable'}
        ]
    }
})
