const generateBtn = document.querySelector('#generateBtn');
const loading = document.querySelector('#loading');
const userCard = document.querySelector('#userCard');
const userPhotoElem = document.querySelector('.user-avatar');
const usernameElem = document.querySelector('#userName');
const userEmailElem = document.querySelector('#userEmail');
const userPasswordElem = document.querySelector('#userPassword');



generateBtn.addEventListener('click', () => {
    loading.classList.add('show');
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            loading.classList.remove('show');
            userCard.classList.remove('hidden');
            userCard.classList.add('show');

            const { email, login: { password: userPassword }, name: { title: userGenderTitle, first: userFirstName, last: userLastName }, picture: { large: userPhotoPath } } = data.results[0];
            
            //! second method
            // let userEmail = data.results[0].email;
            // let userGenderTitle = data.results[0].name.title;
            // let userFirstName = data.results[0].name.first;
            // let userLastName = data.results[0].name.last;
            // let userPhotoPath = data.results[0].picture.large;
            // let userPassword = data.results[0].login.password;

            userPhotoElem.src = userPhotoPath;
            userEmailElem.textContent = email;
            usernameElem.textContent = `${userGenderTitle} ${userFirstName} ${userLastName}`;
            userPasswordElem.textContent = userPassword;

        })
        .catch(err => console.error(err))
    
})