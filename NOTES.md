# Project Notes

## Upgrade to Vite

> July 2024

Project previously built with vue-cli (webpack). Updating framework to Vite + Vue3 + TypeScript.

**Strategy:** Remove all content from project. Replace with initial vite+vue-ts template. Add additional libraries and config. Migrate prior content into new framework.

### Vite + Vue3

- https://vitejs.dev/guide/

> Note: Node v20 did not work.

```
$ nvm use 18
> Now using node v18.20.1 (npm v10.5.0)
$ yarn create vite low-cal --template vue-ts
```

Components in this project currently use JS Vue options syntax, rather than class structure. Plan is to migrate to TS class structure with `vue-facing-decorator` (see below). At least for now, support importing JS components by adding to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "allowJs": true
  }
}
```

### v-model

In Vue2 `v-model="date"` would work with component that has:
```js
model: {
  prop: "date"
  event: "date"
}
```

Vue3 drops this in favor of default vs named `v-model:date="date"` style bindings: https://vuejs.org/guide/components/v-model

### App version

Yet another technique for exposing `package.json` version to app:
- Create `.env` with  `VITE_APP_VERSION=$npm_package_version`
- Augment `src/vite-env.d.ts` with (https://vitejs.dev/guide/env-and-mode#intellisense-for-typescript):
```ts
interface ImportMetaEnv {
readonly VITE_APP_VERSION: string
// more env variables...
}

interface ImportMeta {
readonly env: ImportMetaEnv
}
```
- Access in code with `import.meta.env.VITE_APP_VERSION`

### moment

```
$ yarn add moment
```

> Note: [moment.js](https://momentjs.com/docs/#/-project-status/) will likely be replaced with [Luxon](https://moment.github.io/luxon/)

### vue-facing-decorator

- https://facing-dev.github.io/vue-facing-decorator/

```
$ yarn add vue-facing-decorator
```
Enable `experimentalDecorators` in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

# Lib vs Demo

Aug 2024

Splitting project between component library and demo app.

https://blog.ayitinya.me/articles/how-to-create-and-publish-vue-component-to-npm

I did not adjust the dependencies (vue is a normal app dependency rather than a peerDependency). TBD

Seems that vite can be configured for lib mode *or* app build mode. Cannot use same config to build a lib and build an app (eg, the demo site). For now, manually commenting out lib options in `vite.config.ts` for normal demo app build. Uncomment and run `yarn build` for lib build. Better solution would be to have a separate subproject for the demo, which depends on the lowcal library build. This might require yarn workspaces (TBD).

Globally defined `<fa-icon>` was not recognized in library, so directly importing and using `FontAwesomeIcon` in components that depend on it.

Globally imported Font Awesome Icons were not bundled into library. Instead, importing icons and adding to FA library in components that need certain icons. This ensured that the dependency was bundled.