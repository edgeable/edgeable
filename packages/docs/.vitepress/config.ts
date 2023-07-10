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
                text : 'Setup',
                items: [
                    {text: '🔌 - Installation', link: '/installation'},
                    {text: '🏢 - Organization', link: '/organization'},
                    {text: '👥 - Users', link: '/users'},
                    {
                        text: '⚡ - Deploying Functions', link: '/deploying-functions', items: [
                            {text: 'Dashboard', link: '/via-dashboard'},
                            {text: 'CLI', link: '/via-cli'},
                            {text: 'GitHub', link: '/via-github'},
                        ],
                    },
                    {text: '🔐 - Production guidelines', link: '/production-guidelines'},
                ],
            },
            {
                text : 'Core',
                items: [
                    {text: '📬 - Queue', link: '/queue'},
                    {text: '⌛ - Cronjob', link: '/cronjob'},
                    {text: '📒 - Durable KV', link: '/durable-kv'},
                ]
            },
            {
                text : 'Advance',
                items: [
                    {text: '🔧 - CLI', link: '/cli'},
                    {text: '🎓 - From Single to HA', link: '/moving-from-single-to-ha'},
                    {text: '📊 - Benchmarks  ', link: '/benchmarks'},
                ],
            },
            {
                text : 'Runtimes',
                items: [
                    {text: '🗃️ - Available runtimes', link: '/available-runtimes'},
                    {text: '🚦 - Adding new runtime', link: '/adding-new-runtime'},
                    {text: '🛠️ - Use custom runtimes', link: '/use-custom-runtimes'},
                ],
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/byawitz/edgeable'}
        ]
    }
})
