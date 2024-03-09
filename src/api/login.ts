import instance from "../axios/index";

// test
// interface LoginResponse {
//   id: string;
//   pw: string;
// }
// function postLogin(id?: string, pw?: string) {
//   return instance.post<LoginResponse>("/api/login", {
//     id: id,
//     pw: pw,
//   });
// }

// 실사용
interface LoginResponse {
  status: "success" | "fail";
  sessionId: string;
}
function postLogin(id?: string, pw?: string) {
  return instance.post<LoginResponse>("/api/login", {
    id: id,
    pw: pw,
  });
}
export default { postLogin };
