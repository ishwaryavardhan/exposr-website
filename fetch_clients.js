const https = require('https');
https.get('https://exposr.co/', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const imgRegex = /<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/gi;
        let match;
        const results = [];
        while ((match = imgRegex.exec(data)) !== null) {
            results.push({ src: match[1], alt: match[2] });
        }
        console.log(JSON.stringify(results, null, 2));
    });
}).on('error', (err) => {
    console.log("Error: " + err.message);
});
