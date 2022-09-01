import React from "react";
import { Layout, List, Space, Button } from "antd";
import "./xoa-bai.css";
import { ConfessIcon, SharePublicIcon } from "../icons/icon";
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  DashOutlined,
} from "@ant-design/icons";

const { Content } = Layout;

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: "https://ant.design",
  title: `#FPTUC_1164${i}`,

  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\n",
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const XoaBai: React.FC = () => {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, height: "100%" }}
      >
        <div className="space-y-4 w-full h-full">
          <div className="bg-blue-600 p-2 flex">
            <h3 className="text-white flex-grow flex-shrink">
              Bài viết đã duyệt
            </h3>
          </div>
          <div>
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText
                      icon={StarOutlined}
                      text="156"
                      key="list-vertical-star-o"
                    />,
                    <IconText
                      icon={LikeOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />,
                  ]}
                  extra={
                    <img
                      width={272}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
                >
                  <Space>
                    <Button danger type="primary">
                      Delete
                    </Button>
                    <Button>Khóa chat</Button>
                    <Button>Quét vi phạm</Button>
                  </Space>
                  <List.Item.Meta
                    className="!mb-0"
                    title={
                      <div>
                        <div className="flex items-start px-[16px] pt-[12px]">
                          <div className="mr-[8px] ">
                            <ConfessIcon />
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-col mt-[-5px]">
                              <div className="max-w-full ">
                                <h2 className="text-[.9375rem] font-[400]">
                                  <strong>FPTU HCM Confessions</strong>
                                </h2>
                              </div>
                              <div>
                                <p className="text-[.8125rem] text-[#B0B3B8] font-[400]">
                                  7 giờ trước
                                  <span aria-hidden="true"> · </span>
                                  <span>
                                    <SharePublicIcon />
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="p-[8px] ">
                            <DashOutlined style={{ color: "white" }} />
                          </div>
                        </div>
                      </div>
                    }
                    description={
                      <a href={item.href} className="text-pink-500 px-[16px]">
                        {item.title}
                      </a>
                    }
                  />
                  <p className="px-[16px] pt-0 mt-0 whitespace-pre-line">
                    {item.content}
                  </p>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </Content>
  );
};
export default XoaBai;
