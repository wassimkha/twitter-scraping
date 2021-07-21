import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Button, TextField} from "@material-ui/core";
const Portal = () => {
    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 100,
            editable: false,
            sortable: false,
            resizable: true
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 150,
            editable: false,
            sortable: false,
        },
        {
            field: 'location',
            headerName: 'Location',
            width: 150,
            editable: false,
            sortable: false,
        },
        {
            field: 'followerCount',
            headerName: 'Followers',
            type: 'number',
            width: 140,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            resizable: true
        },
    ];

    const rows = [
        { id: 43, name: 'Snow', username: 'fasdfds', location: 'Montreal', followerCount: 22234, description: "VC @ khan" },
        { id: 521, name: 'saf', username: 'fasddfas', location: 'NYC', followerCount: 12445, description: "Dad, VC @Homebrew & Board Dir. @kippbayarea. Ex-Twitter VP Product/Google PM. Food, scotch & @Giants fan. Penn educated, Vegas raised. Optimizing for happiness." },
        { id: 4, name: 'fad', username: 'afdfas', location: 'LA', followerCount: 41, description: "VC @ khan" },
        { id: 321, name: 'fds', username: 'fasfasf', location: 'NYC', followerCount: 4321, description: "VC @ khan" },
        { id: 421, name: 'ds', username: 'fasdfdsg', location: 'NYC', followerCount: 123, description: "VC @ khan" },
        { id: 241, name: 'fads', username: 'afdsfas', location: 'SF', followerCount: 312, description: "VC @ khan" },
        { id: 45432521, name: 'fds', username: 'fadsfasg', location: 'SF', followerCount: 412, description: "VC @ khan" },
        { id: 434221, name: 'gfas', username: 'afs', location: 'Florida', followerCount: 5132, description: "VC @ khan" },
        { id: "421", name: 'fafsda', username: 'fafsa', location: 'Montreal', followerCount: 13, description: "VC @ khan" },
        { id: 532452, name: 'fdasfas', username: 'afsdfda', location: 'Montreal', followerCount: 421331, description: "VC @ khan" },

    ];
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Twitter Users</h1>
            <div>
                <TextField id="outlined-basic" label="Mongo Filter" variant="outlined" style={{width: "100%"}}/>
                <br />
                <br />
                <Button variant="contained" color="primary">Search</Button>
            </div>

            <br />
            <br />
            <br />

            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                onRowsScrollEnd={() => {
                    console.log("end reached");
                }}
            />
        </div>
    );

}

export default Portal;
