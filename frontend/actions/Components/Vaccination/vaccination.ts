import { Vaccine } from "../../../components/pages/VaccineView";
import { Vaccination } from "../../../pages/vaccinate";
import request, { Response } from "../../utils/request";

type CreateResponse = {
    success: boolean,
    errMsg: string
}

async function createVaccination(vaccination: Vaccination): Promise<CreateResponse> {
    let response: Response<CreateResponse>;
    response = await request({
                                method: "POST",
                                url: `/createVaccination`, 
                                body: {
                                    firstName: vaccination.firstName, 
                                    lastName: vaccination.lastName, 
                                    middleInitial: vaccination.middleIntials, 
                                    lotNumber: vaccination.lotNumber, 
                                    nurseSSN: vaccination.nurseSSN, 
                                    vaccineName: vaccination.vaccineName, 
                                    locationName: vaccination.facilityName, 
                                    country: vaccination.country 
                                }
                            });

    return response.data;
}

export default createVaccination;