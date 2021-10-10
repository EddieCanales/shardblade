/**
 * Generates a consistent shard for a given key.
 * @param key a value to generate the shard value from 
 * @param numShards the total number of shards
 */
 export function slice(key: any, numShards: number): number;