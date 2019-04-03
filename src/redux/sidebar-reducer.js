
let initialState = {
    navItems: [
        { name: 'Profile', linkTo: '/profile', imgSrc: 'http://s1.iconbird.com/ico/2013/11/504/w128h1281385326502profle.png' },
        { name: 'Messages', linkTo: '/dialogs', imgSrc: 'http://s1.iconbird.com/ico/2013/9/452/w512h3361380476923mail.png' },
        { name: 'News', linkTo: '/news', imgSrc: 'https://previews.123rf.com/images/bryljaev/bryljaev1303/bryljaev130300006/18307781-newspaper-icon.jpg' },
        { name: 'Music', linkTo: '/music', imgSrc: 'http://s1.iconbird.com/ico/2013/9/446/w512h5121380376577FlurryGoogleMusic.png' },
        { name: 'Settings', linkTo: '/settings', imgSrc: 'https://www.iconsearch.ru/uploads/icons/humano2/128x128/cog-icon-2-48x48.png' },
    ],
    myFriends: [
        { id: 2, name: 'Юра', avaSrc: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' },
        { id: 3, name: 'Ира', avaSrc: 'http://hypeava.ru/uploads/posts/2018-01/1514892492_1.jpg' },
        { id: 4, name: 'Таня', avaSrc: 'https://bipbap.ru/wp-content/uploads/2017/07/1460128624_youloveit_ru_ledi_bag_i_super_kot_krasivye_lica_avatarki13.png' },
    ]
};

const sidebarReducer = (state = initialState, action) => {

    return { ...state };
};

export default sidebarReducer;