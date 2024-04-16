import { Button, Form, Input, Row, Col } from "antd";
import axios from "axios";

import React, { useState } from "react";
import { json } from "react-router-dom";
import MetaData from "../MetaData";
const CreateVendorForm = ({ vendorsData }) => {
  let [vendorName, setVendorName] = useState("");
  let [accountNumber, setAccountNumber] = useState("");
  let [bankName, setBankName] = useState("");
  let [addressOne, setAddressOne] = useState("");
  let [addressTwo, setAddressTwo] = useState("");
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  let [zipcode, setZipCode] = useState("");
  const { TextArea } = Input;
  let handleSubmit = async () => {
    let res = await axios.post("http://localhost:5000/vendor/create-vendor", {
      vendorName: vendorName,
      accountNumber: accountNumber,
      bankName: bankName,
      addressOne: addressOne,
      addressTwo: addressTwo,
      city: city,
      country: country,
      zipcode: zipcode,
    });
    if (res.status == 200 || res.status == 204) {
      vendorsData.push({
        vendorName: vendorName,
        accountNumber: accountNumber,
        bankName: bankName,
        addressOne: addressOne,
        addressTwo: addressTwo,
        city: city,
        country: country,
        zipcode: zipcode,
      });
      alert("Vendor Created Successfully");

      window.location.reload();
    }
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
                  required: true,
                  message: "Please input vendorname!",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setVendorName(e.target.value);
                }}
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
                  required: true,
                  message: "Please input your bank name",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setBankName(e.target.value);
                }}
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
                  required: true,
                  message: "Please input your account number",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                }}
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
                  required: true,
                  message: "Please input your address one ",
                },
              ]}
            >
              <TextArea
                onChange={(e) => {
                  setAddressOne(e.target.value);
                }}
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
                  required: true,
                  message: "Please input your address two ",
                },
              ]}
            >
              <TextArea
                onChange={(e) => {
                  setAddressTwo(e.target.value);
                }}
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
                  required: true,
                  message: "Please input your city!",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setCity(e.target.value);
                }}
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
                  required: true,
                  message: "Please input your country",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
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
                  required: true,
                  message: "Please input your zip code",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
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
export default CreateVendorForm;
