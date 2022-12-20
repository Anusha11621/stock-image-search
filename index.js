// let fs = require('fs')

// // function serch(){
//     let array = []


//     let url = "https://api.unsplash.com/photos/?client_id=yHX56_AFnMrQZjVVhme6jkiNS1Vq9qRbuxUF7spb6vQ"
//     let opn ={
//         method : 'GET'
//     }
//     fetch(url,opn)
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//     array.push(data)

//         data.forEach((el)=>{
//             let img  =  document.createElement('img');
//             img.setAttribute('src',el.urls.raw);
//             img.classList.add('img')
//             body.append(img)
//             // console.log(el.urls.regular);
//     })
    
// })
// }
// let fetchingdata =() =>{
//     let array =  []
//     fetch("https://api.unsplash.com/photos/?client_id=yHX56_AFnMrQZjVVhme6jkiNS1Vq9qRbuxUF7spb6vQ")
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//         array.push(data)
//     })
//     return array
// }


// let createingElement =()=>{
//     let data = fetchingdata()
//     data.forEach((data1)=>{
//         console.log(data1)
//     })
// }
// createingElement()



let serchParameter = location.search.split('=').pop();
 
let access_key = "ZudjYtPS0cnhwLnMylJoGxi01u8-AdArNRgVnd5JoNI"
let randomUrl = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`
let searchUrl = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${serchParameter}&per_page=50`

let imagediv = document.querySelector('.imagediv')

let images;

let fetchingdata = ()=>{
    fetch(randomUrl)
    .then(res => res.json())    
    .then(data =>{
        images = data;
        creatingImages(data)
    });
}

let searchingdata = ()=>{
    fetch(searchUrl)
    .then(res => res.json())
    .then(data =>{
        images = data.results;
        creatingSearchImages(data)
    });
}


let creatingSearchImages = (data)=>{
    data.results.forEach((element,index)=>{
        let img = document.createElement('img')
        img.src = element.urls.regular
        img.classList.add('img')
        imagediv.append(img)
    })
}

let creatingImages = (data)=>{
    data.forEach((element,index)=>{
        let img = document.createElement('img')
        img.src = element.urls.regular
        img.classList.add('img')
        imagediv.append(img)
    })
}

if( serchParameter == ""){
fetchingdata()
}
else{
    searchingdata()
}
