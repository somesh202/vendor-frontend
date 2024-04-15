import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateVendorForm from "./components/CreateVendorForm";
import Home from "./components/Home";
import AllVendors from "./components/AllVendors";
const { Header, Content, Sider } = Layout;

const App = () => {
  let [vendorsData, setVendorsData] = useState([]);
  let [ishovering, setIsHovering] = useState(false);
  let [editRecordState,setEditRecordState]=useState()
  const fetchVendors = async () => {
    const { data } = await axios.get("/vendors");

    setVendorsData(data);
  };

  useEffect(() => {
    fetchVendors();
  }, []);
  // console.log(vendorsData.vendors);
  return (
    <>
      <BrowserRouter>
        <Layout
          style={{
            height: "150vh",
          }}
        >
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div
              onMouseOver={() => {
                setIsHovering(true);
              }}
              onMouseOut={() => {
                setIsHovering(false);
              }}
              className={ishovering ? "active logo" : "logo"}
            >
              <Link to="/">
                <div className="company-name"> COMPANY LOGO</div>
              </Link>
            </div>
            <Menu theme="dark" mode="inline">
              <Menu.Item>
                <Link to="/create-vendor">Create Vendor</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/all-vendors-list">All Vendors List</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{
                padding: 0,
              }}
            />
            <Content
              style={{
                margin: "24px 16px 0",
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="create-vendor/*"
                  element={
                    <CreateVendorForm vendorsData={vendorsData.vendors} />
                  }
                />
                <Route
                  path="all-vendors-list/*"
                  element={
                    <AllVendors
                      vendorsData={vendorsData.vendors}
                      setVendorsData={setVendorsData}
                    />
                  }
                />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
