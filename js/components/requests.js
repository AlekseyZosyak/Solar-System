
const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`ERROR`);
    }
    return await res.json();
}

export default getResource;