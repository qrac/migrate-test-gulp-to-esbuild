// https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener#%E4%BE%8B
function modifyText() {
  const t2 = document.getElementById("t2")
  const isNodeThree = t2.firstChild.nodeValue === "three"
  t2.firstChild.nodeValue = isNodeThree ? "two" : "three"
}

const el = document.getElementById("outside")
el.addEventListener("click", modifyText, false)

console.log("test test")
