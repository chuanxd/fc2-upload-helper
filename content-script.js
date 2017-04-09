(function () {
'use strict'

const paddingBtn = document.createElement('button')
const paddingText = document.createTextNode('Upload')
paddingBtn.appendChild(paddingText)
paddingBtn.id = 'JS-padding'
paddingBtn.className = 'EXT-upload-btn'

document.getElementById('upload-clear').parentElement.appendChild(paddingBtn)

document.getElementById('JS-padding').addEventListener('click', e => {
  e.preventDefault()
  const originFileNameEl = document.getElementsByClassName('file-name')
  if (!originFileNameEl.length) {
    alert('Unselect video!!')
    return
  }

  const originFileName = originFileNameEl[0].textContent
  const videoName = originFileName.split('.')[0]
  document.getElementById('file-upload').click()
  document.querySelector('[name="up_title"]').value = videoName
  document.getElementById('tag_closed').checked = true
  document.getElementById('cat30').checked = true
  document.getElementById('chk_copyright').checked = true
  document.getElementById('form_sub').click()
})

})()
