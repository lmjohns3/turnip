import { build, context } from 'esbuild'
import { stylusLoader } from 'esbuild-stylus-loader'

const opts = {
  bundle: true,
  entryPoints: ['index.jsx'],
  lineLimit: 100,
  loader: { '.png': 'dataurl' },
  logLevel: 'info',
  outdir: '../turnip/static/',
  plugins: [stylusLoader()],
}

const envopts = process.env.NODE_ENV === 'production'
      ? { minify: true, sourcemap: false }
      : { minify: false, sourcemap: true }

await build({ ...opts, ...envopts })
