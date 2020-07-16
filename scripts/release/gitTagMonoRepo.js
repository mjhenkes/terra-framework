const fs = require('fs');
const { execSync } = require('child_process');

const getTags = (output) => {
  const successString = 'Successfully published:\n';
  const lastIndexOf = output.lastIndexOf(successString);
  const substring = output.substring(lastIndexOf + successString.length);
  const withoutDashes = substring.replace(/ - /g, '').trim();
  return withoutDashes.split('\n');
};

// const createTag = (tag) => exec(`git tag ${tag}`);

if (fs.existsSync('./publish-output.txt')) {
  const output = fs.readFileSync('./publish-output.txt', 'utf8');
  console.log(output);
  const tags = getTags(output);
  console.log('tags', JSON.stringify(tags, null, 2));
  if (tags.length > 0) {
    tags.forEach(tag => execSync(`git tag -a ${tag} -m "${tag}"`));
    execSync('git push origin --tags');
  }
}
