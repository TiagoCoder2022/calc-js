export default function(ev) {
  const copyBtn = ev.currentTarget
  if (copyBtn.innerText === 'Copy') {
    copyBtn.innerText = 'Copied!'
    copyBtn.classList.add('success')

    navigator.clipboard.writeText(document.querySelector('#result').value)
  } else {
    copyBtn.innerText = 'Copy'
    copyBtn.classList.remove('success')
  }
}