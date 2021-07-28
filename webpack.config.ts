import * as webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const base: webpack.Configuration = {
    mode: 'development',
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "./",
        filename: "[name].js",
        assetModuleFilename: 'build/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/,
                    /test/,
                ],
                use: "ts-loader"
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
            }
        ],
    },
    devtool: 'inline-source-map'
}

const main: webpack.Configuration = {
    ...base,
    target: 'electron-main',
    entry: {
        main: './src/main.ts'
    },
}

const mainRenderer: webpack.Configuration = {
    ...base,
    target: 'web',
    entry: {
        renderer: './src/lib/renderer/pages/main/renderer.tsx',
    },
    output: {
      path: path.resolve(__dirname, "build/assets")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/assets/index.html',
            minify: false,
            inject: 'body',
            filename: 'index.html',
            scriptLoading: 'blocking'
        })
    ]
}

export default [main, mainRenderer]