// simplified/targetted implementation of murmurhash3 for consistent hashing
function _hash(str) {
  let h = 0x6a09e667 ^ str.length;
  for (let i = 0; i < str.length; i += 1) {
    h = Math.imul(h ^ str.charCodeAt(i), 0xcc9e2d51);
    h = (h << 13) | (h >>> 19);
    h = Math.imul(h ^ (h >>> 16), 0x85ebca6b);
    h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
    h = (h ^= h >>> 16) >>> 0;
  }
  return h;
}

// uses murmurhash3 for consistent hashing to distribute your key to a consistent shard
function slice(key, numShards) {
  const shardIndex = _hash(key) % numShards;
  return shardIndex;
}

module.exports = {
  slice,
};
