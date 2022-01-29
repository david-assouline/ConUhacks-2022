import { AgeGroup } from "../../../components/pages/AgeGroupView";
import request, { Response } from "../../utils/request";

type UpdateResponse = {
    success: boolean,
    errMsg: string
}

async function updateAgeGroup(ageGroupNum: string, update: AgeGroup): Promise<UpdateResponse> {
    let response: Response<UpdateResponse>;
    response = await request({
                                method: "POST",
                                url: `/editAgeGroup`,
                                body: {
                                    oldNum: ageGroupNum, 
                                    num: update.number, 
                                    lowerBound: update.lowerBound, 
                                    upperBound: update.upperBound
                                }
                            });

    return response.data;
}

export default updateAgeGroup;