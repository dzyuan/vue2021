export default function (context) {
    const cookie= process.server ? context.req.headers.cookie : navigator.userAgent
    console.log(cookie)
  }