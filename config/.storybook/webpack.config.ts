import path from 'path';
import { BuildPaths } from './../build/types/config';
import buildCssLoader from './../build/loaders/buildCssLoader';
import buildSvgLoader from './../build/loaders/buildSvgLoader';
import webpack, { RuleSetRule } from 'webpack';

export default ({ config }: { config: webpack.Configuration}) => {
    const paths: BuildPaths ={
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(
        paths.src, 
        path.resolve(__dirname, '..', '..', 'node_modules')
    );
    config.resolve?.extensions?.push('.tsx', '.ts', '.js')
    config.resolve = {
        ...config.resolve,
        alias: {
            '@': paths.src
        }
    }

    const fileLoaderRule = config?.module?.rules?.find(
        (rule) => {
            rule = rule as RuleSetRule
            rule.test = rule.test as RegExp
            if (rule && rule.test) {
                return rule.test && rule.test.test(".svg")
            }
        }
    );
    if (fileLoaderRule) {
        (fileLoaderRule as RuleSetRule).exclude = /\.svg$/;
    }

    config.module?.rules?.push(buildSvgLoader())
    config.module?.rules?.push(buildCssLoader(true))

    return config;
}