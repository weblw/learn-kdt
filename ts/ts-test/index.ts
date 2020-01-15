// 布尔 boolean
let isDone:boolean=false
console.log(isDone)

// 数值 number
let decLiteral:number=6
console.log(decLiteral)
 
// 字符串 string
let name:string='bob'
console.log(name)
// name重名报错
export={}

// 数组 array
let list:number[]=[1,2,3]
console.log(list)
let list2:Array<number>=[1,2,3]

// 元组 tuple
let x:[string,number]=['hello',10]
console.log(x)
// 当访问一个已知索引的元素，会得到正确的类型
// 当访问一个越界元素，会使用联合类型替代

// 枚举 enum
enum Color {Red,Green,Blue}
let c:Color=Color.Green
let colorName:string=Color[1]

// Any
let notSure:any=4
notSure='maybe a string'
notSure=false
let list3:any[]=[1,'string',false]

// Void
function warnUser():void{
	console.log('no return ')
}
let unusable:void=undefined

// null undefined
let u:undefined=undefined

// never

// object

// 类型断言
let someValue:any='this is a string'
let strLength:number=(<string>someValue).length
let strLength2:number=(someValue as string).length 
// 在TS中使用jsx时只能使用as方式

// 解构
// let {a,b}:{a:string,b:string}=obj

// 接口
interface LabelledValue{
	label:string
}
function printLabel(labelledObj:LabelledValue){
	console.log(labelledObj.label)
}
let myObj={size:10,label:'size 10 object'}
printLabel(myObj)
// 可选属性
interface SquareConfig{
	color?:string,
	width?:number
}
function createSquare(config:SquareConfig):{color:string;area:number}{
	let newSquare={color:'white',area:100}
	if(config.color){
		newSquare.color=config.color
	}
	if(config.width){
		newSquare.area=config.width*config.width
	}
	return newSquare
}
let mySquare=createSquare({color:'black'})

// 类
class Animal{
	name:string;
	constructor(theName:string){
		this.name=theName
	}
	move(distanceInMeters:number=0){
		console.log(`&{this.name} moved ${distanceInMeters}`)
	}
}
class Snake extends Animal{
	constructor(name:string){
		super(name)
	}
	move(distanceInMeters=5){
		console.log('Slithering....')
		super.move(distanceInMeters)
	}
}
class Horse extends Animal{
	constructor(name:string){
		super(name)
	}
	move(distanceInMeters=45){
		console.log('Galloping...')
		super.move(distanceInMeters)
	}
}
let sam=new Snake('Sammy the Python')
let tom:Animal=new Horse('Tommy the Palomino')
sam.move()
tom.move(34)
// public
class Animal{
	public name:string
	public constructor(theName:string){
		this.name=theName
	}
	public move(distanceInMeters:number){
		console.log(`${this.name} moved ${distanceInMeters}m`)
	}
}
// private
class Animal{
	private name:string
	constructor(theName:string){
		this.name=theName
	}
}
new Animal('cat').name // error name is private
// private and protected
class Animal{
	private name:string
	constructor(theName:string){
		this.name=theName
	}
}
class Rhino extends Animal{
	constructor(){
		super('Rhino')
	}
}
class Employee{
	private name:string
	constructor(theName:string){
		this.name=theName
	}
}
let animal=new Animal('Goat')
let rhino=new Rhino()
let employee=new Employee('Bob')
animal=rhino
animal=employee // error Animal与Employee不兼容
// protected
class Person{
	protected name:string
	constructor (name:string){
		this.name=name
	}
}
class Employee extends Person{
	private department:string
	constructor(name:string,department:string){
		super(name)
		this.department=department
	}
	public getElevatorPitch(){
		return `hello,my name is ${this.name} and i work in ${this.department}`
	}
}
let howard=new Employee('Howard','Sales')
console.log(howard.getElevatorPitch)
console.log(howard.name) // ereror 不能访问protected属性
// protected属性不能在包含它的类外被实例化，但是能被继承
class Person{
	protected name:string
	protected constructor(theName:string){
		this.name=theName
	}
}
// Employee能够继承Persoon
class Employee extends Person{
	private department:string
	constructor(name:string,department:string){
		super(name)
		this.department=department
	}
	public getElevatorPitch(){
		return `name ${this.name}, department ${this.department}`
	}
}
let howard =new Employee('Howard','Salses')
let john=new Person('John') // 错误 Person的构造函数是被保护的

// readonly修饰符
// 只读属性必须在声明或者构造函数里被初始化
class Octopus{
	readonly name:string
	readonly numberOfLegs:number=8
	constructor(theName:string){
		this.name=theName
	}
}
let dad=new Octopus('Man with the 8 strong legs')
dad.name='Man with the 3-piece suit' // 错误，name是只读的

// 参数属性
class Octopus{
	readonly numberOfLegs:number=8
	constructor(readonly name:string){}
}

// 存取器
class Employee{
	fullName:string
}
let employee=new Employee()
employee.fullName='Bob Smith'
if(employee.fullName){
	console.log(employee.fullName)
}

let passcode='secret passcode'
class Employee{
	private _fullName:string
	get fullName():string{
		return this._fullName
	}
	set fullName(newName:string){
		if(passcode && passcode=='serect passcode'){
			this._fullName=newName
		}else{
			console.log('error')
		}
	}
}
let employee=new Employee()
employee.fullName='Bob Smith'
if(employee.fullName){
	alert(employee.fullName)
}

// 静态属性
class Grid{
	static origin={x:0,y:0}
	calculateDistanceFromOrigin(point:{x:number;y:number}){
		let xDist=(point.x-Grid.origin.x)
		let yDist=(point.y-Grid.origin.y)
		return Math.sqrt(xDist*xDist+yDist*yDist)/this.scale
	}
	constructor(public scale:number){}
}
let grid1=new Grid(1.0)
let grid2=new Grid(5.0)
console.log(grid1.calculateDistanceFromOrigin({x:10;y:10}))
console.log(grid2.calculateDistanceFromOrigin({x:10;y:10}))

// 抽象类
abstract class Animal{
	abstract makeSound():void
	move():void{
		console.log('roaming the earch ...')
	}
}
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
abstract class Department{
	constructor(public name:string){}
	printName():void{
		console.log('Department name:'+this.name)
	}
	abstract printMeeting():void // 必须在派生类中实现
}
class AccountingDepartment extends Department{
	constructor(){
		super('Accounting and Auditing') // 派生类的构造函数中必须调用super
	}
	printMeeting():void{
		console.log('The Accounting Department')
	}
	generateReports():void{
		console.log('Generating accounting reports ...')
	}
}
let department:Department // 允许创建一个对抽象类型的引用
department=new Department() // 错误，不能创建抽象类型的实例
department=new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()
department.generateReports() // 错误，方法在声明的抽象类中不存在

// 构造函数
class Greeter{
	greeting:string
	constructor(message:string){
		this.greeting=message
	}
	greet(){
		return 'Hello,'+this.greeting
	}
}
let greeter:Greeter
greeter=new Greeter('world')
console.log(greeter.greet())

class Greeter{
	static standardGreeting='Hello,there'
	greeting:string
	greet(){
		if(this.greeting){
			return 'Hello,'+this.greeting
		}else{
			return Greeter.standardGreeting
		}
	}
}
let greeter1:Greeter
greeter1=new Greeter()
console.log(greeter1.greet())

// 把类当做接口使用
class Point{
	x:number,
	y:number
}
interface Point3d extends Poind{
	z:number
}
let point3d:Point3d={x:1,y:2,z:3}

// 函数
function add(x,y){
	return x+y
}
function add(x:number,y:number):number{
	return x+y
}
let myAdd=function(x:number,y:number):number{
	return x+y
}
// 可选参数
function buildName(firstName:string,lastName?:string){
	if(lastName){
		return firstName+''+lastName
	}else {
		return firstName
	}
}
// 可选参数可以不传，但是参数不能多了
// 可选参数必须跟在必选参数后面

// 默认参数
function buildName(firstName:string,lastName='Smith'){
	return firstName+''+lastName
}
// 默认参数与可选参数一样，在调用的时候可以省略
// 默认参数可以在，必选参数前面，但是用户必须明确传入undefined来获得默认值
function buildName(firstName='Will',lastName:string){
	return firstName+''+lastName
}
let result=buildName(undefined,'Adams') // Will Adams
// 剩余参数
function buildName(firstName:string,...restOfName:string[]){
	return firstName+''+restOfName.join(' ')
}
// 剩余参数可以一个也没有。也可以是多个
function buildName(firstName:string,...restOfName:string[]){
	return firstName+''+restOfName.join(' ')
}
let buildNameFun:(fname:string,...rest:string[])=>string=buildName

// this 和箭头函数
let deck={
	suits:['hearts','spades','clubs','diamonds'],
	cards:Array[52],
	creatreCardPicker:function(){
		return function(){
			let pickedCard=Math.floor(Math.random()*52)
			let pickedSuit=Math.floor(pickedCard/13)
			return {suit:this.suits[pickedSuit],card:pickedCard%13}
		}
	}
}
let cardPicker=deck.creatreCardPicker()
let pickedCard=cardPicker()
alert('Card:'+pickedCard.card+'of'+pickedCard.suit) // 报错，this指向window

// 添加接口
interface Card{
	suit:string;
	card:number;
}
interface Deck{
	suits:string[];
	cards:number[];
	creatreCardPicker(this:Deck):()=>Card
}
let deck:Deck={
	suits:['hearts','spades','clubs','diamonds'],
	cards:Array(52),
	creatreCardPicker:function(this:Deck){
		return ()=>{
			let pickedCard=Math.floor(Math.random()*52)
			let pickedSuit=Math.floor(pickedCard/13)
			return {suit:this.suits[pickedSuit],card:pickedCard%13}
		}
	}
}
let cardPicker=deck.creatreCardPicker()
let pickedCard=cardPicker()
alert('Card:'+pickedCard.card+'of'+pickedCard.suit)


// 泛型
// 不使用泛型
function identity(arg:number):number{
	return arg
}
// 类型变量
function identity<T>(arg:T):T{
	return arg
}
// use
let output=identity<string>('mustring')
// else use as this
let output=identity('myString')

// 泛型变量
function length<T>(arg:T[]):T[]{
	console.log(arg.length)
	return arg
}
// 泛型接口
interface Deneric{
	<T>(arg:T):T
}
function identity<T>(arg:T):T{
	return arg
}
let myIdentity:Deneric=identity

/* 泛型类：类有两部分，静态部分和实例部分。泛型类指的是实例部分的类型，
所以静态属性不能使用泛型类型 */

// 泛型约束
interface Lengthwise{
	length:number
}
function long <T extends Lengthwise>(arg:T):T {
	console.log(arg.length)
	return arg
}
long({length:10,value:3})

// 泛型约束中使用类型参数
function getProperty(obj:T,key:T){
	return boj[key]
}
let x={a:1,b:2}
getProperty(x,'a')
getProperty(x,'m') // error

// 泛型中使用类类型
function create<T>(c:{new():T}):T{
	return new c()
}

class BeeKeeper{
	hasMask:boolean;
}
class ZooKeeper{
	nametag:string;
}
class Animal{
	numLegs:number;
}
class Bee extends Animal{
	keeper:BeeKeeper
}
class Lino extends Animal{
	keeper:ZooKeeper
}
function createInstance<A extends Animal>(c:new()=>A):A{
	return new c()
}
createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask

// 枚举
enum Direction{
	up=1,
	down,
	left,
	right
}
// 交叉类型
function extend<T,U>(first:T,secound:U):

// 函数

function add1(x:number,y:number):number{
	return x+y
}

let add2:(x:number,y:number)=>number
add2=(a,b)=>a+b

type Add3=(x:number,y:number)=>number
let add3:Add3=(a,b)=>a+b

interface Add4{
	(x:number,y:number):number
}
let add4:Add4=(a,b)=>a+b

// 交叉类型
function extend<T,U>(first:T,secound:U):T & U{
	let result=<T & U>{}
	for(let id in first){
		(<any>result)[id]
	}
}











