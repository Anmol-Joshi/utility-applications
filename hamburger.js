window.onload = () => {
    const hbg = document.querySelector('.hamburger');
    const mobileList = document.querySelectorAll('.mobile-list');
    // let mobileLogo = document.querySelector('.mobile-logo');
    hbg.addEventListener('click', () => {
        if (mobileList[0].style.display === 'none') {
            // mobileLogo.style.display = 'block';

            // mobileList.style.display = "block"
            // for (const element of mobileList) {
            //     element.style.display = 'flex';
            // }
            mobileList.forEach((element) => {
                // eslint-disable-next-line no-param-reassign
                element.style.display = 'flex';
            });
        } else {
            // for (const element of mobileList) {

            //   element.style.display = 'none';

            // }
            mobileList.forEach((element) => {
                // eslint-disable-next-line no-param-reassign
                element.style.display = 'none';
            });
        }
    });
};
