import React, { useState } from "react";
import "./lich-dang-bai.css";
import { Layout, Space, Table, Tag, Button } from "antd";
import type { TableProps } from "antd";
import type {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/es/table/interface";
import { FilterFilled } from "@ant-design/icons";
const { Content } = Layout;

interface DataType {
  key: string;
  admin: string;
  title: string;
  time: string;
  status: string;
}

const LichDangBai: React.FC = () => {
  const [filteredInfo, setFilteredInfo] = useState<
    Record<string, FilterValue | null>
  >({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const handleChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
  ) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Người duyệt",
      dataIndex: "admin",
      key: "admin",
      width: 200,
      filters: [
        {
          text: "2804",
          value: "2804",
        },
        {
          text: "Cloudy",
          value: "Cloudy",
        },
        {
          text: "Blue",
          value: "Blue",
        },
      ],
      filterIcon: (filtered) => (
        <FilterFilled
          style={{
            color: filtered ? "#1890ff" : undefined,
          }}
          className="text-[18px] mx-[5px] "
        />
      ),
      filteredValue: filteredInfo.admin || null,
      onFilter: (value: any, record) => record.admin.includes(value),
      sorter: (a, b) => {
        {
          if (a.admin < b.admin) {
            return -1;
          }
          if (a.admin > b.admin) {
            return 1;
          }
          return 0;
        }
      },
      sortOrder: sortedInfo.columnKey === "admin" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 300,
      ellipsis: true,
      sorter: (a, b) => {
        {
          if (a.title.split("_")[1] < b.title.split("_")[1]) {
            return -1;
          } else {
            return 1;
          }
          return 0;
        }
      },
      sortOrder: sortedInfo.columnKey === "title" ? sortedInfo.order : null,
    },
    {
      title: "Thời gian đăng bài",
      dataIndex: "time",
      key: "time",
      width: 200,
      ellipsis: true,
      sortOrder: sortedInfo.columnKey === "time" ? sortedInfo.order : null,
    },
    {
      title: "Trạng thái",
      key: "status",
      ellipsis: true,
      dataIndex: "status",
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
    },
    {
      title: "Action",
      key: "action",
      ellipsis: true,
      sortOrder: sortedInfo.columnKey === "action" ? sortedInfo.order : null,
      render: (_, record) => (
        <Space size="middle">
          <a className="text-pink-500">View</a>
        </Space>
      ),
    },
  ];
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, height: "100%" }}
      >
        <div className=" w-full h-full">
          <div className="bg-blue-600 p-2 flex">
            <h3 className="text-white flex-grow flex-shrink">Lịch đăng bài</h3>
          </div>
          <div>
            <Table
              columns={columns}
              pagination={{ pageSize: 10 }}
              scroll={{ y: 300 }}
              onChange={handleChange}
              className="select-none"
            />
          </div>
        </div>
      </div>
    </Content>
  );
};
export default LichDangBai;
