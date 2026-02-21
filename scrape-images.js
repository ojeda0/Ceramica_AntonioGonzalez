const https = require('https');
const fs = require('fs');
const path = require('path');

const URLS = [
    'https://ceramica-agonzalez.com/categoria-producto/cenefas/',
    'https://ceramica-agonzalez.com/categoria-producto/rotulos/',
    'https://ceramica-agonzalez.com/categoria-producto/motivos-de-4/',
    'https://ceramica-agonzalez.com/categoria-producto/regalos/'
];

const imgRegex = /<img[^>]+src="([^">]+)"/g;

async function fetchHTML(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function scrapeImages() {
    console.log("Starting scrape...");
    for (let url of URLS) {
        try {
            const html = await fetchHTML(url);
            console.log(`Fetched ${url.split('/').slice(-2)[0]}`);

            let matches;
            let count = 0;
            while ((matches = imgRegex.exec(html)) !== null) {
                const imgSrc = matches[1];
                if (imgSrc.includes('wp-content/uploads') && !imgSrc.includes('favicon') && !imgSrc.includes('logo')) {
                    console.log(`Found image: ${imgSrc}`);
                    count++;
                }
            }
            console.log(`Found ${count} images for ${url}`);
        } catch (e) {
            console.error(`Error fetching ${url}:`, e.message);
        }
    }
}

scrapeImages();
