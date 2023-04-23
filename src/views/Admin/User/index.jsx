import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import "./index.css";
import { Button, Checkbox, Form, Input, message, Table } from "antd";
import Info from "@/views/Admin/User/Info";
const columns = [
  {
    title: "用户名",
    dataIndex: "name",
    key: "用户名",
  },
  {
    title: "订单编号",
    dataIndex: "number",
    key: "订单编号",
  },
  {
    title: "删除用户",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: "John Brown",
    number: 32,
    description:
      "商品信息、备注信息、地址、手机号、身份证号、订单编号、下单金额",
  },
  {
    key: 2,
    name: "Jim Green",
    number: 42,
    description:
      "商品信息、备注信息、地址、手机号、身份证号、订单编号、下单金额",
  },
  {
    key: 3,
    name: "Not Expandable",
    number: 29,
    description: <Info />,
  },
];

const Adminuser = (props) => {
  //   const navigate = useNavigate();
  //   const a = () => {
  //     navigate("/mall");
  //   };
  return (
    <Fragment>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />

      {/* <div className="loginForm">
        <h2>管理员用户管理页面</h2>
        <button onClick={a}>mall</button>
      </div> */}
    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Adminuser);
