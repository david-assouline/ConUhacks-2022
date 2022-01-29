import request, { Response } from "../../utils/request";

type ResponseType = {
    data: string[][]
}

async function getPublicHealthFacilityList(): Promise<ResponseType> {
    let response: Response<ResponseType>;
    response = await request({
                                method: "GET",
                                url: `/PublicHealthFacilities`
                            });
                    
    if (response.status !== 200)
        throw new Error();

    return response.data;
}

export default getPublicHealthFacilityList;