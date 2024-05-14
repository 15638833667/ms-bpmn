export function importIconFontStyle() {
  if (typeof document !== 'undefined') {
    console.log('importIconFontStyle')
    const script = document.createElement('script')
    // script.async = true

    script.src = 'https://at.alicdn.com/t/c/font_4545467_mvgdwy0lzm.js'
    document.head.appendChild(script)
  }
}
