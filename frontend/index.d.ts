type ApiResponse = {
    filters: string[]
    query: string,
    versions: string,
    success: boolean,
    suggestions: string[],
    result: {
        data: ApiData,
        count: {
            min: number,
            max: number
        }
    }
}

type ApiData = {
    [key: string]: {
        [key: string]: number
    }
}