"use strict"

class Device{
	constructor(name, model){
		this._name = name;
		this._model = model;
		this._powerOnOFF = false;
		this._deviceMode = [];
		this._currentMode = 0;
		this._startStopCurrentMode = false;
		this._delayedStartTime = 0;
	}

	get name(){
		return this._name;
	}

	get model(){
		return this._model;
	}

	get powerOnOFF(){
		return this._powerOnOFF;
	}

	turnOnDevice(){
		this._powerOnOFF = true;
		console.log("Устройство включено");
	}

	turnOffDevice() {
		this._powerOnOFF = false;
		console.log("Устройство выключено");
	}

	get currentMode(){
		return this._deviceMode [this._currentMode];
	};

	nextMode() {
		if ( this._currentMode >= this._deviceMode .length -1 ) {
			this._currentMode = 0;
		} else if(this._currentMode >=0){
			this._currentMode ++;
		}
	}

	previousMode() {
		if ( this._currentMode <= 0) {
			this._currentMode = this._deviceMode.length-1;
		} else {
			this._currentMode--;
		}
	}

	get startStopCurrentMode(){
		return this._startStopCurrentMode;
	}

	startCurrentMode(){
		this._startStopCurrentMode = true;
		console.log("Устройство начало работу");
	}

	stopCurrentMode(){
		this._startStopCurrentMode = false;
		console.log("Работа устройства остановлена");
	}

	set delayedStartTime (delayedStartTime){
		this._delayedStartTime = delayedStartTime;
	}

	delayedStart(){
		let time = this._delayedStartTime * 1000
		setTimeout(this.startCurrentMode.bind(this), time);
	}

}


class CarCharge extends Device {
	constructor(name, model) {
		super(name, model);
		this._deviceMode = ["Fast Charge", "Charge-discharge cycle", "Night charging mode", "Battery section balancing", "Manual charge mode"];
		this._batteryState = 0;
		this._voltmeter = 0;
		this._stepVoltmeter = 10;
		this._ampermeter = 0;
		this._stepAmpermeter = 10;
		this._energy = 386;
		this._lowPrice = 0.9;
		this._highPrice = 1.68;
		this._endPrice = 0;
	}

	get batteryState(){
		return this._batteryState;
	}

	// Имитация индикации зарядки
	updateBatteryState(){
		if(this._batteryState >= 20){
			clearInterval(this.updateBatteryState.bind(this), 100)
		}else{
			this._batteryState += 5;
		}
	}

	batteryStateDisplay(){
		setInterval(this.updateBatteryState.bind(this), 2000);
	}

	get Voltmeter(){
	 return this._voltmeter;
	}

	voltmeterUp() {
		if( this._voltmeter >= 100 ) {
			this._voltmeter = 100;
			console.log(this._voltmeter + "V");
		} else {
			this._voltmeter += this._stepVoltmeter;
			console.log(this._voltmeter + "V");
		}
	}

	voltmeterDown() {
		if ( this._voltmeter <= 0 ) {
			this._voltmeter = 0;
			console.log(this._voltmeter + "V");
		} else {
			this._voltmeter -= this._stepVoltmeter;
			console.log(this._voltmeter + "V");
		}
	}

	get ampermeter(){
		return this._ampermeter;
	}

	ampermeterUp() {
		if( this._ampermeter >= 60 ) {
			this._ampermeter = 60;
			console.log(this._ampermeter + "A");
		} else {
			this._ampermeter += this._stepAmpermeter;
			console.log(this._ampermeter + "A");
		}
	}

	ampermeterDown() {
		if ( this._ampermeter <= 0 ) {
			this._ampermeter = 0;
			console.log(this._ampermeter + "A");
		} else {
			this._ampermeter -= this._stepAmpermeter;
			console.log(this._ampermeter + "A");
		}
	}

	get energy (){
		return this._energy;
	}

	get endPrice(){
		return this._endPrice;
	}

	calculationPrice(){
		if(this._energy <= 100){
			this._endPrice = this._energy * this._lowPrice
		}else if(this._energy > 100){
			const cost = 100 * this._lowPrice;
			this._endPrice = (this._energy - 100) * this._highPrice + cost;
		}
	}

};

class WashingMachine extends Device {
	constructor(name, model) {
		super(name, model);
		this._deviceMode = ["90град", "Деликатная стирка", "Синтетика 30град", "Синтетика 40град", "Стирка в холодной воде", "Дополнительное полоскание", "Отжим"];
		this._spinSpeed = 1000;
	}

	get spinSpeed(){
		return this._spinSpeed;
	}

	spinSpeedUp() {
		if( this._spinSpeed >= 1000 ) {
			this._spinSpeed = 1000;
			console.log(this._spinSpeed + "об/мин");
		} else {
			this._spinSpeed += 200;
			console.log(this._spinSpeed + "об/мин");
		}
	}

	spinSpeedDown() {
		if ( this._spinSpeed <= 600 ) {
			this._spinSpeed = 600;
			console.log(this._spinSpeed + "об/мин");
		} else {
			this._spinSpeed -= 200;
			console.log(this._spinSpeed + "об/мин");
		}
	}

};


let machine1 = new WashingMachine ("Whirlpool", "IZ-789");
let machine2 = new WashingMachine ("Samsung", "SMG-456787");
let carCharge1 = new CarCharge ("GCC", "Z-78988");
let carCharge2 = new CarCharge ("GCCP", "MG-49787");


class SmartHouse {
	constructor(){
		this._deviceStorage = [];
	}

	addDevice(someDevice){
		this._deviceStorage.push(someDevice);
	}

	get deviceStorage(){
		return this._deviceStorage;
	}

	getDeviceListName(){
   let deviceNames = this._deviceStorage.map(function(value, index, array){
	  return value.name;
    });
		return deviceNames;
	}

	getDeviceByName(someName){
		let index = this._deviceStorage.findIndex(function(element){
 	   return element.name === someName;
    });
		if(index != -1){
		 return this._deviceStorage [index];
		}else {
			return false;
		}

		// Решение 2
	 /*let foundDevice = this._deviceStorage.filter(function(currentValue){
			return currentValue.name === someName
    });
		return index;
		return foundDevice [0];
		*/

	}

	deleteDeviceByName(someName){
		let foundDeviceIndex = this._deviceStorage.findIndex(function(element){
 	   return element.name === someName;
    });
		if(foundDeviceIndex != -1){
		 this._deviceStorage.splice(foundDeviceIndex, 1);
		 return this._deviceStorage;
		}else {
			return false;
		}
	}

};
let myHouse = new SmartHouse ();
