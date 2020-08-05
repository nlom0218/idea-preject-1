const effectMain = document.querySelector(".second_effect_content_main");
const effectSub = document.querySelector(".second_effect_content_sub");
const effect1 = document.querySelector(".effect1");
const effect2 = document.querySelector(".effect2");
const effect3 = document.querySelector(".effect3");

const effectClick = {
  effect1: function () {
    effectMain.innerHTML = "어린 시절에 어떤 말을 듣고 자랐는가";
    effectSub.innerHTML =
      "어렸을 때 돈에 대해, 부에 대해, 부자에 대해서 어떤 말들을 들었는가? 이런 말들이 당신의 경제 상태에 어떤 영향을 미쳤다고 생각하는가?(책 44~45쪽 참고)";
  },
  effect2: function () {
    effectMain.innerHTML = "어린 시절에 누구를 보고 자랐는가";
    effectSub.innerHTML =
      "부모님이 돈에 대해, 부에 대해, 어떤 태도와 습관을 갖고 있었는가? 그것을 생각해보라. 자라면서 보았던 모습들이 당신의 경제력에 어떤 영향을 미쳤다고 생각하는가?(책 56쪽 참고)";
  },
  effect3: function () {
    effectMain.innerHTML = "어린 시절에 어떤 특별한 경험을 하였는가";
    effectSub.innerHTML =
      "어렸을 때 돈에 관해 정서적으로 영향을 미친 일이 무엇이었을까? 생각해보라. 이 사건이 현재의 경제력에 어떤 영향을 미치고 있는지 생각해보라.(책 61쪽 참고)";
  },
};

effect1.addEventListener("click", effectClick.effect1);
effect2.addEventListener("click", effectClick.effect2);
effect3.addEventListener("click", effectClick.effect3);
