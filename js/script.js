    var content = [
        {
         qoute: ` " Along with success comes a reputation for wisdom. "  `, 
         auther: "euripides" ,
         ranImg: './images/1.jpg' ,
        } ,
        {
            qoute: ` " He who fears being conquered is sure of defeat. " `, 
            auther: "NAPOLEON" ,
            ranImg: './images/2.jpg' ,
           } ,
           {
            qoute: ` " Your friend is your needs answered. " `, 
            auther: "KAHLIL GIBRAN" ,
            ranImg: './images/3.jpg' ,
           } ,
           {
            qoute: ` " Friends are the siblings God never gave us. " `, 
            auther: "MENCIUS" ,
            ranImg: './images/4.jpg' ,
           } ,
           {
            qoute: ` " Wherever you go, go with all your heart. " `, 
            auther: "CONFUCIUS" ,
            ranImg: './images/5.jpg' ,
           } ,
           {
            qoute: ` " Of all possessions a friend is the most precious. " `, 
            auther: "SENECA THE YOUNGER" ,
            ranImg: './images/6.jpg' ,
           } ,              
    ]
function getQoutes(){
    var num = Math.floor(Math.random() * content.length) ;
    console.log(num);

    document.getElementById('iamge').src = content[num].ranImg;
    document.getElementById("ranQoute").innerHTML = content[num].qoute;
    document.getElementById("auther").innerHTML = content[num].auther;

}


