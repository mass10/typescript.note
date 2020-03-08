# はじめかた

```
yarn init
yarn add typescript
yarn tsc --init
```

# プロジェクトをビルドする

```
yarn tsc
```

# メモ

| リンク | 説明 |
|-|-|
|https://basarat.gitbook.io/typescript/|TypeScript Deep Dive ([日本語訳はこちら](https://typescript-jp.gitbook.io/deep-dive/))|



# 型エラー 2020-02-19

- `yarn tsc` でエラー

```
yarn run v1.19.2
$ C:\Users\me\workspace\typescript.note\code\yield\node_modules\.bin\tsc
error TS2318: Cannot find global type 'Array'.

error TS2318: Cannot find global type 'Boolean'.

error TS2318: Cannot find global type 'CallableFunction'.

error TS2318: Cannot find global type 'Function'.

error TS2318: Cannot find global type 'IArguments'.

error TS2318: Cannot find global type 'NewableFunction'.

error TS2318: Cannot find global type 'Number'.

error TS2318: Cannot find global type 'Object'.

error TS2318: Cannot find global type 'RegExp'.

error TS2318: Cannot find global type 'String'.


Found 10 errors.

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

- やったこと

```
yarn add @types/node
```
