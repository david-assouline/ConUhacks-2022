import { ExtraInfo } from "../../../components/organism/PHFExtraInfo";
import request, { Response } from "../../utils/request";

async function getExtraPHFInfo(startDate: string, facilityName: string): Promise<ExtraInfo> {
    let response: Response<ExtraInfo>;
    response = await request({
                                method: "GET",
                                url: `/getExtraInfoPHF?startDate=${startDate}&facilityName=${facilityName}`
                            });

    return response.data;
}

export default getExtraPHFInfo;