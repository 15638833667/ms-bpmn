// 转码下载
export function convertEncoded(type: string, filename: string, data: string) {
  const encodedData: string = encodeURIComponent(data)
  return {
    filename: `${filename}.${type.toLowerCase()}`,
    href: `data:application/${
      type === 'svg' ? 'text/xml' : 'bpmn20-xml'
    };charset=UTF-8,${encodedData}`,
    data: data
  }
}

// 下载文件
export function downloadToFile(href: string, filename: string) {
  if (href && filename) {
    const a: HTMLAnchorElement = document.createElement('a')
    a.download = filename //指定下载的文件名
    a.href = href //  URL对象
    a.click() // 模拟点击
    URL.revokeObjectURL(a.href) // 释放URL 对象
  }
}
