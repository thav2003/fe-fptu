import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Pagination } from "antd";
import type { PaginationProps } from "antd";
import { DashOutlined } from "@ant-design/icons";
import { ConfessIcon, SharePublicIcon } from "../icons/icon";
import "./xet-duyet.css";

import type { Confession } from "../../datas/fake-data";
import { confessions, admin } from "../../datas/fake-data";

const { Content } = Layout;

const XetDuyet: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<Confession>(confessions[0]);
  const handleChangePage: PaginationProps["onChange"] = (page, pageSize) => {
    setPage(page);
    console.log(page, pageSize);
  };
  useEffect(() => {
    setData(confessions[page - 1]);
  }, [page]);
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, height: "100%" }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="h-full">
          <Col span={13}>
            <div className="space-y-4 w-full h-full">
              <div className="bg-blue-600 p-2 flex">
                <h3 className="text-white flex-grow flex-shrink">
                  Xem trước bài viết
                </h3>
                <div className=" flex-shrink text-right">
                  <Pagination
                    responsive={true}
                    current={page}
                    defaultCurrent={1}
                    total={confessions.length}
                    defaultPageSize={1}
                    onChange={handleChangePage}
                  />
                </div>
              </div>

              <div className={`min-h-[250px]  bg-[#1c1e21] rounded-[8px] `}>
                <div>
                  <div>
                    <div className="flex items-start px-[16px] pt-[12px] mb-[-12px]">
                      <div className="mr-[8px] ">
                        <ConfessIcon />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col mt-[-5px]">
                          <div className="max-w-full ">
                            <h2 className="text-[.9375rem] text-[#E4E6EB] font-[400]">
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
                  <div>
                    <div className="px-[16px] pt-[12px]">
                      <div className="flex flex-col">
                        <div className="my-[5px] whitespace-pre-line">
                          <span className="text-[.9375rem] text-[#E4E6EB]">
                            {data.content}
                          </span>
                        </div>
                        <div>
                          <span className="text-[.9375rem] text-[#E4E6EB] whitespace-pre-line">
                            {admin[Math.floor(Math.random() * 2)].name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="border-solid border-b-[1px] border-[#3E4042] border-b-[1px] my-0 pb-[10px] mx-[12px]"></div>
                      <div className=" mx-[12px]">
                        <div className="relative flex flex-shrink-[0] flex-row items-stretch justify-between p-4 box-border flex-wrap mt-[-6px] mx-[-2px]">
                          <div className="relative flex flex-col flex-shrink basis-[0px] max-w-full box-border px-[2px]  ">
                            <div className="relative border-box inline-flex flex-shrink items-stretch flex-row basis-[auto] p-0 m-0 bg-transparent">
                              <div className="relative whitespace-nowrap flex flex-row px-[12px] flex-grow flex-shrink items-center justify-center pt-0 box-border h-[44px] my-[-6px] mx-[-4px] border-box flex-wrap">
                                <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                  <i
                                    data-visualcompletion="css-img"
                                    className="i-image gneimcpu oee9glnz"
                                  ></i>
                                </div>
                              </div>
                              <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                <span className="text-[0.9375rem max-w-full block font-[600] text-[#B0B3B8] leading-[1.3333]  whitespace-nowrap">
                                  Thích
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="relative flex flex-col flex-shrink basis-[0px] max-w-full box-border px-[2px] ">
                            <div className="relative border-box inline-flex flex-shrink items-stretch flex-row basis-[auto] p-0 m-0 bg-transparent">
                              <div className="relative whitespace-nowrap flex flex-row px-[12px] flex-grow flex-shrink items-center justify-center pt-[0px] box-border h-[44px] my-[-6px] mx-[-4px] border-box flex-wrap">
                                <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                  <i
                                    data-visualcompletion="css-img"
                                    className="i-image gneimcpu oee9glnz"
                                  ></i>
                                </div>
                              </div>
                              <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                <span className="text-[0.9375rem max-w-full block font-[600] text-[#B0B3B8] leading-[1.3333]  whitespace-nowrap">
                                  Bình luận
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="relative flex flex-col flex-shrink basis-[0px] max-w-full box-border px-[2px] ">
                            <div className="relative border-box inline-flex flex-shrink items-stretch flex-row basis-[auto] p-0 m-0 bg-transparent">
                              <div className="relative whitespace-nowrap flex flex-row px-[12px] flex-grow flex-shrink items-center justify-center pt-[0px] box-border h-[44px] my-[-6px] mx-[-4px] border-box flex-wrap">
                                <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                  <i
                                    data-visualcompletion="css-img"
                                    className="i-image gneimcpu oee9glnz"
                                  ></i>
                                </div>
                              </div>
                              <div className="relative flex flex-col flex-shrink border-box py-[6px] px-[4px] whitespace-nowrap max-w-full">
                                <span className="text-[0.9375rem max-w-full block font-[600] text-[#B0B3B8] leading-[1.3333]  whitespace-nowrap">
                                  Chia sẻ
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-[#1c1e21] p-2 text-right">
                  <Pagination
                    responsive={true}
                    current={page}
                    defaultCurrent={1}
                    total={confessions.length}
                    defaultPageSize={1}
                    onChange={handleChangePage}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col span={11}>
            <div className=" w-full h-full">
              <div className="bg-blue-600 p-2">
                <h3 className="text-white">Danh sách chờ duyệt</h3>
              </div>

              <table className="w-full text-left border-spacing-2 border-separate">
                <tbody>
                  <tr>
                    <th className="w-[9%]">STT</th>
                    <th className="w-[50%]">Bài viết</th>
                    <th className="w-[17%]">Vi phạm</th>
                    <th className="w-[20%]">Thời gian gửi</th>
                  </tr>
                  {confessions.map((item, index) => (
                    <tr key={index}>
                      <th>{item.id}</th>
                      <td
                        className="line-clamp-2 whitespace-pre-line cursor-pointer"
                        onClick={() => setPage(index + 1)}
                      >
                        {item.content}
                      </td>
                      <td>{item.violate}</td>
                      <td>{item.sendTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};
export default XetDuyet;
