// https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener#%E4%BE%8B
const controller = new AbortController()
const el = document.getElementById("outside")
el.addEventListener("click", modifyText, { signal: controller.signal })

function modifyText() {
  const t2 = document.getElementById("t2")
  if (t2.firstChild.nodeValue === "three") {
    t2.firstChild.nodeValue = "two"
  } else {
    t2.firstChild.nodeValue = "three"
    controller.abort()
  }
}
