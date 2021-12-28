

export const getApiUrl = (framework: string = "angular", page: string = "0") => `https://hn.algolia.com/api/v1/search_by_date?query=${framework}&page=${page}&hitsPerPage=8`