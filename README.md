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


# Electron が @types/node@13 でコンパイルエラー(2020-03-20)

### 概要

Electron を利用したプロジェクトをコンパイルできない。

```
node_modules/electron/electron.d.ts:7397:42 - error TS2689: Cannot extend an interface 'NodeJS.EventEmitter'. Did you mean 'implements'?

7397   class TouchBarSegmentedControl extends NodeJS.EventEmitter {
                                              ~~~~~~

node_modules/electron/electron.d.ts:7410:32 - error TS2689: Cannot extend an interface 'NodeJS.EventEmitter'. Did you mean 'implements'?

7410   class TouchBarSlider extends NodeJS.EventEmitter {
                                    ~~~~~~

node_modules/electron/electron.d.ts:7424:32 - error TS2689: Cannot extend an interface 'NodeJS.EventEmitter'. Did you mean 'implements'?

7424   class TouchBarSpacer extends NodeJS.EventEmitter {
                                    ~~~~~~

node_modules/electron/electron.d.ts:7545:22 - error TS2689: Cannot extend an interface 'NodeJS.EventEmitter'. Did you mean 'implements'?

7545   class Tray extends NodeJS.EventEmitter {
                          ~~~~~~

node_modules/electron/electron.d.ts:7995:29 - error TS2689: Cannot extend an interface 'NodeJS.EventEmitter'. Did you mean 'implements'?

7995   class WebContents extends NodeJS.EventEmitter {
```

### 対処

@types/node@13 が新しすぎる。

```
yarn remove @types/node
yarn add -D @types/node@12
```

### 参考
- https://github.com/electron/electron/issues/21612
