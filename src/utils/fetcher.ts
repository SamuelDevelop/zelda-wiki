
export async function fetchSpecificData(path:string, specificData: string) {
    const response = await fetch(`https://zelda.fanapis.com/api/${path}?name=${specificData}`);

    return response.json();
}

export async function fetchDataset(path:string, limit: number) {
    const response = await fetch(`https://zelda.fanapis.com/api/${path}?limit=${limit}`);

    return response.json();
}
