// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: './app.ts',
    plugins: [
        typescript({ module: 'CommonJS' }),
        // typescript({lib: ["es5", "es6", "dom"], target: "es5"})
        commonjs({ extensions: ['.js', '.ts'] }) // the ".ts" extension is required
    ]
}