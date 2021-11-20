import {DataGrid, GridSortDirection, GridSortModel} from '@mui/x-data-grid';
import CustomToolbar from "./customToolbar";
import CustomLoadingOverlay from "./customLoadingOverlay";
import CustomNoRowsOverlay from "./customNoRowsOverlay";
import {useState} from "react";
import '../../style/customGrid.css';

export default function CustomGrid({data, columns, loading, defaultSortingField, onRowClick}:any) {
    const [sortModel, setSortModel] = useState<GridSortModel>([
        {
            field: defaultSortingField,
            sort: 'asc' as GridSortDirection,
        },
    ]);

    return (
        <div style={{ height: 680, width: '100%' }}>
            <DataGrid
                getRowId={(r:any) => r.name}
                rows={data!}
                columns={columns!}
                pageSize={10}
                loading={loading!}
                density="standard"
                sortingOrder={['desc', 'asc']}
                sortModel={sortModel}
                onSortModelChange={(model) => setSortModel(model)}
                disableSelectionOnClick={true}
                onRowClick={(rowData) => onRowClick(rowData.row)}
                components={{
                    Toolbar: CustomToolbar,
                    LoadingOverlay: CustomLoadingOverlay,
                    NoRowsOverlay: CustomNoRowsOverlay
                }}
            />
        </div>
    );
}
