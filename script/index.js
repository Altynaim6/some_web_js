//====== Header ==========
const header = document.createElement('header')
const header_top_block = document.createElement('div')
header_top_block.classList.add('header_top_block')
const logo = document.createElement('img')
logo.src = './images/logo.png'
const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'
// ======= nav =================
const nav = document.createElement('nav')
const ul = document.createElement('ul')
ul.classList.add('menu')

const menuList = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты']

for (let i = 0; i < menuList.length; i++) {
    const menuLi = document.createElement('li')
    const menuA = document.createElement('a')
    menuA.textContent = menuList[i]
    menuA.href = '#'
    menuA.classList.add('menu_item')

    menuLi.append(menuA)
    ul.append(menuLi)
}
//========= Main ========
//====== Cards ========
const main = document.createElement('main');
const cards = document.createElement('section');
cards.classList.add('cards');

for (let i = 0; i < 3; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardImg = document.createElement('div');

    if (i === 1) {
        cardImg.classList.add('card-chart');

        const chartBg = document.createElement('img');
        chartBg.src = './images/card1.png';
        chartBg.classList.add('chart-bg');
        chartBg.alt = 'chart background';

        const chartLeft = document.createElement('div');
        chartLeft.classList.add('chart-left');
        chartLeft.textContent = 'Да 78%';

        const chartRight = document.createElement('div');
        chartRight.classList.add('chart-right');
        chartRight.textContent = 'Нет 22%';

        cardImg.append(chartBg, chartLeft, chartRight);
    } else {
        cardImg.classList.add('card-image');

        const image = document.createElement('img');
        image.src = './images/card1.png';
        image.alt = 'people';

        const cardText = document.createElement('div');
        cardText.classList.add('card-text');
        cardText.textContent = 'Часто ли Вы опаздываете на работу (учебу)?';

        cardImg.append(image, cardText);
    }
    card.append(cardImg);
    cards.append(card);
}
//=========about app======
const about = document.createElement('section');
about.classList.add('about-app');
const h2About = document.createElement('h2');
h2About.textContent = 'О приложении'
const video = document.createElement('div');
video.classList.add('video-container');
const imgVideo = document.createElement('img');
imgVideo.src = './images/video.png'
imgVideo.alt = 'Application overview';
const playButton = document.createElement('div');
playButton.classList.add('play-button');
const spanAbout = document.createElement('span');
spanAbout.textContent = '\u25ba';

playButton.append(spanAbout);
video.append(imgVideo, playButton);
about.append(h2About, video)

//========================
const examples = document.createElement('section')
examples.classList.add('examples')
const examplesImg = document.createElement('img')
examplesImg.src = './images/sites.png'
examplesImg.alt = 'Sites'

examples.append(examplesImg)
//=========about project======
const project = document.createElement('section');
project.classList.add('about-project');
const h2Project = document.createElement('h2');
h2Project.textContent = 'О проекте'
const projectText = document.createElement('div');
projectText.classList.add('project-text');
projectText.textContent = `Курс для начинающих предпринимателей, направленный на 
                        качественный результат за 6 недель.Опытные 
                        бизнесмены,инвесторы и профессионалы в своем деле помогают 
                        участникам на всех этапах развития их бизнеса: от разработки 
                        идеи до ее реализации.`

project.append(h2Project, projectText)

//===========download section ===========
const download = document.createElement('section');
download.classList.add('download');
const h2Download = document.createElement('h2');
h2Download.textContent = 'Скачать'
const downloadImg = document.createElement('div');
downloadImg.classList.add('download-img');
const imgDownload1 = document.createElement('img');
imgDownload1.src = './images/android.png'
imgDownload1.alt = 'android';
const imgDownload2 = document.createElement('img');
imgDownload2.src = './images/qr.png'
imgDownload2.alt = 'qr';
const downloadText = document.createElement('p');
downloadText.classList.add('download-text');
downloadText.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6
                недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах
                развития их бизнеса: от разработки идеи до ее реализации.`


downloadImg.append(imgDownload1, imgDownload2);
download.append(h2Download, downloadImg, downloadText);


//========footer=========
const footer = document.createElement('footer');
footer.classList.add('footer')
const h2Footer = document.createElement('h2');
h2Footer.textContent = 'SOME'
const footerIcons = document.createElement('div')
footerIcons.classList.add('footer-icons')

const iconsData = [
    { src: './images/vk.png', alt: 'vk' },
    { src: './images/instagram (1).png', alt: 'instagram' },
    { src: './images/facebook.png', alt: 'facebook' }
]

for (const icon of iconsData) {
    const img = document.createElement('img')
    img.src = icon.src
    img.alt = icon.alt
    footerIcons.append(img)
}

const footerLinks = document.createElement('div')
footerLinks.classList.add('footer-links')
const footerColumn1 = document.createElement('div')
footerColumn1.classList.add('footer-column')
const h3Contacts = document.createElement('h3');
h3Contacts.textContent = 'Контакты'
const parContacts = document.createElement('p');
parContacts.textContent = `Tel.: +996 (312) 915000 + Ext.
                    Fax:+996 (312) 915 028`;

const footerColumn2 = document.createElement('div')
footerColumn2.classList.add('footer-column')
const h3Address = document.createElement('h3');
h3Address.textContent = 'Адреса'
const address = document.createElement('address');
address.innerHTML = ` American University of Central Asia
                    7/6 Aaly Tokombaev Street<br>
                    Bishkek, Kyrgyz Republic 720060`;

const footerColumn3 = document.createElement('div')
footerColumn3.classList.add('footer-column')
const h3Help = document.createElement('h3');
h3Help.textContent = 'Помощь'
const helpUl = document.createElement('ul');
const helpLi1 = document.createElement('li');
const helpA1 = document.createElement('a');
helpA1.href = '#'
helpA1.textContent = 'Помощь'
const helpLi2 = document.createElement('li');
const helpA2 = document.createElement('a');
helpA2.href = '#'
helpA2.textContent = 'Помощь'
const helpLi3 = document.createElement('li');
const helpA3 = document.createElement('a');
helpA3.href = '#'
helpA3.textContent = 'Помощь'




///////////////////////////////////////////
footer.append(h2Footer, footerIcons, footerLinks)
footerLinks.append(footerColumn1, footerColumn2, footerColumn3)
footerColumn3.append(h3Help, helpUl)

footerColumn1.append(h3Contacts, parContacts)
footerColumn2.append(h3Address, address)
helpLi1.append(helpA1)
helpLi2.append(helpA2)
helpLi3.append(helpA3)
helpUl.append(helpLi1, helpLi2, helpLi3)



//=======================
const body = document.body
body.append(header, main, footer)
header.append(header_top_block, nav)
header_top_block.append(logo, h1)
nav.append(ul)
main.append(cards, about, examples, project, download);




