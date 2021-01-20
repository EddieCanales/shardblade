# Shardblade

Shardblade is a simple library for doing consistent sharding. It uses MurmurHash3 consistent hashing in order to distribute your keys evenly and consistently.

This allows you to, given a value, produce the same shard every time. This should give you a reasonably even distribution of sharding for any inputs AND for any input the same shard should always be produced.

To learn more about MurMurHash3, check out the wikipedia page: https://en.wikipedia.org/wiki/MurmurHash

## Usage

### slice

Used for slicing your keys up into evenly distributed shards.

Given a key and the number of shards, returns the shard for that key. This uses consistent hashing to determine the shard, so the same key will always return the same shard. The response is a 0-indexed integer, so if there are 5 shards this function will return an integer from 0-4.

#### example

```javascript
const shardblade = require('shardblade');
const TOTAL_SHARDS = 10;

const shardbearers = [
  {
    name: 'Dalinar',
    shardbladeName: 'Oathbringer',
  },
  {
    name: 'Elhokar',
    shardbladeName: 'Sunraiser',
  },
];

shardbearers.forEach(shardbearer => {
  // let's decide which shard to go to based on the shardbearer's name
  const destinationShard = shardblade.slice(shardbearer.name, TOTAL_SHARDS);
  console.log(`${shardbearer.name} should go to shard #${destinationShard}`);
});
```
