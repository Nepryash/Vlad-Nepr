//-----------------------------------HM5---------------------------------------
//1
class Human {
  constructor(name,weight,height,age,dataOfBirth,sex){
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.dataOfBirth = dataOfBirth;
    this.sex = sex;  
  }
  get getInfo(){
    const informatiom = {
      name: this.name,
      weight: this.weight,
      height: this.height,
      age: this.age,
      dataOfBirth: this.dataOfBirth,
      sex: this.sex
    }
    console.log(informatiom)
  }
  sayHi(){
    console.log('Hi ' + this.name)
  }
  set newName(name){
    this.name = name
}
  set setDis (dissabilities){
    this.dissabilities = dissabilities
    return !!dissabilities;
}
  set newWeight(weight){
    this.weight = weight
  }
  set newHeight(height){
    this.height = height
  }
  set newAge(age){
    this.age = age;
  }
  set newDateOfBirth(dataOfBirth){
    this.dataOfBirth = dataOfBirth
  }
  set newSex(sex){
    this.sex = sex;
  }
}

const firstPerson = new Human ('Vlad',72,180,17,new Date('2005-07-05'),'male')
firstPerson.getInfo
firstPerson.sayHi();
firstPerson.newName;
firstPerson.setDis

class FrontDev extends Human {
  constructor(careerStart,lastCompany){
    super(careerStart,lastCompany)
    this.careerStart = careerStart;
    this.lastCompany = lastCompany;
    this.newName = 'Oleg';
    this.newWeight = 65;
    this.newHeight = 177;
    this.newAge = 24;
    this.newDateOfBirth = new Date('2002-09-14');
    this.newSex = 'male'
    this.setDis = false
  }
  sayHi(){
    console.log('Hi ' + this.name + ' Я Фронтенд разработчик. Работаю с 2022.04.04')
}
}
const frontDev = new FrontDev (new Date(2020-05-20),{
        start: new Date(),
				end: new Date(),
				salaryPerMonth: Number,
				position: 'junior' || 'middle' || 'senior',
				companyName: 'Oracle',
})
console.log(frontDev)
frontDev.sayHi()
//


class Builder extends Human {
  constructor(location){
    super(location,speed,tools)
    this.location = location;
    this.speed = speed;
    this.tools = tools;
    this.newName = 'Max';
    this.newWeight = 80;
    this.newHeight = 175;
    this.newAge = 30;
    this.newDateOfBirth = new Date('1988-09-14');
    this.newSex = 'male'
    this.setDis = false
  }
  set buildHouse(meters,minutes){
    
  }
}
const builder = new Builder('The Hague,Netherlands','20 minutes',[axe,pixare]);