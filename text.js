const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const text5 = document.querySelector(".text5");
const text6 = document.querySelector(".text6");
const text7 = document.querySelector(".text7");
const text8 = document.querySelector(".text8");
const text9 = document.querySelector(".text9");
const text10 = document.querySelector(".text10");
const text11 = document.querySelector(".text11");
const text12 = document.querySelector(".text12");
const text13 = document.querySelector(".text13");
const text14 = document.querySelector(".text14");
const text15 = document.querySelector(".text15");
const text16 = document.querySelector(".text16");
const text17 = document.querySelector(".text17");
const textContent = document.querySelector(".rule_content");
const subTitle = document.querySelector(".rule_sub-title");

const superClick = {
  text1: function () {
    textContent.innerHTML = `"나의 경제적인 성공은 내가 만든다!"`;
    subTitle.innerHTML = "백만장자 시크릿1";
  },
  text2: function () {
    textContent.innerHTML = `"내 목표는 백만장자가 되는 것이다!"`;
    subTitle.innerHTML = "백만장자 시크릿2";
  },
  text3: function () {
    textContent.innerHTML = `"부자가 되기 위해 헌신하겠다!"`;
    subTitle.innerHTML = "백만장자 시크릿3";
  },
  text4: function () {
    textContent.innerHTML = `"크게 생각하자! <br> 수천, 수만 명에게 기여하는 사람이 되겠다!"`;
    subTitle.innerHTML = "백만장자 시크릿4";
  },
  text5: function () {
    textContent.innerHTML = `"장애물보다 기회에 집중하겠다." <br> "준비하고, 발사하고, 조준하겠다!"`;
    subTitle.innerHTML = "백만장자 시크릿5";
  },
  text6: function () {
    textContent.innerHTML = `"나는 부자들에게 감탄한다!" <br> "나는 부자들을 축복한다!"<br> "나는 부자들을 사랑한다!"<br> "나도 그런 부자가 될 것이다!"`;
    subTitle.innerHTML = "백만장자 시크릿6";
  },
  text7: function () {
    textContent.innerHTML = `"성공한 부자들을 본받겠다." <br> "성공한 부자들과 어울리겠다." <br> "그들이 할 수 있다면 나도 할 수 있다!"`;
    subTitle.innerHTML = "백만장자 시크릿7";
  },
  text8: function () {
    textContent.innerHTML = `"정열적으로 열렬하게 <br> 나의 가치를 다른 사람들에게 알리겠다."`;
    subTitle.innerHTML = "백만장자 시크릿8";
  },
  text9: function () {
    textContent.innerHTML = `"나는 어떤 어려움보다도 크다!" <br>"나는 어떤 문제도 처리할 수 있다!"`;
    subTitle.innerHTML = "백만장자 시크릿9";
  },
  text10: function () {
    textContent.innerHTML = `"나는 잘 받는 사람이다. 나는 인생에 들어오는 어마어마한 돈을 얼마든지 받아들일 것이다."`;
    subTitle.innerHTML = "백만장자 시크릿10";
  },
  text11: function () {
    textContent.innerHTML = `"내가 일한 결과로 보상받겠다."`;
    subTitle.innerHTML = "백만장자 시크릿11";
  },
  text12: function () {
    textContent.innerHTML = `"나는 '둘 다' 생각하겠다."`;
    subTitle.innerHTML = "백만장자 시크릿12";
  },
  text13: function () {
    textContent.innerHTML = `"나는 순자산을 늘리는 데 집중하겠다!"`;
    subTitle.innerHTML = "백만장자 시크릿13";
  },
  text14: function () {
    textContent.innerHTML = `"나는 돈 관리를 잘한다."`;
    subTitle.innerHTML = "백만장자 시크릿14";
  },
  text15: function () {
    textContent.innerHTML = `"내 돈은 날 위해 일한다. 더 많은 돈을 벌어다준다."`;
    subTitle.innerHTML = "백만장자 시크릿15";
  },
  text16: function () {
    textContent.innerHTML = `"계속 배우고 성장하겠다."`;
    subTitle.innerHTML = "백만장자 시크릿16";
  },
  text17: function () {
    textContent.innerHTML = `"두려워도 행동하겠다." <br> "의심스로워도 행동하겠다." <br> "불안해도 행동하겠다." <br> "불편해도 행동하겠다." <br> "힘들어도 행동하겠다." <br> "하기 싫어도 행동하겠다."`;
    subTitle.innerHTML = "백만장자 시크릿17";
  },
};

text1.addEventListener("click", superClick.text1);
text2.addEventListener("click", superClick.text2);
text3.addEventListener("click", superClick.text3);
text4.addEventListener("click", superClick.text4);
text5.addEventListener("click", superClick.text5);
text6.addEventListener("click", superClick.text6);
text7.addEventListener("click", superClick.text7);
text8.addEventListener("click", superClick.text8);
text9.addEventListener("click", superClick.text9);
text10.addEventListener("click", superClick.text10);
text11.addEventListener("click", superClick.text11);
text12.addEventListener("click", superClick.text12);
text13.addEventListener("click", superClick.text13);
text14.addEventListener("click", superClick.text14);
text15.addEventListener("click", superClick.text15);
text16.addEventListener("click", superClick.text16);
text17.addEventListener("click", superClick.text17);
