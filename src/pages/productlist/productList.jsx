// import { DataGrid } from "@mui/x-data-grid";


// import { DeleteOutline, DeleteOutlineOutlined } from "@mui/icons-material";
// import { useState } from "react";
// import { Link } from "react-router-dom";


// const ProductList=()=> {
//   const [data, setData] = useState(productRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id === id));
//   };
// const actionColumn=[
//   {field:"action",
//     headerName:"Action",
//     width:150,
//     renderCell:(params)=>{
//       return (
//         <div className="cellAction">
//          <Link to={"/products/test"} style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//           </Link>
//           <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row._id)}
//             >
//               Delete
//             </div>
//         </div>
//       )
//     },
  
//     }
// ]

  
  
  
  

//     return (
//       <div style={{ height: 700, width: '100%' }}>
//       <div className="datatableTitle">
//         Add New Product
//         <Link to="/product/new" className="link">
//           Add New
//         </Link>
//       </div>
//         <DataGrid
//           rows={productRows}
//           columns={productColumns.concat(actionColumn)}
//           pageSize={9}
//           rowsPerPageOptions={[9]}
//           checkboxSelection
//           disableSelectionOnClick
//         />
//       </div>
//     );
//   }
//   export default ProductList;


import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productlist.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../redux/apiCalls";
const Datatable = () => {
  const dispatch= useDispatch()
  const products=useSelector(state=>state.product.products)

  useEffect(()=>{
    getProducts(dispatch);
  },[dispatch])
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
   deleteProducts(id,dispatch)
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/products/"+ params.row._id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={products}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
