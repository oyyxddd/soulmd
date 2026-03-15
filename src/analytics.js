const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-F8PPJM6W4X'

export function initAnalytics() {
  if (!GA_MEASUREMENT_ID) return

  window.dataLayer = window.dataLayer || []
  function gtag(...args) {
    window.dataLayer.push(args)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export function trackPageView(path) {
  if (!GA_MEASUREMENT_ID || !window.gtag) return
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path || window.location.pathname,
  })
}
