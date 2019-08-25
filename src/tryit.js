const { shard } = require('./index');

if (!process.argv[2] || !process.argv[3]) {
  console.log('usage: node src/tryit.js "string to shard by" total_shards');
}
const key = process.argv[2] || 'Hello world!';
const totalShards = parseInt(process.argv[3] || 3, 10);
const shardIndex = shard(key, totalShards, 10);

console.log(`Sharding string "${key}" between ${totalShards} shards.`);
console.log(`Sharded to shard #${shardIndex}`);
