import { AgeGroup } from "../../../components/pages/AgeGroupView";
import request, { Response } from "../../utils/request";

type CreateResponse = {
    success: boolean,
    errMsg: string
}

async function createAgeGroup(ageGroup: AgeGroup): Promise<CreateResponse> {
    let response: Response<CreateResponse>;
    response = await request({
                                method: "POST",
                                url: `/createAgeGroup`,
                                body: {
                                    num: ageGroup.number, 
                                    lowerBound: ageGroup.lowerBound, 
                                    upperBound: ageGroup.upperBound
                                }
                            });

    return response.data;
}

export default createAgeGroup;