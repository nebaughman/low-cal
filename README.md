# Low-Cal

The low-calorie Vue calendar.

> There are lower-calorie (smaller) Vue calendars, such as [flatpickr](https://github.com/flatpickr/flatpickr). I just thought _low-cal_ sounded clever.

> Fair warning: The primary purpose of this project is to learn a thing or two, rather than maintain a fully-featured component. _Share and enjoy._

## What it Does

Low-Cal provides a Vue component to show a simple month-oriented calendar.

It's not a date _picker_ as such, but could be used as the basis for one.

To learn how to use it ... kindly refer to the demo code :)

## Technologies

* [Vite](https://vitejs.dev/) 
* [Vue](https://vuejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Moment.js](https://momentjs.com/)
* [FontAwesome](https://fontawesome.com/) via [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome)

## Development

* Vue component library in project root
  * `yarn build` produces `\lib` (for npm publication)
  * TODO: Do not include `\lib` in repo (it's a build artifact)
* Demo app under `\demo` (builds into `\docs` for GitHub Pages)
  * TODO: Consider GitHub Actions to build demo (no artifacts in repo)

Branching strategy:

* `develop` branch follows development
* `master` branch holds tagged releases (only)

Release process (from `develop` branch, in project root):

1. Update the version in `package.json`
2. `git commit -a -m "vX.Y.Z"` (with optional release notes)
3. `yarn build` (produces production `\lib`)
4. `cd demo && yarn build && cd ..` (produces `\docs`)
5. `git checkout master && git merge develop && git tag X.Y.Z` (no 'v')
6. `git push --all && git push --tags`
7. `git checkout develop` (back to work)

    _... voila!_

> `publish.sh` automates this process

## Demo Site

[Low-Cal Demo Site](https://nebaughman.github.io/low-cal) (via [GitHub Pages](https://pages.github.com/))

# Roadmap

- Publish library to npm
- Style configuration

# License

[MIT License](LICENSE.txt) &copy; Nathaniel Baughman

