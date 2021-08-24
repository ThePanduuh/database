const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1mX-wUILSjmOGULIju5SKD3zKn7VE9hLl2BHgZZPTnG0', {
  name: 'Rathcaps',
  website: 'https://www.rathcaps.com/',
  instagram: 'https://www.instagram.com/rathcaps/',
  discord: 'https://discord.gg/2FHTjWY',
});

launcher(scrap);

module.exports = {
  scrap,
};
