 let userName = document.getElementById('Name')

let useremail = document.getElementById('useremail')
let userpassword = document.getElementById('userpassword')

let alluserDate = JSON.parse(localStorage.getItem('user'))||[]
// console.log(alluserDate)
function createAcc(){

    let flag = false
   for(let i = 0 ; i < alluserDate.length ; i++){
    if(useremail.value == alluserDate[i].email){
     flag= true
        break
    }
   }

   if(flag){
    alert("your account is already create")
    window.location.href= 'index.html'
   }else{
    console.log("your account is create")
   
    let user ={
        name:userName.value,
        email:useremail.value,
        password:userpassword.value
    }
  alluserDate.push(user)

  userName.value = ""
  useremail.value = ""
  userpassword.value = ""
  console.log(alluserDate)
  localStorage.setItem('user',JSON.stringify(alluserDate))
  window.location.href= 'index.html'
}
}

let index
function login(){
   let email = useremail.value
   let password = userpassword.value


     for(let i = 0; i < alluserDate.length ; i++){
        console.log(alluserDate[i])

    if(email == alluserDate[i].email && password == alluserDate[i].password){
     console.log("Your Details is matched")

index = i
console.log(index)
localStorage.setItem('index',index)
     window.localStorage.setItem('login',true)
     window.location.href= 'dashboard.html'
    }else{
        console.log("user datails not found")
    }
     }
}



function logout() {
  localStorage.removeItem('login');
  window.location.href = 'index.html';
}

// if (window.location.pathname.includes('dashboard.html')) {
// if (!localStorage.getItem('login')) {
//   localStorage.setItem('loginError', 'Please login first!');
//   window.location.href = 'index.html';
// }

    let publicpage = ['index.html','createAcc.html']

    console.log(window.location.pathname);

    let currentpage = window.location.pathname.split("/").pop()
    console.log(currentpage)

    if(!publicpage.includes(currentpage)&& ! localStorage.getItem("login")){
        window.location.href = 'index.html';
    }

if (window.location.pathname.includes("profile.html")) {
  console.log(alluserDate);

  let userindex = localStorage.getItem('index');

  if (userindex !== null) {

    document.getElementById('profileName').innerText = alluserDate[userindex].name;
    document.getElementById('profileEmail').innerText = alluserDate[userindex].email;
    document.getElementById('profilePassword').innerText = alluserDate[userindex].password;
  } else {
    alert("Please login first!");
    window.location.href = "index.html";
  }
}
let eyeBtn = document.getElementById("eye");
if (eyeBtn) {
  eyeBtn.addEventListener("click", function () {
    if (userpassword.type === "password") {
      userpassword.type = "text";
    
    } else {
      userpassword.type = "password";
      
    }
  });

}
