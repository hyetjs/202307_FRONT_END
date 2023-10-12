import MockPosts from "../mock/posts.json" assert { type: "json" };

// Read (조회)
// MockPosts = 배열, 배열을 화면에 내가 원하는 UI로 그려줘야한다
// MockPosts(어떤 데이터), board-list(어디에), article(어떤 형태로)

const $boradList = document.querySelector(".board-list");
// evnetListner가 없는 경우

// $boradList.innerText = '안녕하세요'
// text를 포함하는 경우
// $boradList.innerHTML = '<div>안녕하세요</div>'
// html을 포함하는 경우

// 1. innerText
// 2. innerHTML
// 3. append, appendChild
// 4. insertAdjacentElement

// MockPosts -> [article, article, article] -> join 'article ariticle..'
const renderPost = (post) => {
  // const posts = MockPosts.map((post) =>
  // `<article class="board-card" data-role=${post.id}>
  //   <h3 class="flex-center">
  //     ${post.title}
  //     <button>삭제</button>
  //   </h3>
  //   <div class="flex-center">
  //     ${post.content}
  //   </div>
  // </article>`).join('')
  // $boradList.innerHTML = posts
  const $article = document.createElement("article");
  const $h3 = document.createElement("h3");
  const $deleteBtn = document.createElement("button");
  const $content = document.createElement("div");

  $h3.className = `flex-center`;
  $h3.innerHTML = post.title;
  $deleteBtn.addEventListener("click", deletePost);
  $deleteBtn.innerText = "삭제";
  $h3.append($deleteBtn);

  $content.className = "flex-center";
  $content.innerHTML = post.content;

  $article.className = "board-card";
  $article.setAttribute("data-role", post.id);

  $article.addEventListener("click", detailPost);

  // 상세 조회 -> find, attribute, innerText
  // 수정 -> input으로 요소를 바꿔주고 완료 버튼을 누르면 input의 value로 업데이트

  $article.append($h3);
  $article.append($content);
  $boradList.append($article);
};

// 필요한 부분을 가져온다
let $detailContent = document.querySelector(".board-detail>div");
let $detailTitle = document.querySelector(".board-detail>p");
const $updateBtn = document.querySelector(".board-detail>button");
let selectedPostId;

// 상세조회 함수
const detailPost = (event) => {
  const postId = event.currentTarget.getAttribute("data-role");
  selectedPostId = postId;
  const detailPost = MockPosts.find((post) => post.id === parseInt(postId));
  $detailTitle.innerText = detailPost.title;
  $detailContent.innerText = detailPost.content;
};

let $inputTitle = document.createElement("input");
let $inputContent = document.createElement("textarea");

// 수정 (상세보기 값이 수정받을 값을 받을 input태그로 변환)
function editText() {
  if (!selectedPostId) return alert("선택된 게시글이 없습니다");

  $inputTitle.placeholder = $detailTitle.innerText;
  $inputContent.placeholder = $detailContent.innerText;

  $updateBtn.innerText = "수정완료";

  $detailTitle.replaceWith($inputTitle);
  $detailContent.replaceWith($inputContent);

  $updateBtn.removeEventListener("click", editText);
  $updateBtn.addEventListener("click", updateComplete);
}

// 수정 완료 (수정버튼을 한번더 눌렀을 때 일어나는 기능(함수))
// 수정된 값이 글로 보이게 바꿔준다
function updateComplete() {
  const updatedTitle = $inputTitle.value;
  const updatedContent = $inputContent.value;

  const $updatedDetailTitle = document.createElement("p");
  $updatedDetailTitle.innerText = updatedTitle;
  $inputTitle.replaceWith($updatedDetailTitle);

  const $updatedDetailContent = document.createElement("div");
  $updatedDetailContent.innerText = updatedContent;
  $inputContent.replaceWith($updatedDetailContent);

  $updateBtn.innerText = "수정";

  // $detailTitle,$detailContent에 수정된 내용을 다시 대입
  // 다시 값을 넣어주지 않으면 수정완료 후에 다른 목록을 눌러도 상세보기 값이 계속 수정 마지막 값으로 되어있다
  $detailTitle = $updatedDetailTitle;
  $detailContent = $updatedDetailContent;

  const updatedPostIndex = MockPosts.findIndex(
    (post) => post.id === parseInt(selectedPostId)
  );

  MockPosts[updatedPostIndex].title = updatedTitle;
  MockPosts[updatedPostIndex].content = updatedContent;

  $boradList.innerHTML = "";
  for (let post of MockPosts) {
    renderPost({
      ...post,
    });
  }
  $updateBtn.removeEventListener("click", updateComplete);
  $updateBtn.addEventListener("click", editText);
}

$updateBtn.addEventListener("click", editText);

const deletePost = (event) => {
  console.log(event.target);
  const article = event.target.parentNode.parentNode;
  // 내가 선택한 post의 id를 알기 위해서
  const postId = article.getAttribute("data-role");

  const deletePostIndex = MockPosts.findIndex(
    (post) => post.id === parseInt(postId)
  );
  MockPosts.splice(deletePostIndex, 1);
  // 내가 삭제한 post를 제외한 배열을 만들어주기 위해서

  $boradList.innerHTML = "";
  for (let post of MockPosts) {
    renderPost({
      ...post,
    });
  }
  // 포스트 랜더
};

for (let post of MockPosts) {
  renderPost({
    ...post, // id, content, title
    /* 
    id: post.id,
    content: post.content,
    title: post.title
    */
  });
}

// Create
// 작성 버튼을 누르면 작성한 내용을
// 1. MockPosts에 데이터를 추가한 후 다시 랜더한다.
// 2. append를 활용해서 새로운 게시글을 추가한다.

// 작성 인풋(타이틀, 컨텐트), 작성버튼,
// 1. MockPosts.push({}) -> render
// 2. {title, content} -> boardList append

const $title = document.querySelector(".title");
const $content = document.querySelector(".content");
const $writeBtn = document.querySelector(".write-btn");

$writeBtn.addEventListener("click", () => {
  if (!$title.value.trim() || !$content.value.trim()) {
    return alert("내용을 입력해주세요");
  }

  const newPost = {
    id: Math.floor(Math.random() * 10000000),
    title: $title.value,
    content: $content.value,
  };

  MockPosts.push(newPost);
  renderPost(newPost);

  // 기존에 있던 데이터 + 새로운 게시글
  // 다시 화면 그린다
  // renderPosts();
  // const $article = document.createElement('article') // <article></article>
  // $article.className = 'board-card' // css
  // $article.innerHTML = `
  //   <h3 class="flex-center">
  //     ${$title.value}
  //     <button>삭제</button>
  //   </h3>
  //   <div class="flex-center">
  //     ${$content.value}
  //   </div>
  //   `
  // $boradList.append($article)

  // 인풋 초기화
  $title.value = "";
  $content.value = "";
});
