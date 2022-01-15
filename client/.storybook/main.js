module.exports = {
  stories: [
    "../src/components/**/stories.mdx",
    "../src/components/**/stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
  ],
  webpackFinal: (config)=> {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
