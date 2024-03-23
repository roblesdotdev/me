import { flatRoutes } from 'remix-flat-routes'
import { copyFileSync } from 'node:fs'
import { join } from 'node:path'

/** @type {import('@remix-run/dev/dist/vite/plugin').VitePluginConfig} */
export default {
  basename: '/me/',
  ssr: false,
  ignoredRouteFiles: ['**/*'],
  serverModuleFormat: 'esm',
  routes: async defineRoutes => {
    return flatRoutes('routes', defineRoutes, {
      ignoredRouteFiles: [
        '.*',
        '**/*.css',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/__*.*',
        // This is for server-side utilities you want to colocate
        // next to your routes without making an additional
        // directory. If you need a route that includes "server" or
        // "client" in the filename, use the escape brackets like:
        // my-route.[server].tsx
        '**/*.server.*',
        '**/*.client.*',
      ],
    })
  },
  buildEnd(args) {
    if (!args.viteConfig.isProduction) return

    // When deploying to GitHub Pages, if you navigate from / to another
    // route and refresh the tab, it will show the default GH Pages 404
    // page. This happens because GH Pages is not configured to send all
    // traffic to the index.html where we can load our client-side JS.
    // To fix this, we can create a 404.html file that contains the same
    // content as index.html. This way, when the user refreshes the page,
    // GH Pages will serve our 404.html and everything will work as
    // expected.
    const buildPath = args.viteConfig.build.outDir
    copyFileSync(join(buildPath, 'index.html'), join(buildPath, '404.html'))
  },
}
