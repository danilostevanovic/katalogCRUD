class Actor{
    constructor(actorId,name,lastName,bio,birthDate,movieId){
        this.actorId = actorId,
        this.name = name,
        this.lastName = lastName,
        this.bio = bio,
        this.birthDate = birthDate,
        this.movies = movieId
    }
    updateActor(text){
      return  this.actorId = text;
    }
    deleteActor(actorId){
      return delete this.actorId
    }
    saveToDataBase(key){
        let json = JSON.stringify(this);
        return localStorage.setItem(key,json)
    }
    loadFromDataBase(key){
        key = localStorage.getItem(key);
        return JSON.parse(key);
      }
    deleteFromDataBase(key){
       return localStorage.removeItem(key);
    }
}
  

   

let form = {
    formId:document.getElementById('forma'),
    actorId:document.getElementById('id'),
    name:document.getElementById('name'),
    lastName:document.getElementById('lastname'),
    bio:document.getElementById('bio'),
    birthDate:document.getElementById('date'),
    createActorFromForm(actor){
        this.formId.addEventListener('submit',e=>{
            e.preventDefault();
            actor = new Actor(this.actorId.value,this.name.value,this.lastName.value,this.bio.value);
            actor.saveToDataBase(this.name.value+this.actorId.value);
            this.formId.reset();
        });
    }
}

form.createActorFromForm();

// profile
class Profile {
    constructor(id,nickname,password,email,firstname,lastName){
        this.id = id,
        this.nickname = nickname,
        this.password = password,
        this.email = email,
        this.firstname = firstname,
        this.lastName = lastName
    }
    updateProfile(text){
      return  this.id = text;
    }
    deleteProfile(id){
      return  delete this.id;
    }
    saveToDataBase(key){
        let json = JSON.stringify(this);
        return localStorage.setItem(key,json)
    }
    loadFromDataBase(key){
        key = localStorage.getItem(key);
        return JSON.parse(key);
      }
    deleteFromDataBase(key){
        return localStorage.removeItem(key);
    }
}

let profile = {
    form:document.getElementById('profile'),
    emailId:document.getElementById('id-email'),
    nickname:document.getElementById('nickname'),
    password:document.getElementById('password'),
    email:document.getElementById('email'),
    firstname:document.getElementById('firstname-profile'),
    lastName:document.getElementById('lastname-profile'),
    createProfile(profile){
        this.form.addEventListener('submit',e=>{
            e.preventDefault();
            profile = new Profile(this.emailId.value,this.nickname.value,this.password.value,this.email.value,this.firstname.value,this.lastName.value);
            profile.saveToDataBase(this.emailId.value);
            this.form.reset();
        })
    }
}
profile.createProfile();

//genre

class Genre{
    constructor(genre,id,name){
        this.genre = genre,
        this.id = id,
        this.name = name
    }
    updateGenre(text){
      return  this.genre = text;
    }
    remoweGenre(){
        return delete this.genre
    }
    saveToDataBase(key){
        let json = JSON.stringify(this);
        return localStorage.setItem(key,json)
    }
    loadFromDataBase(key){
        key = localStorage.getItem(key);
        return JSON.parse(key);
      }
    deleteFromDataBase(key){
        return localStorage.removeItem(key);
    }
}

let nekiFilm = new Genre('Komedija','kom','Neki smesan film');
nekiFilm.saveToDataBase(nekiFilm.genre,nekiFilm);




    




