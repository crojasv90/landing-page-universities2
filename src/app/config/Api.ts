import {ApiError, FileTooLargeException, UnauthorizedException} from "./CustomError";
import _ from "lodash";

interface IApiResponse {
    status: number;
    ok:boolean;
}

const _apiPath = "http://universities.hipolabs.com";

const errorHandling = (response:IApiResponse, errorMessage:string) => {
    if (response.status === 403) {
        throw new UnauthorizedException("Not have authorization");
    } else if (response.status === 413) {
        throw new FileTooLargeException('File too large');
    } else if (!response.ok) {
        throw new ApiError(errorMessage);
    }
};

const Api = {

    getSearchUniversities: async (name:any, country:any) => {
        let response = await fetch(
            `${_apiPath}/search?name=${name}&country=${country}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );

        errorHandling(response, 'Unable to retrieve Search in universitys');

        let data = await response.json();
        return data;
    },
    getUniversities: async (setData:any) => {

        let response = await fetch(
            `${_apiPath}/search`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );
        errorHandling(response, 'Unable to retrieve universitys');

        let data = await response.json();
        const distinctCountries = _.uniqBy(data, 'country');
        setData(distinctCountries);
        return distinctCountries;
    }
};

Object.freeze(Api);
export default Api;
