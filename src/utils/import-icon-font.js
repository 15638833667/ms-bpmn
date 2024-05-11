export function importIconFontStyle() {
  if (typeof document !== 'undefined') {
    console.log('importIconFontStyle')
    const script = document.createElement('script')
    // script.async = true

    script.src = 'https://at.alicdn.com/t/c/font_4301118_pj6310xqxue.js'
    document.head.appendChild(script)
  }
}
