// [ ]  'https://panda-market-api-crud.vercel.app/docs/#/Product' API를 이용하여 아래 함수들을 구현해 주세요.
const BASE_URL = "https://panda-market-api-crud.vercel.app";
// import { BASE_URL } from "./config.js";
// const BASE_URL = import.meta.env.VITE_BASE_URL;
// [ ] getProductList() : GET 메서드를 사용해 주세요.
// [ ] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}
// [ ] getProduct() : GET 메서드를 사용해 주세요.
export async function getProduct(id) {
  try {
    if (!id) throw new Error("id는 필수입니다.");
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
    // 에러가 나 여기서 처리 못함 콘솔창에 출력을 넘어서 main.js 로 에러 떠넘기게 됨
  }
}
// [ ] createProduct() : POST 메서드를 사용해 주세요.
// [ ] request body에 name, description, price, tags, images 를 포함해 주세요.
export async function createProduct(data) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}
// [ ] patchProduct() : PATCH 메서드를 사용해 주세요.
export async function patchProduct(id, data) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}
// [ ] deleteProduct() : DELETE 메서드를 사용해 주세요.
export async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
}
// [ ]  async/await 을 이용하여 비동기 처리를 해주세요.
// [ ]  try/catch 를 이용하여 오류 처리를 해주세요.
