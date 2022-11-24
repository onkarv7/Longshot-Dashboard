import React from 'react'
import data from "../../data.json";

import Box from "@mui/material/Box";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  // { field: "id", headerName: "ID", width: 50 },
  {
    field: "Keyword",
    headerName: "Keyword",
    width: 150,
    editable: true,
  },
  {
    field: "Volume",
    headerName: "volume",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "KD",
    headerName: "KD %",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "CPC",
    headerName: "CPC(USD)",
    type: "number",
    width: 90,
    editable: true,
  },
  {
    field: "COM",
    headerName: "COM.",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "Result",
    headerName: "Results",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "Intent",
    headerName: "Intent",
    type: "number",
    width: 50,
    editable: true,
  },

  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    Keyword: "shopping in barcelona",
    age: 35,
    Volume: 480,
    KD: 46,
    CPC: 0.24,
    COM: 0.12,
    Result: "313M",
  },
  {
    id: 2,

    Keyword: "how to open weed shop in barcelona",

    Volume: 320,
    KD: 12,
    CPC: 0,
    COM: 0,
    Result: "480M",
  },
  {
    id: 3,
    lastName: "Lannister",
    Keyword: "best shopping in barcelona",
    Volume: 260,
    KD: 44,
    CPC: 0,
    COM: 0.05,
    Result: "314M",
  },
  {
    id: 4,
    lastName: "Stark",
    Keyword: " shopping in barcelona spain",
    Volume: 140,
    KD: 44,
    CPC: 0.47,
    COM: 0.06,
    Result: "879M",
  },
  {
    id: 5,
    lastName: "Targaryen",
    Keyword: "best coffe shop in barcelona",
    Volume: 90,
    KD: 26,
    CPC: 0,
    COM: 0.1,
    Result: "221M",
  },
  {
    id: 6,
    lastName: "Melisandre",
    Keyword: "laxuary shopping in barcelona",
    Volume: 70,
    KD: 24,
    CPC: 0,
    COM: 0.2,
    Result: "198M",
  },
  {
    id: 7,
    lastName: "Clifford",
    Keyword: "tatto shopsin barcelona spain",
    Volume: 70,
    KD: 23,
    CPC: 0,
    COM: 0.04,
    Result: "438M",
  },
  {
    id: 8,
    lastName: "Frances",
    Keyword: "where to shop in barcelona",
    Volume: 70,
    KD: 36,
    CPC: 0,
    COM: 0.2,
    Result: "250M",
  },
  {
    id: 9,
    lastName: "Roxie",
    Keyword: "best places to shop in barcelona",
    Volume: 40,
    KD: 42,
    CPC: 0,
    COM: 0.03,
    Result: null,
  },
  {
    id: 9,
    lastName: "Roxie",
    Keyword: "is shopping cheap in barcelona",
    Volume: 40,
    KD: 36,
    CPC: 0,
    COM: 0,
    Result: "215M",
  },
];

const Table = () => {
  return (
    <div> <Box sx={{ height: 400, width: "100%" }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={7}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Box></div>
  )
}

export default Table