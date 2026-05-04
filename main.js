// [ ]  이외의 코드들은 모두 main.js 파일에 작성해 주세요.
// [ ] import를 활용해 주세요.
// [ ] 각 함수를 실행하는 코드를 작성하고, 제대로 동작하는지 확인해 주세요.
import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

getArticleList(1, 10, "")
  .then((data) => console.log("getArticleList::", data))
  .catch((err) => console.log("error::", err));

getArticle(6168)
  .then((data) => console.log("getArticle::", data))
  .catch((err) => console.error("error::", err));

createArticle({
  title: "테스트 제목",
  content: "테스트 내용",
  image: "https://example.com/...",
})
  .then((data) => {
    console.log("createArticle::");
    return patchArticle(data.id, {
      title: "수정된 제목",
      content: "수정된 내용",
    });
  })
  .then((data) => {
    console.log("patchArticle::", data);

    return deleteArticle(data.id);
  })
  .then((data) => console.log("deleteArticle::", data))
  .catch((err) => console.error("게시글 생성/수정/삭제 오류:", err));

// Product
async function testProductApi() {
  const productList = await getProductList(1, 5, "");
  console.log("getProductList::", productList);

  const product = await getProduct(3669);
  console.log("getProduct::", product);

  const product1 = await getProduct(); // undefined 케이스
  console.log("getProduct::", product1);

  const product2 = await getProduct(9999);
  console.log("getProduct::", product2);
  // 콘솔에 안찍히고
  // 에러 발생: 404
  // file:///Users/julie/Desktop/codeit-FS13/sprint-mission-%EA%B3%BD%EC%84%9C%ED%98%84/ProductService.js:22
  //     if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
  //                             ^

  // Error: 에러 발생: 404
  //     at getProduct (file:///Users/julie/Desktop/codeit-FS13/sprint-mission-%EA%B3%BD%EC%84%9C%ED%98%84/ProductService.js:22:29)
  //     at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
  //     at async testProductApi (file:///Users/julie/Desktop/codeit-FS13/sprint-mission-%EA%B3%BD%EC%84%9C%ED%98%84/main.js:55:20)
  // 이렇게 출력됨
  // throw error 가 없으면,
  //   에러 발생: 404
  // getProduct:: undefined

  const createdProduct = await createProduct({
    name: "테스트 상품",
    description: "테스트 상품 설명",
    price: 10000,
    tags: ["테스트"],
    images: ["https://example.com/..."],
  });
  console.log("createProduct::", createdProduct);

  const patchedProduct = await patchProduct(createdProduct.id, {
    name: "수정된 상품",
    price: 20000,
  });
  console.log("patchProduct::", patchedProduct);

  const deletedProduct = await deleteProduct(createdProduct.id);
  console.log("deleteProduct::", deletedProduct);
}

testProductApi();
