# Low-Cal

The low-calorie<sup>*</sup> Vue calendar.

> (*) There are lower-calorie (smaller) Vue calendars, such as [flatpickr](https://github.com/flatpickr/flatpickr). I just thought _low-cal_ sounded clever.

## What it Does

Low-Cal provides a Vue component to show a simple month-oriented calendar.

It's not a date _picker_ as such, but could be used as the basis for one.

To learn how to use it ... kindly refer to the code :)

> Fair warning: The primary purpose of this project is to learn a thing or two, rather than maintain a fully-featured component. _Share and enjoy._

## Technologies

* [Vue-Cli](https://cli.vuejs.org/) and [Vue.js](https://vuejs.org/)
* [Moment.js](https://momentjs.com/)
* [FontAwesome](https://fontawesome.com/) via [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome)
* [TypeScript](https://www.typescriptlang.org/)

## Points of Interest

* See `main.ts`, which configures VueFontAwesome as `<fa-icon>` component and imports only the specific icons needed.

* `DateComputer.ts` demonstrates a [vue-class-component](https://github.com/vuejs/vue-class-component) TypeScript class used as a reactive state class (_not_ a Vue component).

## Development

**Build ala Vue-Cli:**

* `yarn install` : set up project
* `yarn serve` : hot-reloading for development
* `yarn build` : compiles distribution for production

Development process (loosely [git-flow](https://nvie.com/posts/a-successful-git-branching-model/)):

* `master` branch holds tagged releases (only)
* `develop` branch follows development

> Other git-flow tenets are loosely followed (it's a small project)

Release process (from `develop` branch):

1. Update the version in `package.json`
2. `git commit -a -m "vX.Y.Z"` (with optional release notes)
3. `yarn build` (produces production dist, clears `/docs`, copies `/dist` to `/docs` for GitHub Pages demo site)
4. `git checkout master && git merge develop && git tag X.Y.Z` (no 'v')
5. `git push --all && git push --tags`
6. `git checkout develop` (back to work)

    _... voila!_

> `publish.sh` automates this process

## Demo Site

[**Low-Cal Demo Site**](https://nebaughman.github.io/low-cal)

This project is hosted on [GitHub](https://github.com/), using GitHub Pages to host the demo site.

> Note: I chose to include the static demo site under `/docs` directory. So, part of the release process is to build the new distribution and put it under `/docs` before merging to master.

## Roadmap

- Upgrade to Vite + Vue3 + TypeScript
- Build this as a library for npm

## License

[MIT License](LICENSE.txt) &copy; Nathaniel Baughman

