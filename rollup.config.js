import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
    input: 'dist/index.js',
    output: {
        file: 'demo/tiny-renderer.js',
        format: 'esm',
    },
    plugins: [commonjs(), nodeResolve()],
};
