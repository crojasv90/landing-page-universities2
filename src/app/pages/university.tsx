import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import CustomGrid from "../component/customGrid";
import Api from "../config/Api";
import {GridRenderCellParams} from "@mui/x-data-grid";
import {useParams} from "react-router-dom";


const UniversitiesPage = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    let {country } = useParams();

    useEffect(() => {
        Api.getSearchUniversities('', country)
            .then(data => { setData(data)} )
            .then(() => setLoading(false))
    }, [])

    const handleRowSelection = (e:any) => {
        console.log(e.name);
    }

    const columns = [
        {field: 'name', headerName: 'Name', minWidth: 400},
        {field: 'web_pages', headerName: 'Web Pages', minWidth: 350, renderCell: (params: GridRenderCellParams<string>) => (
                <strong>
                    <Button target="_blank" href={params.value}>{params.value}</Button>
                </strong>
            ),},
        {field: 'state-province', headerName: 'State', minWidth: 150},
        {field: 'domains', headerName: 'Domains', minWidth: 150},
    ]

    return (
        <>
            <CustomGrid data={data} columns={columns} loading={loading} defaultSortingField="name" onRowClick={handleRowSelection}/>
            <div style={{paddingTop:10}}>
                <Button variant="contained" href="/">
                    Back to Home
                </Button>
            </div>

        </>
    );
}

export default UniversitiesPage;
