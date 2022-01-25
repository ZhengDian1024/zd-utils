function downloadFile(data: any, fileName: string) {
  const blob = new Blob([data], { type: 'application/octet-stream' })
  const downloadElement = document.createElement('a')
  const href = window.URL.createObjectURL(blob)
  downloadElement.href = href
  downloadElement.download = decodeURI(fileName)
  document.body.appendChild(downloadElement)
  downloadElement.click()
  document.body.removeChild(downloadElement)
  window.URL.revokeObjectURL(href)
}

export default downloadFile
