/**
 * 安装eslint
 * pnpm i eslint -D
 * 配置初始化
 * npx eslint --init
 */
module.exports = {
  //运行环境
  env: {
    browser: true, //浏览器端
    es2021: true, //es2021
    node: true,
    jest: true,
  },
  parser: 'vue-eslint-parser',
  //规则继承
  extends: [
    //全部规则默认关闭，配置项开启推荐规则。
    //比如函数不能重重名、对象不能出项重复key。
    'eslint:recommended',
    //ts语法规则
    'plugin:@typescript-eslint/recommended',
    //vue3语法规则
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  //为特定类型的文件指定处理器
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  //指定解析器选项
  parserOptions: {
    ecmaVersion: 'latest', //ecma最新版本
    parser: '@typescript-eslint/parser', //ts解析器
    sourceType: 'module', //默认为script
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  //第三方插件，使用插件之前，您必须使用npm安装他
  plugins: ['@typescript-eslint', 'vue'],
  //规则
  rules: {
    // eslint (https://eslint.bootcss.com/docs/rules/)
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', //禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    '@typescript-eslint/no-unused-vars': 'error', //禁止未使用变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', //禁止使用@ts-ignore
    '@typescript-eslint/no-explicit-any': 'error', //禁止使用any类型
    '@typescript-eslint/no-non-null-assertion': 'off', //禁止使用后缀运算符的非空断言
    '@typescript-eslint/no-namespace': 'off', //Disallow TypeScript namespaces.
    '@typescript-eslint/semi': 'off',

    // vue
    'vue/multi-word-component-names': 'off', //Require component names to be always multi-word
    'vue/script-setup-uses-vars': 'error', //Prevent <script setup> variables used in <template> to be marked as unused
    'vue/no-mutating-props': 'off', //Disallow mutation of component props
    'vue/attribute-hyphenation': 'off', //Enforce attribute naming style on custom components in template

    //other
    '@typescript-eslint/ban-ts-comment': 'off',
  },
}
