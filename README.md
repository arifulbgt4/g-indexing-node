# check node.js version
`node -v`
if it's not available on your machine then install from here [here](https://nodejs.org/en)

# Run server

1. `npm install`
2. `node index.js`

# change your indexing URLS

open file `index.js`
and replace your urls here

```
// Example batch
const urls = [
  "https://yourdomain.com/dynamic-post-1",
  "https://yourdomain.com/dynamic-post-2",
];
```