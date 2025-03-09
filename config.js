const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV2Y6rOBD9F78m9wbisEVqaQhZGgJpkgBZRvNgwBCa3RgSctU/MZr3+cX5hBFJt7qlu0wPT5axT52qOqf8DWR5VOElbsH4GyhI1CCKuyVtCwzGYFIHASagD3xEERiDSOfzwNCb8gKzYWjLM3Xix/KGtZ6e4apcu0bpTaNBtoW78AG89EFRu0nk/QLQ2s57y6Uet1HJuHw+2F+OAl0v/SzbmBedW4uaPoO5yM0s+QG8dIgoIlEWzooTTjFByRK3JorI5+jb5mqepSJXGeGQm0rrpNWc2M2fGDJZBypPLoZ30japVcL15+j7p/PQHZ7rwA/TTdAj7lEwKxPuzilBLdmnh8P1lB7c4ik53OlXUZhhX/VxRiPafrruu5mw3CuxoYlKkMbb5+vZTLV4UdaNMMTEMR/L+UA7XWvsHD5HfN4kocNg95Su0KO5nvFOvXzeuI67qi+b1DJYiHLRluD8bHwkbpI3rcT/p+49WakSqdg8ms6cTy17dLIEXK3zHkM3FpzteNV1M3GlKftP0of75bSGYcOai6yC9SzwTBkVNrsQxK1KzKG6pOGB15+Tdv1OH9Ga/Iql/lxNdV1M9yN9p01F2XGUpyOzE7VH1S0vPEXJJblmkDa8qW9LjjGmJVy6Uq2vbO5Q7AQXK9e49PKFyTXi+YxH4qiYyg+3jGLcqj4Ysy99QHAYVZQgGuXZbY/h+wD5zRZ7BNNbecHz2l1obU9cls3UsvLadtMnchkMsMXaBVQ2CrtyN7Yg6nz8APqgILmHqwr7j1FFc9IauKpQiCsw/v3WqS5pgtOcYi3ywRhIosQyHA/F0ZD9rfp6PiFaoaL4mmEK+iAgeWpgMKakxn1wuyBDZcpOGYFlJ/xEEBRF4TieYYesMGHY+ZTtUkzvQa0oxRVFaQHGrDBiOQbyEnz5ow8yfKF3/XRZQ7YPgohU1M7qIsmR/yaut5/I8/I6o9s285RugQkYf9jGlEZZWHWZ1Rki3ilqsNLlAcYBSir80gc+biIPd3hAlKqymvLimjzF2XLFtam1t8Kucqc8ux/hBBhwkA++jALEfhnxIvwiMrz3BUFXCEac70qsBLpy3K3b3fn5nHl6mgRqPYWDyZxD/Br6C3LMSOBozE0Ndwlggv23KrvIi+vCymOc/QJ3YCKqShbBSeWvUOn0Sl1NU9s2VeMD7l1aYPztfVwqud/hbTnJgkd+BrpudXG+U8MYMt8LIkPdafDP33/+1UV5bUF338cURUkFxkDR0yA25elMhxzVR4vFZBbKSiiD95a9WfAucX1dnHV42DqHSn4+eEmNT+X8anpHqW6PyrNTO/Z13Q4GvUx9+AFIZ5IIbe3jNYZSqTZN7JfhzjqJtn9QIDlLEVqwh23gSuFSopeediwW62GPEWf746lGPXoppTkvMxdBwnh3nWuOPHCactL59U06H4MZtYqH2+h8mPrG5jxaGkTrHR1oN4Ok2Y0Ww2s2MhrHGJFKK6gjCEm+U+Wr63sjXT2uzvpc1UPzMqwyQ9ux8ZALVy4zDe/D4TacktdHIXq17V1oQYRvM/a1Bf/ZqnfNMy/9DxivU/snuppsmaWnSMNZstNldfiouVmOTt4VLgK3Stc56yaOwRjNYFC04KUzc5EgGuQkBWOAMp/kkQ/6IEEVld9t+6NJwPRB2spFsaWIvrkdyN1nnm3w8i+1O5dVkAgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "SamirHack",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " SamirHack",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'SamirBot',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

