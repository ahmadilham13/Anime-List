export const getMangaResponse = async(resource, query = "") => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const dataResult = await response.json()
    return dataResult
}