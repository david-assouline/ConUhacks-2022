import request, { Response } from "../../utils/request";

type DeleteResponse = {
    success: boolean,
    errMsg: string
}

async function deletePHFInformation(name: string): Promise<DeleteResponse> {
    let response: Response<DeleteResponse>;
    response = await request({
                                method: "POST",
                                url: `/deleteFacility`,
                                body: {
                                    name: name
                                }
                            });

    // if (response.status !== 200)
    //     throw new Error();

    return response.data;
}

export default deletePHFInformation;