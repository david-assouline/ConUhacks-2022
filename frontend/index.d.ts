type ApiResponse = {
    data: ApiData,
    filter: string[]
    versions: number,
    resultSuccess: boolean,
    query: string,
    suggestions: string[],

}

type ApiData = {
    [key: string]: {
        [key: string]: number
    }
}