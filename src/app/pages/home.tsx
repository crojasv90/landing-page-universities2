import React, {useEffect, useState} from 'react';
import CustomGrid from "../component/customGrid";
import Api from "../config/Api";
import {GridRenderCellParams} from "@mui/x-data-grid";
import {ReactCountryFlag} from "react-country-flag"
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)
    let history = useNavigate();

    useEffect(() => {
        Api.getUniversities(setData)
            .then(() => setLoading(false))
    }, [])

    const handleRowSelection = (e:any) => {
        history(`university/${e.country}`);
    }

    const columns = [
        {field: 'country', headerName: 'Country', minWidth: 400},
        {field: 'alpha_two_code', headerName: 'Flag', minWidth: 50,
            renderCell: (params: GridRenderCellParams<string>) => (
                <ReactCountryFlag countryCode={params.value}
                                  svg
                                  style={{
                                      width: '2em',
                                      height: '2em',
                                  }}
                                  title={params.value}
                />
            ),}]

    return (
        <>
            <CustomGrid data={data} columns={columns} loading={loading} defaultSortingField="country" onRowClick={handleRowSelection}/>
        </>
    );
};

export default HomePage;
