class Duck{
  //
  flyBehavior;
  quackBehavior;

  performQuack(){
    this.quackBehavior.quack();
  }

  performFly(){
    this.flyBehavior.fly();
  }

  setFlyBehavior(flyBehavior){
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior (quackBehavior){
    this.quackBehavior = quackBehavior;
  }

  swim(){
    console.log('Estoy nadando');
  }

  display(){
  }
  //
}

class VolarConCohetes{
  fly(){
    console.log('con mis cohetes llego lejos');
  }
}

class FlyWithWings{
  fly(){
    console.log('vuelo alto...')
  }
}

class FlyNoWay {
  fly(){
    console.log('este pato no vuela...')
  }
}

class Quack{
  quack(){
    console.log('quack quack')
  }
}

class Squeak{
  quack(){
    console.log('squeak squeak squeak')
  }
}

class MuteQuack{
  quack(){
    console.log('shhh calladito')
  }
}

class MallardDuck extends Duck{
  display(){
    console.log('mirame soy un pato real')
  }

}

class RedHeadDuck extends Duck{
  display(){
    console.log('mira esta belleza pelirroja')
  }
}

class CauchoDuck extends Duck{
  display(){
    console.log('hola xd')
  }
  fly(){
    console.log('...no vuelo :(')
  }
}

class CorchoDuck extends Duck{
  fly(){
    console.log('no vuelo :(')
  }
}





