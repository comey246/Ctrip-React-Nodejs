import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/global/action.js";
import "./index.css";
import { Button, Checkbox, Form, Input, message, Table } from "antd";

const columns = [
  {
    title: "用户名",
    dataIndex: "用户名",
    key: "用户名",
  },
  {
    title: "订单数量",
    dataIndex: "订单数量",
    key: "订单数量",
  },
  {
    title: "下单日期",
    dataIndex: "下单日期",
    key: "下单日期",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    用户名: "John Brown",
    订单数量: 32,
    下单日期: "2023.2.3",
    description:
      "商品信息、备注信息、地址、手机号、身份证号、订单编号、下单金额",
  },
  {
    key: 2,
    用户名: "Jim Green",
    订单数量: 42,
    下单日期: "2023.2.3",
    description:
      "商品信息、备注信息、地址、手机号、身份证号、订单编号、下单金额",
  },
  {
    key: 3,
    用户名: "Not Expandable",
    订单数量: 29,
    下单日期: "2023.2.3",
    description:
      "商品信息、备注信息、地址、手机号、身份证号、订单编号、下单金额",
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
      ;
      {/* <div className="loginForm">
        <h2>管理员用户管理页面</h2>
        <button onClick={a}>mall</button>
      </div> */}
    </Fragment>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(Adminuser);
