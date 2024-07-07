#!/bin/bash
set -e

#
# Publish (build & deploy) new version
#

#BRANCH=$(git rev-parse --abbrev-ref HEAD)
BRANCH=$(git branch --show-current)
if [[ "$BRANCH" != "develop" ]]; then
  echo Error: Only run in 'develop' branch
  exit 1
fi

PACKAGE_FILE="package.json"

if [[ ! -f $PACKAGE_FILE ]]; then
  echo Error: Missing $PACKAGE_FILE
  exit 1
fi

OLD_VERSION=$(jq -r .version package.json)
echo "Old version: $OLD_VERSION"

NEW_VERSION=${1:?Error: Pass new version}
#echo "New version: $NEW_VERSION"

# close enough
if [[ ! $NEW_VERSION =~ ^[0-9]*\.[0-9]*\.[0-9]*$ ]] ; then
  echo "Invalid version"
  exit 1
fi

read -p "Publish v${NEW_VERSION}? [y|N] " -n 1 -r PUBLISH
[[ $PUBLISH ]] && echo # avoid extra newline
if [[ ! $PUBLISH =~ ^[Yy]$ ]]; then
  echo "Abort"
  exit 0
fi

echo "Publishing v${NEW_VERSION}..."
sleep 4 # safety dance

TMP_FILE=$(mktemp)
jq --arg v "$NEW_VERSION" '.version = $v' $PACKAGE_FILE > "$TMP_FILE" && mv "$TMP_FILE" $PACKAGE_FILE

# special step to build docs for github pages
yarn build

git commit -am "v${NEW_VERSION}"

git checkout master && git merge develop && git tag "${NEW_VERSION}" && git push --all && git push --tags && git checkout develop

# Pushing new master may trigger CI/CD
