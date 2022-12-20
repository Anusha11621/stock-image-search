let serchParameter = location.search.split('=').pop();

let access_key = "Wqm7hzoMkd6IgqgKEkQ-J8M984rK1BnlaYNg6YVEXZw"
let randomUrl = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`
let searchUrl = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${serchParameter}&per_page=50`

let main = document.querySelector('main')

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
        creatingImages(data.results)
    });
}




let creatingImages = (data)=>{
    data.forEach((element,index)=>{
        let imagediv = document.createElement('div')
        imagediv.setAttribute('class','imagediv')

        let img = document.createElement('img')
        img.src = element.urls.regular
        img.classList.add('img')

        let maindiv = document.createElement('div')
        maindiv.setAttribute('class','maindiv')


        let profilediv = document.createElement('div')
        profilediv.setAttribute('class','profilediv')
        let username = document.createElement('p')
        username.textContent = element.user.name
        let likes = document.createElement('p')
        likes.textContent = element.likes + " Likes"

        let profileimage = document.createElement('div')

        let a = document.createElement('a')
        let url = element.user.portfolio_url
        a.setAttribute('href',url)
        let profileimg = document.createElement('img')
        profileimg.setAttribute('class','profileimg')
        profileimg.src = element.user.profile_image.medium

        main.append(imagediv)
        imagediv.append(img)
        imagediv.append(maindiv)
        maindiv.append(profilediv)
        profilediv.append(username)
        profilediv.append(likes)
        maindiv.append(profileimage)
        profileimage.append(a)
        a.append(profileimg)

        console.log(imagediv);
    })
}

if( serchParameter == ""){
fetchingdata()
}
else{
    searchingdata()
}
