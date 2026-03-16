const https = require("https");
let d = "";
const req = https.request(
  { hostname: "www.medrobots.pt", path: "/", method: "GET", headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" } },
  (res) => {
    res.setEncoding("utf8");
    res.on("data", (chunk) => { d += chunk; });
    res.on("end", () => {
      process.stdout.write("SIZE:" + d.length + "\n");
      // extract all strings longer than 20 chars from the page JSON
      const matches = d.match(/"[A-Za-zÀ-ÿ][^"]{20,120}"/g) || [];
      const unique = [...new Set(matches)];
      unique.slice(0, 100).forEach(m => process.stdout.write(m + "\n"));
    });
  }
);
req.on("error", (e) => { process.stdout.write("ERROR: " + e.message + "\n"); });
req.end();
