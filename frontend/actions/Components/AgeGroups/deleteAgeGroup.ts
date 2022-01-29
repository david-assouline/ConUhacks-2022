import request, { Response } from "../../utils/request";

type DeleteResponse = {
    success: boolean,
    errMsg: string
}

async function deleteAgeGroup(ageGroupNum: string): Promise<DeleteResponse> {
    let response: Response<DeleteResponse>;
    response = await request({
                                method: "POST",
                                url: `/deleteAgeGroup`,
                                body: {
                                    num: ageGroupNum
                                }
                            });

    return response.data;
}

export default deleteAgeGroup;