export async function fetchPrefectures() {
    return await fetch(`https://covid19-japan-web-api.now.sh/api//v1/prefectures`).json();
}

export async function fetchTotal() {
    return await fetch(`https://covid19-japan-web-api.now.sh/api//v1/total`).json();
}

export async function fetchPositives() {
    return await fetch(`https://covid19-japan-web-api.now.sh/api//v1/positives`).json();
}

