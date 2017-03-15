class Transportation {
  constructor(id, capacity){
    this.id = id;
    this.capacity = capacity;
  }

  getPrice(){
    return 0;
  }
}

class Airplane extends Transportation { // extends 키워드를 이용합니다.
  constructor(id, capacity, seatClass){
    super(id, capacity); // super는 Transportation 클래스의 생성자를 의미합니다.
    this.seatClass = seatClass;
  }

  getPrice(){ // 상속받은 메소드를 덮어 쓰기
    var price = Airplane.prices[this.seatClass];
    if (!price) { // price가 undefined거나 0이거나 null이거나
      return -1;
    } else {
      return price;
    }
  }
}
Airplane.prices = {
  I: 100,
  B: 300,
  F: 500
};

class Ship extends Transportation {
  constructor(id, capacity, isCruise){
    super(id, capacity);
    this.isCruise = isCruise;
  }

  getPrice(){ // 상속받은 메소드를 덮어 쓰기
    return (this.isCruise) ? 200 : 50; // 삼항 연산자
  }
}

var air1 = new Airplane("747", 20, "F");
var air2 = new Airplane("747", 50, "B");
var ship1 = new Ship("Cruise88", 300, true);
var ship2 = new Ship("Ship39", 150, false);

var list = [air1, air2, ship1, ship2];
for(var i=0; i < list.length; i++) {
  // trans는 각기 Ship 혹은 Airplain 클래스의 인스턴스이지만, 모두 다 Transportation의 인스턴스는 맞습니다.
  var trans = list[i];
  console.log(trans.id, trans.capacity, trans.getPrice());
}

/**
747 20 500
747 50 300
Cruise88 300 200
Ship39 150 50
**/