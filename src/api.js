
export async function fetchPrefectures() {
    const res = await fetch(`/api//v1/prefectures`);
    console.log(res);
    return await res.json();
}

export async function fetchTotal() {
    const res = await fetch(`/api//v1/total`);
    return await res.json();
}

