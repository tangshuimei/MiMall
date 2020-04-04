module.exports = {
  "presets": [
    '@vue/cli-plugin-babel/preset' // 解码规则：preset是一个插件，而他背后又包括很多个语法的插件
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
