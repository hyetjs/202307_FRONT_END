/* 
banner의 next button을 누르면 index의 값에 따라
해당하는 banner, opactiy = 0, prev button을 누르면 index -1
index, banner-list, prev, nextbutton
*/

let shadeBannerIndex = 0;
const $shadeBanner = document.querySelectorAll("#shade-banner > ul > li");
const $shadeBannerPrevBtn = document.querySelector(".shade-prev-btn");
const $shadeBannerNextBtn = document.querySelector(".shade-next-btn");

const renderShadeBanner = () => {
  $shadeBanner.forEach((banner, index) => {
    if (index === shadeBannerIndex) {
      banner.style.opacity = 1;
    } else {
      banner.style.opacity = 0;
    }
  });
};

const renderSlideBanner = () => {
  console.log(slideBannerWidth * slideBannerIndex);
  $slideBanner.style.transform = `translateX(-${
    slideBannerWidth * slideBannerIndex
  }px)`;
};

const prevShadebanner = () => {
  // 현재 인덱스의 이전 인덱스를 제외하고는 다 opacity = 0;
  // 현재 인덱스는 opacity = 1;
  // => 내가 보여주고 싶은 애를 제외하고 투명화시킨다.
  // 내가 보여주고 싶은 애 == index번째

  if (shadeBannerIndex <= 0) {
    // index=0 -> 첫번째 배너
    // 첫번째 배너에서 뒤로 가면 맨마지막
    // index = 마지막 index
    shadeBannerIndex = $shadeBanner.length - 1;
  } else {
    shadeBannerIndex--;
    // 현재 보여지고 있는 배너에서 -1번째 인덱스를 보여줘야 한다.
  }
  renderShadeBanner();
  // for(let banner of $shadeBanner){
  //   banner.style.opacity = 0;
  // }
  // $shadeBanner[shadeBannerIndex].style.opacity = 1;
};

const nextShadeBanner = () => {
  if (shadeBannerIndex >= $shadeBanner.length - 1) {
    shadeBannerIndex = 0;
  } else {
    shadeBannerIndex++;
  }
  renderShadeBanner();
};

$shadeBannerPrevBtn.addEventListener("click", prevShadebanner);
$shadeBannerNextBtn.addEventListener("click", nextShadeBanner);

// slide
let slideBannerIndex = 0;
const $slideBanner = document.querySelector("#slide-banner > ul");
// 모든 banner를 움직이기 위해 상위 요소인 ul을 움직일 필요가 있다
const $slideBannerItem = document.querySelectorAll("#slide-banner > ul > li");
// 마지막 index를 알기위해 선언
const $slideBannerNextBtn = document.querySelector(".slide-next-btn");
const $slideBannerPrevBtn = document.querySelector(".slide-prev-btn");
const slideBannerWidth = $slideBanner.clientWidth;

const prevSlideBanner = () => {
  if (slideBannerIndex <= 0) {
    slideBannerIndex = $slideBannerItem.length - 1;
  } else {
    slideBannerIndex--;
  }
  renderSlideBanner();
};

const nextSlideBanner = () => {
  if (slideBannerIndex >= $slideBannerItem.length - 1) {
    slideBannerIndex = 0;
  } else {
    slideBannerIndex++;
  }
  renderSlideBanner();
};

$slideBannerPrevBtn.addEventListener("click", prevSlideBanner);
$slideBannerNextBtn.addEventListener("click", nextSlideBanner);
