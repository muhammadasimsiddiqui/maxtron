const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const rtlcss = require('rtlcss');
const { RawSource } = require('webpack-sources');
const path = require('path');
const fs = require('fs-extra');
const cssPairs = [
    // Add more pairs as needed
];

const folder = {
    src_assets: "./src/assets/",
    public_assets: "public/assets/",
    // Add more pairs as needed
};

module.exports = {
    entry: {
        style: './src/sass/main.scss',
    },
    output: {
        path: path.resolve(__dirname, folder.public_assets),
        filename: 'chunk/[name].js',
    },
    resolve: {
        extensions: ['.js', '.scss', '.css'],
    },
    performance: {
        hints: false,
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                exclude: /libs/,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],

            },
            {
                test: /\.css$/, // Add a rule to handle CSS files
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: folder.src_assets + 'images',
                    to: 'images',
                },
                {
                    from: folder.src_assets + 'js',
                    to: 'js',
                },
                {
                    from: folder.src_assets + 'plugins',
                    to: 'plugins',
                },
                {
                    from: folder.src_assets + 'css',
                    to: 'css',
                },
                {
                    from: folder.src_assets + 'fonts',
                    to: 'fonts',
                },
            ],
        }),
    
          ],
};
