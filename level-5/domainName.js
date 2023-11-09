/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

P: URL as a string (starting with http://...)
R: domain name string (everything between the first and second .)
E:  "http://github.com/carbonfive/raygun" -> domain name = "github"
    "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
    "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url) {
  const match = url.match(/(?:http[s]?:\/\/)?(?:www\.)?([^/.]+)(?:\..+)?/);
  return match ? match[1] : ''
}
domainName("http://github.com/carbonfive/raygun")
