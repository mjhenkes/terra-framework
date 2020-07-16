#!/bin/bash
# A sample Bash script, by Ryan
lerna publish from-package --yes | tr -d ' - ' | xargs git tag
lerna publish from-package --yes | tr -d ' - ' | xargs echo

sed -e 's/ - //g'

cat lerna-publish-output.txt | grep -A 1000 'Successfully published'| grep -e '^ - @[a-z]\+/'

cat lerna-publish-output.txt | grep -A 1000 'Successfully published' | grep -e '-' | sed -e 's/ - //g' | xargs -n 1 git tag

cat lerna-publish-output.txt | grep -A 1000 'Successfully published' | grep -e '-' | sed -e 's/ - //g' | xargs -n 1 echo

cat test.txt | xargs -n 1 echo 'derp'

npx lerna publish from-package --yes | grep -A 1000 'Successfully published' | grep -e '-' | sed -e 's/ - //g' | xargs -n 1 git tag
git push origin --tags