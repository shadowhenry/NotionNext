module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'next',
    'prettier',
    'plugin:@typescript-eslint/recommended', // 添加 TypeScript 推荐规则
    'plugin:@typescript-eslint/recommended-requiring-type-checking' // 添加需要类型检查的规则
  ],
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json' // 指向新的 ESLint 配置文件
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint' // 添加 TypeScript 插件
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Disable all rules
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'off',
    'react/no-unknown-property': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'prettier/prettier': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off'
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      parser: null // 避免对 `.eslintrc.js` 文件使用 TypeScript 解析器
    },
    {
      files: ['**/*.js'], // Match all .js files 对js的代码规范检查不那么严格
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-return': 'off'
      }
    }
  ],
  globals: {
    React: true
  }
}
