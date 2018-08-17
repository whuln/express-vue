const merge = require('webpack-merge');
let baseCfg = require('./webpack.config.base');
module.exports = merge(baseCfg,{
    mode:'development'
});