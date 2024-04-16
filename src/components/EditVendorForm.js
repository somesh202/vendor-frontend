import { Button, Form, Input, Row, Col } from "antd";
import axios from "axios";

import React, { useState } from "react";
import { json } from "react-router-dom";
import MetaData from "../MetaData";
const EditVendorForm = ({ vendorsData,record,setEditedRecord,recordIndex,setVendorsData }) => {
  let [vendorName, setVendorName] = useState(record.vendorName);
  let [accountNumber, setAccountNumber] = useState(record.accountNumber);
  let [bankName, setBankName] = useState(record.bankName);
  let [addressOne, setAddressOne] = useState(record.addressOne);
  let [addressTwo, setAddressTwo] = useState(record.addressTwo);
  let [city, setCity] = useState(record.city);
  let [country, setCountry] = useState(record.country);
  let [zipcode, setZipCode] = useState(record.zipcode);
  const { TextArea } = Input;
  let handleSubmit = async () => {
    const edited={}
    if(vendorName!==record.vendorName){
      edited.vendorName=vendorName
    }
    if(accountNumber!==record.accountNumber){
      edited.accountNumber=accountNumber
    }
    if(bankName!==record.bankName){
      edited.bankName=bankName
    }
    if(addressOne!==record.addressOne){
      edited.addressOne=addressOne
    }
    if(addressTwo!==record.addressTwo){
      edited.addressTwo=addressTwo
    }
    if(city!==record.city){
      edited.city=city
    }
    if(country!==record.country){
      edited.country=country
    }
    if(zipcode!==record.zipcode){
      edited.zipcode=zipcode
    }
    
    let res = await axios.put(`http://localhost:5000/vendor/${record._id}`, edited);
    
    if (res.status == 200 || res.status == 204) {
      console.log(recordIndex,"11111", vendorsData[recordIndex],vendorName)
      // vendorsData[recordIndex].vendorName=vendorName
      const vendorsData1=vendorsData.map((o)=>{
        if(o._id===record._id){
          return {
            vendorName: vendorName,
            accountNumber: accountNumber,
            bankName: bankName,
            addressOne: addressOne,
            addressTwo: addressTwo,
            city: city,
            country: country,
            zipcode: zipcode,
          }
        }
        return o
      })
      setVendorsData({vendors:[...vendorsData1]})
      // window.alert("Vendor Edited Successfully");
    }
    setEditedRecord({status:false,data:{}})
  };

  return (
    <>
      <MetaData title="CREATE VENDOR" />

      <Form
        onFinish={handleSubmit}
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Row>
          <Col span={12}>
            <Form.Item
              label="Vendor Name"
              name="vendorname"
              rules={[
                {
                  required: false,
                  message: "Please input vendorname!",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setVendorName(e.target.value);
                }}
                defaultValue={vendorName}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Bank Name"
              name="bankname"
              rules={[
                {
                  required: false,
                  message: "Please input your bank name",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setBankName(e.target.value);
                }}
                defaultValue={bankName}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Account Number"
              name="accountnumber"
              rules={[
                {
                  required: false,
                  message: "Please input your account number",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                }}
                defaultValue={accountNumber}
                size="large"
                placeholder="Enter 16 digits account number"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Address One"
              name="addressone"
              rules={[
                {
                  required: false,
                  message: "Please input your address one ",
                },
              ]}
            >
              <TextArea
                onChange={(e) => {
                  setAddressOne(e.target.value);
                }}
                defaultValue={addressOne}
                rows={3}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Address Two"
              name="addresstwo"
              rules={[
                {
                  required: false,
                  message: "Please input your address two ",
                },
              ]}
            >
              <TextArea
                onChange={(e) => {
                  setAddressTwo(e.target.value);
                }}
                defaultValue={addressTwo}
                rows={3}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="City"
              name="city"
              rules={[
                {
                  required: false,
                  message: "Please input your city!",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                defaultValue={city}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Country"
              name="country"
              rules={[
                {
                  required: false,
                  message: "Please input your country",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                defaultValue={country}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Zip Code"
              name="zipcode"
              rules={[
                {
                  required: false,
                  message: "Please input your zip code",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
                defaultValue={zipcode}
                size="large"
              />
            </Form.Item>
          </Col>
          ,
          <Col span={12}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                size="large"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default EditVendorForm;
