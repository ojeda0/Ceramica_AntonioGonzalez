const fs = require('fs');
const path = require('path');
const https = require('https');

const URLS = [
    'https://ceramica-agonzalez.com/tienda/',
    'https://ceramica-agonzalez.com/categoria-producto/rotulos/',
    'https://ceramica-agonzalez.com/categoria-producto/cenefas/',
    'https://ceramica-agonzalez.com/categoria-producto/motivos-de-4/',
    'https://ceramica-agonzalez.com/categoria-producto/regalos/'
];

const imgdir = path.join(process.cwd(), 'src', 'assets', 'images', 'scraped');
if (!fs.existsSync(imgdir)) {
    fs.mkdirSync(imgdir, { recursive: true });
}

async function fetchHTML(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return resolve(fetchHTML(res.headers.location));
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function fetchImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (res) => {
            res.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function scrape() {
    let imgCounter = 1;
    for (let url of URLS) {
        try {
            console.log(`Fetching ${url}`);
            const html = await fetchHTML(url);

            const regex = /<img[^>]+src="(https:\/\/ceramica-agonzalez\.com\/wp-content\/uploads\/[^"]+)"/g;
            let match;
            while ((match = regex.exec(html)) !== null) {
                const src = match[1];
                if (!src.includes('avatar') && !src.includes('favicon') && !src.includes('logo') && !src.includes('100x100')) {
                    const ext = path.extname(src).split('?')[0] || '.jpg';
                    const dest = path.join(imgdir, `img_${imgCounter}${ext}`);
                    try {
                        console.log(`Downloading ${src}`);
                        await fetchImage(src, dest);
                        imgCounter++;
                    } catch (err) {
                        console.error('Failed to download image', src);
                    }
                    if (imgCounter > 20) break; // Limit to 20 images
                }
            }
        } catch (err) {
            console.error('Error on URL:', url, err.message);
        }
    }
    console.log(`Done! Downloaded ${imgCounter - 1} images.`);
}

scrape();
