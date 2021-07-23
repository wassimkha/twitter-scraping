import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Button, Link, TextField} from "@material-ui/core";

const Portal = () => {
    const [rows, setRows] = useState([]);
    const [mongoSearch, setMongoSearch] = useState('{}');
    const updateData = async () => {
        console.log("updating data")

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ page: 0, mongo_params: JSON.parse(mongoSearch) })
        };
        try {
            const response = await fetch('http://<url>/aggregator/aggregate-users', requestOptions);
            const data = await response.json();
            if (data && data.data) {
                const newRows = []
                data.data.forEach(user => {
                    newRows.push({
                        id: user["twitter_id"],
                        name: user["name"],
                        username: user["username"],
                        location: user["location"],
                        followerCount: user["followers_count"],
                        description: user["description"]
                    })
                })
                setRows(newRows);
            }
        } catch (e) {
            console.log(e)
        }
    }
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
            renderCell: (params) => (
                <Link href={`https://twitter.com/${params.value}`}>{params.value}</Link>
            )
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

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Twitter Users</h1>
            <div>
                <TextField value={mongoSearch} onChange={(e) => setMongoSearch(e.target.value)} id="outlined-basic" label="Mongo Filter" variant="outlined" style={{width: "100%"}}/>
                <br />
                <br />
                <Button variant="contained" onClick={() => updateData()} color="primary">Search</Button>
            </div>

            <br />
            <br />
            <br />

            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
            />
        </div>
    );

}

export default Portal;
