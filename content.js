window.addEventListener('yt-page-data-updated', doLogic)
window.addEventListener('scrollend', doLogic)

async function doLogic() {
  document.querySelectorAll('#video-title.ytd-rich-grid-media').forEach((it) => {
    it.style.fontSize = "1.8rem"
  })
  setTimeout(() => {
    document.querySelectorAll('#video-title.ytd-compact-video-renderer').forEach(it => {
      it.style.fontSize = "1.8rem"
    })
  }, 2000)
  
  // comments
  document.querySelectorAll('.yt-core-attributed-string--white-space-pre-wrap').forEach((it) => {
    it.style.fontSize = "1.7rem"
  })
}
