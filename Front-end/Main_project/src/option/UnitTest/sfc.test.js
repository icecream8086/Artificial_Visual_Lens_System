/* eslint-disable no-undef */
const {sfc} = require('../sfc/sfc');

describe('sfc', () => {
  let sfcs;
  beforeEach(() => {
    sfcs = new sfc();
  });

  test('setAssetDict should set asset dictionary', () => {
    const key = 'image';
    const path = '/path/to/image.png';
    const source = 'local';

    sfcs.setAssetDict(key, path, source);

    expect(sfcs.assetDicts.local[key]).toBe(path);
  });

  test('open should load local asset', async () => {
    const key = 'image';
    const path = '/path/to/image.png';
    const source = 'local';

    sfcs.setAssetDict(key, path, source);
    const asset = await sfcs.open(key, source);

    expect(asset).toBe(path);
    expect(sfcs.assets.get(key)).toBe(path);
  });

  test('open should load online asset', async () => {
    const key = 'image';
    const url = 'https://example.com/image.png';
    const source = 'online';

    sfcs.setAssetDict(key, url, source);
    const asset = await sfcs.open(key, source);

    expect(asset).toBe(url);
    expect(sfcs.assets.get(key)).toBe(url);
  });

  test('open should return null if asset does not exist', async () => {
    const key = 'image';
    const source = 'local';

    const asset = await sfcs.open(key, source);

    expect(asset).toBeUndefined();
    expect(sfcs.assets.get(key)).toBeUndefined();
  });

  test('read should return asset', () => {
    const key = 'image';
    const path = '/path/to/image.png';

    sfcs.assets.set(key, path);
    const asset = sfcs.read(key);

    expect(asset).toBe(path);
  });

  test('unlink should remove asset', () => {
    const key = 'image';
    const path = '/path/to/image.png';

    sfcs.assets.set(key, path);
    sfcs.unlink(key);

    expect(sfcs.assets.get(key)).toBeUndefined();
  });
});