const fs = require('fs');
const { execSync } = require('child_process');

const getTags = (output) => {
  const successString = 'Successfully published:\n';
  const lastIndexOf = output.lastIndexOf(successString);
  if (lastIndexOf < 0) {
    return null;
  }
  const substring = output.substring(lastIndexOf + successString.length);
  const withoutDashes = substring.replace(/ - /g, '').trim();
  return withoutDashes.split('\n');
};

// const createTag = (tag) => exec(`git tag ${tag}`);

if (fs.existsSync('./publish-output.txt')) {
  const output = fs.readFileSync('./publish-output.txt', 'utf8');
  console.log(output);
  const tags = getTags(output);
  if (tags) {
    console.log('tags', JSON.stringify(tags, null, 2));
    tags.forEach(tag => execSync(`git tag -a ${tag} -m "${tag}"`));
    execSync('git push origin --tags');
  } else {
    console.log('Nothing to tag');
  }
}
