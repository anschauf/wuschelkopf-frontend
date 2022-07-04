// overrides some webpack configs according to this website:
// https://github.com/ChainSafe/web3.js#troubleshooting-and-known-issues

/**
 * Resolves the following error message:
 *  "Module not found: Error: Can't resolve 'stream' in React project including web3"
 *
 *  https://ethereum.stackexchange.com/questions/123530/module-not-found-error-cant-resolve-stream-in-react-project-including-web3
 */



const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ]);
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
}