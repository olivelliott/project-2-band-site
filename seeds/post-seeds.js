const { Post } = require('../models');

const postData = [
    {
        title: 'Woke up and chose violence.',
        content: 'today i felt like i need to let off a little stress.',
        user_id: 1,
    },
    {
        title: 'Having a laze day.',
        content: 'today i dont feel like doiung anything. i just wanna lay in my bed.',
        user_id: 0,
    },
    {
        title: 'Played video games.',
        content: 'so excited for the new halo release.',
        user_id: 3,
    },
    {
        title: 'Studied for class!',
        content: 'reviewed github issues before class starts.',
        user_id: 2,
    },
    {
        title: 'Learned to cook',
        content: 'Today i made chicken marsala. Yum!!!',
        user_id: 5,
    },
    {
        title: 'Made better choices.',
        content: 'Today i finally got around to leg day.',
        user_id: 4,
    },
    {
        title: 'Learned to code',
        content: 'Today i worked on my project.',
        user_id: 7,
    },
    {
        title: 'Clean, clean, clean',
        content: 'Today i scrubbed my bathrom, did the dishes and took pout the trash.',
        user_id: 6,
    },
    {
        title: 'Pool time = fun time',
        content: 'Today im chilling by the pool',
        user_id: 9,
    },
    {
        title: 'Making moves',
        content: 'Today i packed my final box of clothes. So ready to move.',
        user_id: 8,
    },
    {
        title: 'Swipe',
        content: 'MY recipt from the mall. =(',
        user_id: 11,
    },
    {
        title: 'Lawn care',
        content: 'Fillay got around to cutting the grass!',
        user_id: 10,
    },
    {
        title: 'Love is Love',
        content: 'Today i took bae out to dinner. They really went crazy on the bread.',
        user_id: 13,
    },
    {
        title: 'A dogs life',
        content: 'Dong walking for a living is so stressfull.',
        user_id: 12,
    },
    {
        title: 'Shoping List',
        content: 'Today i went and saw that prices have went up again.',
        user_id: 14,
    },
    {
        title: 'Snoz',
        content: 'Ugh i overslept. lol was it to mush TikTok!',
        user_id: 1,
    },
    {
        title: 'Can you pay my telephone bill',
        content: 'Paycheck just hit and im already broke.',
        user_id: 0,
    },
    {
        title: 'An apple a day',
        content: 'Dont belive what they day a apple wint keep doc away.',
        user_id: 3,
    },
    {
        title: 'Show ready',
        content: 'Today i cleaned and polished my car.',
        user_id: 2,
    },
    {
        title: 'Work order',
        content: 'My thermostat is broke again. ugh!!!',
        user_id: 4,
    },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts
