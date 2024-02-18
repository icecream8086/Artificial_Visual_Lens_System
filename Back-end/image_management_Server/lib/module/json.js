async function parseJson(str) {
    try {
        let json = JSON.parse(str);
        return json;
    } catch (error) {
        return { error: 'Invalid JSON' };
    }
}