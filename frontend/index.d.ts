type ApiResponse = {
    data: ApiData,
    filters: string[]
}

type ApiData = {
    [key: string]: {
        [key: string]: number
    }
}