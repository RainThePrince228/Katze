let card = [
    {
        "image": "assets/img/Group 1.png",
        "text": "Функциональное питание содержит только полезные питательные вещества.",
        "number": "1",
    },

    {
        "image": "assets/img/Group 2.png",
        "text": "Выпускается в виде порошка, который нужно лишь залить кипятком и готово.",
        "number": "2",
    },

    {
        "image": "assets/img/Group 3.png",
        "text": "Замените один-два приема обычной еды на наше функциональное питание.",
        "number": "3",
    },

    {
        "image": "assets/img/Group 4.png",
        "text": "Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!",
        "number": "4",
    },
];

let contents = document.getElementsByClassName("list_contents");

console.log(card);
for (let index = 0; index < card.length; index++) {
    console.log(contents[index]);
    
    let contents_img = contents[index].getElementsByTagName("img");
        contents_img[0].src = card[index].image;

    let contents_p = contents[index].getElementsByTagName("p");
        contents_p[0].textContent = card[index].text;

    let contents_h1 = contents[index].getElementsByTagName("h1");
        contents_h1[0].textContent = card[index].number;
}