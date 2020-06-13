import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from "@rollup/plugin-typescript"

export default {
    input: 'src/manifest.json',
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: 'inline',
    },
    plugins: [
        chromeExtension(),
        simpleReloader(),
        // TODO: switch to tsconfig.json
        typescript({include: 'src/**/*.ts'}),
        resolve(),
        commonjs(),
    ],
}
