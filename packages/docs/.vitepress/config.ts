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
                    {text: '❓ - What is Edgeable?', link: '/'},
                    {text: '🏁 - Getting started', link: '/getting-started'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/byawitz/edgeable'}
        ]
    }
})
