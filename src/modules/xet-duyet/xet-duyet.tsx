import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Button, Pagination } from "antd";
import type { PaginationProps } from "antd";
import { DashOutlined, DownloadOutlined } from "@ant-design/icons";
import { ConfessIcon, SharePublicIcon } from "../icons/icon";
import "./xet-duyet.css";
const { Content } = Layout;

const admin = [
  { id: 1, name: "-----------------\n-2804-" },
  { id: 2, name: "-----------------\n-Cloudy-" },
  { id: 3, name: "-----------------\n-Blue-" },
];
interface Confession {
  id: number | string;
  content: string;
  violate: string;
  sendTime: string;
}

const confessions: Confession[] = [
  {
    id: 1,
    content:
      "Em chào anh chị, em 2k4 và có dự định ở ktx đhqg thì em muốn biết hệ thống xe buýt ntn và giờ giấc ntn dc ko ạ",
    violate: "Không",
    sendTime: "5 phút trước",
  },
  {
    id: 2,
    content:
      "Trước đây cũng đã có rất nhiều bài đăng phàn nàn về trường, từ những môn học, dịch vụ, các hoạt động, đến cả clb,... Thì sau đây mình cũng tập hợp lại tất cả những gì mà sinh viên bất mãn bấy lâu.\n1. Dịch vụ tại trường đúng tệ, ở đây mình không đi sâu vào việc phòng nhân sự hay QLĐT các chi nhánh hỗ trợ sinh viên, mà nhắm tới các dịch vụ cơ bản mà trường đại học nào cũng có. Đại đa số đối với những bạn đã từng làm thẻ thang máy vô cùng bức xúc khi đương không đi đổi quẹt thẻ thành dấu vâng tay, rồi làm cái thẻ cho đã để làm chi trong khi chúng ta tốn 40k, có người lúc làm thẻ thì lại tăng giá gấp đôi gần 100k. Còn thang máy suốt ngày hư lên hư xuống, trường có 4 cái thì hư hết 2. Phòng ốc lại quá nhỏ, đôi khi còn phải chạy qua phòng khác để mà mượn ghế vì không đủ, trường xây quá rộng làm vị trí của seven eleven cách xa những phòng học khác, có mà ở tầng 4,5 cũng chả thèm xuống mua đồ ăn mặc dù rất đói.\n2. Về bãi đỗ xe, là vấn đề năm nào cũng được réo tên, khi mà trường xây ở giữa là nửa sân cỏ nửa sân gạch, nhờ vậy mà cái trường nó rộng thênh thang đôi khi tìm phòng mà lạc trôi ở đâu còn không biết, sân thì làm cho bự lên rồi cũng chỉ để chưng chứ không thấy dùng sân tổ chức sự kiện hay hoạt động lớn nào, cũng chính vậy mà làm cho bãi đỗ xe chật hẹp như cái lỗ mũi. Cái thứ hai, nếu đã làm mái xin hãy làm có tâm chút ạ, xin hãy làm một mái tôn để có thể che nắng che mưa chứ không cần mái lưới, chứ để nắng mưa ập vào xe xịn cũng thành xe hư mất.\n3. Các môn học dù không hiểu, không có kiến thức nhưng vẫn phải đóng tiền như làm donate. Hãy lấy ví dụ điển hình về môn học coursera, là môn mà hầu hết chuyên ngành nào cũng có, dù bạn có đi học hay không thì môn này vẫn được đánh attended, thầy cô cùng lắm cũng chỉ nói buổi đầu tiên giới thiệu một chút về môn học này rồi còn lại cũng để sinh viên tự biên tự diễn. Cho đến lúc thi thì không biết ôn như nào cho đúng cho dù có suột cũng vậy, suột thì lại quá nhiều nên không thể nhồi nhét được hết kiến thức thành ra nếu ai giỏi tiếng anh hay nhân phẩm cao may còn thoát được còn không thì xin vĩnh biệt. Có một số trường hợp thi điểm thì đủ và chứng chỉ cũng nộp đủ nhưng lại đánh not pass thế là lại phải làm đơn để kiện. Sau những môn donate đó thì tới môn vovinam, mình nghĩ là trường nên làm lại môn thể dục cho sinh viên để sinh viên có thể tự do chọn lựa môn mình yêu thích cũng tạo điều kiện cho sinh viên hoạt động thể thao hiệu quả với việc học, các trường khác có rất nhiều môn thể thao đa dạng như: bóng bàng, cầu lông, bóng chuyền, bóng rổ... Còn trường mình chỉ có vovinam đã thế còn bắt đóng tiền 200k với đồng phục võ, rồi đến lúc học xong cũng vứt ở một xó xỉnh nào đó là cùng. Tốn tiền mà chả được gì, với những môn thể thao khác chỉ cần quần thể dục với áo thun cũng đủ rồi.\n4. Mình đã từng đăng ký tham gia vào clb F-code, nếu bạn nào học chuyên ngành kĩ thuật phần mềm sẽ biết. Mình từng làm CV và nộp vào 3,4 công ty nên nói về kinh nghiệm làm CV mình cũng không phải yếu kém gì, nói cơ bản thì nội dung CV không nhất thiết phải tuân theo bất kì một khuôn mẫu nào được đặt ra, nội dung CV là tự do và cũng không có một công ty nào lại bắt bạn sửa CV rồi duyệt lại CV để cho bạn đậu cả. Trong khi đó mình nộp CV cho clb F-code nếu như clb làm ăn chuyên nghiệp xin hãy duyệt một lần rồi thôi còn không thì để một thành viên nào đó có kinh nghiệm về CV đánh giá, không nên đưa cho nhiều người đánh giá như vậy, cũng vì thế bắt mình sửa lại nhiều lần, mà mỗi lần nói mình sửa, lại bắt mình đưa những thông tin không cần thiết vào ví dụ như là link facebook.\n5. Dạo này vẫn luôn ầm ĩ về việc tăng học phí từ 25tr - 27tr300k, mình biết là có nhiều trường học phí cũng cao hơn trường mình, nhưng mà nhà trường tăng học phí trong khoảng thời gian nhạy cảm với đại dịch covid và lũ lụt như thế này thì những sinh viên có hoàn cảnh bình thường như mình đây cũng chịu chết. Nội chuyện đó đã thấy được chiến lược kinh doanh và quảng bá thương hiệu của trường tệ như nào. Đã từng có 17 đơn kiện từ sinh viên không được tăng học phí nhưng trường không giải quyết, không tuân thủ yêu cầu không tăng học phí trong năm học tới của cơ quan quản lý nhà nước.\n6. Cách trường sắp xếp lịch học thấy mà cũng tội sinh viên kinh khủng, nếu xếp lịch thì nên xếp vào một buổi ổn định cho đến hết đại học, như vậy sẽ dễ tạo điều kiện cho sinh viên đi làm part time hoặc thậm chí là full time. Để sau này ít nhất có kĩ năng mềm hoặc có kinh nghiệm làm việc. Đối với một người học 4 năm đại học và chưa từng làm công việc nào, với một người vừa học vừa đi làm đủ thể loại công việc của nhiều công ty thì khi bạn nộp CV bạn cũng hiểu ai là người có cơ hội cao để duyệt vào. Vì hiện nay đa số cái mà công ty hay tập đoàn cần chính là kinh nghiệm làm việc của bạn chứ không phải là một cái bằng đại học. Thời gian học cũng không khoa học chút nào, chúng ta phải học liên tục với một lượng kiến thức khổng lồ, tuy vậy giảng viên vẫn khó mà truyền đạt đủ hết kiến thức cho sinh viên. Sâu chuỗi những điều trên cũng khiến cho sinh viên cảm thấy vô cùng bất mãn, trường đại học fpt cũng được xem là trường nhất nhì danh tiếng về độ giàu có. Thế nhưng dịch vụ cơ bản thôi thì đã quá tệ rồi, kiến trúc xây bị thừa thải làm ảnh hưởng đến bãi đổ xe, căng tin và phòng ốc lộn xộn không biết đâu mà mò. Lịch học như tơ nhện với mớ kiến thức khổng lồ và chưa chắc được khi ra trường sẽ áp dụng những kiến thức đó để mà làm việc. Trường cũng nên cho các clb hoạt động phổ biến rộng rãi hơn đi chứ mình lên đại học rồi mà cảm giác như đang học cấp 2, cấp 3 vậy. Cứ học xong rồi về không có gì đặc biệt, đến lúc clb có hoạt động cũng không biết, ngoài mấy clb nhạc cụ và âm nhạc ra. Nên nếu chúng ta đã là sinh viên trường fpt đã đóng 27 củ thì đáng lí ra chúng ta xứng đáng được nhiều hơn thế, giờ mà còn không chiến đấu và bảo vệ lợi ích của mình thì ai có thể cứu nổi mình nữa.",
    violate: "Không",
    sendTime: "5 tiếng trước",
  },
];

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
