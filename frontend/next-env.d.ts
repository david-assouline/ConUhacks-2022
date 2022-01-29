/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.


type ApiResponse = {
    data: ApiData,
    filters: string[]
}

type ApiData = {
    [key: string]: {
        [key: string]: number
    }
}