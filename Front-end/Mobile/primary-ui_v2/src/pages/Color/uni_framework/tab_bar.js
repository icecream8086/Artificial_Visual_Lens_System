const setTabBarStyle_white = () => {
    // @ts-ignore
    uni.setTabBarStyle({
        color: '#FF0000',
        selectedColor: '#00FF00',
        backgroundColor: '#0000FF',
        borderStyle: 'white'
    });
}

const setTabBarStyle_black = () => {
    // @ts-ignore
    uni.setTabBarStyle({
        color: '#FF0000',
        selectedColor: '#00FF00',
        backgroundColor: '#0000FF',
        borderStyle: 'white'
    });
}

export{
    setTabBarStyle_white,
    setTabBarStyle_black
}