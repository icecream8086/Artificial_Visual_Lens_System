class sfc {
    constructor() {
        this.assets = new Map();
        this.assetDicts = {
            local: {},
            online: {}
        };
    }

    // 设置资源字典,默认为本地字典
    setAssetDict(key, path, source = 'local') {
        this.assetDicts[source][key] = path;
    }

    // 打开资源
    async open(key, source = 'local') {
        let asset;
        if (source === 'local') {
            asset = await this.loadLocalAsset(this.assetDicts.local[key]);
        } else if (source === 'online') {
            asset = await this.loadOnlineAsset(this.assetDicts.online[key]);
        }
        if (asset !== null) {
            this.assets.set(key, asset);
            return asset;
        }
        return null;
    }

    // 读取资源
    read(key) {
        return this.assets.get(key);
    }

    // 删除资源
    unlink(key) {
        this.assets.delete(key);
    }

    // 加载本地资源
    async loadLocalAsset(path) {
        // 本地资源
        // 如果资源不存在,先尝试网络中是否存在,如果存在,则下载到本地
        // 如果两个地方资源都不存在,返回 null
        // todo: ...
        return path;
    }

    // 加载网络资源
    async loadOnlineAsset(url) {
        // 网络资源
        // 如果资源不存在，返回 null
        // todo: ...
        return url;
    }
}
module.exports = { sfc };