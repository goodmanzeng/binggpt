export const runtime = 'experimental-edge'

const API_ENDPOINT = 'https://www.bing.com/turing/conversation/create'

export async function GET(req: Request) {
  const headers = {
    "x-forwarded-for": req.headers.get('x-forwarded-for')! || undefined,
    "Accept-Encoding": req.headers.get('accept-encoding')! || undefined,
    "Accept-Language": req.headers.get('accept-language')! || undefined,
    "x-ms-useragent": req.headers.get('x-ms-useragent')! || undefined,
    "User-Agent": req.headers.get('user-agent')!,
    "cookie": req.headers.get('cookie')!,
  }
  console.log('req headers', headers)

  return fetch(API_ENDPOINT, {
    method: 'GET',
    // @ts-ignore
    headers,
  })
}
export default GET;
