const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    const markup = Markup.inlineKeyboard([
        [Markup.button.url('GRUPO', 'https://t.me/GRUPOCN')],
        [Markup.button.url('CANAL CODERS', 'https://t.me/CODIGOCN')],
        [Markup.button.url('CANAL DO VILHALVA', 'https://t.me/VILHALVA100_CANAL')]
    ]);
    ctx.reply('Use os botões inline para acessar os links!', markup);
});

bot.launch();
console.log('Bot está rodando...');
