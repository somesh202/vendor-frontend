import React, { useState } from "react";
import MetaData from "../MetaData";
import { Space, Table, Tag } from "antd";
import axios from "axios";
import EditVendorForm from "./EditVendorForm";
const AllVendors = ({ vendorsData, setVendorsData }) => {
  const [editedRecord, setEditedRecord] = useState({ status: false, data: {} });
  const handleDelete = async (record) => {
    let res = await axios.delete(`http://localhost:5000/vendor/${record._id}`);
    // console.log(vendorsData.filter((o)=>{
    //   return o._id!==record._id
    // }))
    if (res.status == 200 || res.status == 204) {
      setVendorsData({
        vendors: vendorsData.filter((o) => {
          return o._id !== record._id;
        }),
      });
    } else {
      window.alert("Unable to delete (Network issue)");
    }

    // console.log(text, record, "I data");
  };
  const handleEdit = async (record, index) => {
    setEditedRecord({ status: true, data: { ...record }, recordIndex: index });
    
  };
  const columns = [
    {
      title: "Options",
      key: "vendorName",
      dataIndex: "vendorName",
      render: (text, record, index) => (
        <>
          <button
            onClick={() => {
              handleDelete(record, index);
            }}
          >
            {"Delete"}
          </button>
          <button
            onClick={() => {
              // console.log(index,"recordIndex")
              handleEdit(record, index);
            }}
          >
            {"Edit"}
          </button>
        </>
      ),
    },
    {
      title: "Vendor Name",
      dataIndex: "vendorName",
      key: "vendorName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Account Number",
      dataIndex: "accountNumber",
      key: "accountNumber",
    },
    {
      title: "Bank Name",
      dataIndex: "bankName",
      key: "bankName",
    },
    {
      title: "Address One",
      dataIndex: "addressOne",
      key: "addressOne",
    },
    {
      title: "Address Two",
      dataIndex: "addressTwo",
      key: "addressTwo",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Zip Code",
      dataIndex: "zipcode",
      key: "zipcode",
    },
  ];
  return (
    <>
      {editedRecord.status ? (
        <>
          <EditVendorForm
            vendorsData={vendorsData}
            setVendorsData={setVendorsData}
            record={editedRecord.data}
            setEditedRecord={setEditedRecord}
            recordIndex={
              editedRecord.recordIndex || editedRecord.recordIndex===0 ? editedRecord.recordIndex : null
            }
          />
        </>
      ) : (
        <>
          <MetaData title="ALL VENDORS" />
          <Table columns={columns} dataSource={vendorsData} />
        </>
      )}
    </>
  );
};

export default AllVendors;
