module.exports = {
  trailingComma: 'all',
  printWidth: 120,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
  semi: false,
  tabWidth: 2,

  useTabs: false, // 使用tab（制表位）缩进而非空格

  singleQuote: true, // 使用单引号而非双引号

  bracketSpacing: true, // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格

  arrowParens: 'avoid', // 为单行箭头函数的参数添加圆括号，参数个数为1时可以省略圆括号

  rangeStart: 0, // 只格式化某个文件的一部分

  rangeEnd: Infinity, // 只格式化某个文件的一部分

  filepath: 'none', // 指定文件的输入路径，这将被用于解析器参照

  requirePragma: false, // (v1.7.0+) Prettier可以严格按照按照文件顶部的一些特殊的注释格式化代码，这些注释称为“require pragma”(必须杂注)

  insertPragma: false, //  (v1.8.0+) Prettier可以在文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了。

  proseWrap: 'preserve', // (v1.8.2+)

  jsxBracketSameLine: false, // jsx闭合标签在同一行
}
