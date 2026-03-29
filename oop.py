# class Car :
#     name=""
#     module=0
#     color=""
#     def go(self):
#         print("im moving")
#     def stop(self):
#         print("i am stoping")

# car1=Car()
# car1.name="Bmw"
# car1.module=2024
# car1.color="red"
# print(car1.color,car1.module,car1.name)  
# car1.go()
# car1.stop()      






# class Football:
#     name=""
#     age=0
#     club=""
#     def shot(bluelock):
#         print("he is best stricker")
#     def passing(bluelock):
#         print("he is attack on last minute")

# uge=Football()
# uge.name="أيساغي يوتشي" 
# uge.age=18
# uge.club="munch"
# print(uge.name)
# print(uge.age) 
# print(uge.club)  
# uge.passing()
# uge.shot()


# class Bank:
#     def __init__(self):
#         self.name=""
#         self._accont=""
#         self.__palnce=500
#         self.__password=112233
#     # name=""
#     # account=""
#     # palnce=5000
#     # password=0
    

#     def show__balnce(self):
#         print("your balnce 0 🤣🤣 ,  your balnce  :  ",self.__palnce)
#     def debosit(self,amount):
#         self.__palnce=self.__palnce+amount
#         print("✔✔")
#     def with__draw(self,amount):
#         if amount<=self.__palnce :
#           self.__palnce=self.__palnce-amount
#           print("✔✔")
#         else  :
#             print("🤷‍♂️🤷‍♂️")

#     def show__password(self):
#           print(self.__password)

# bank2=Bank()
# bank2.name=" madara " 
# bank2.account="mohamed@gamil.com"
# print(" welcom to the bank" )
# password1=int(input("Enter your password : "))
# wer=int( input(" 1 : show balnce - 2 : debosit - 3 : with draw :  "))
# if wer == 1:
#     bank2.show__balnce()
# elif wer == 2 :
#     amount=int(input(" enter money  :  "))
#     bank2.debosit(amount)
#     bank2.show__balnce()
# elif wer == 3:
#     amount=int(input(" enter money  :  "))
#     bank2.with__draw(amount)
#     bank2.show__balnce()
# else :
#     print("🤷‍♂️🤷‍♂️🤦‍♂️")
   
# print('_____________________')          







# class Car:
#     def run (self) :
#         print("i am runing")
#     def stop (self):
#         print("iam stoping")
# class Electric_car (Car):
#        def work (self)  :
#             print(" i am working elctric")    

# class Fuel_car  (Car):
#      def  workk (self):
#           print("i am working fuel")     

# car1=Car() 
# car2=Electric_car()
# car3=Fuel_car()
# car1.run()
# car1.stop()
# car2.work()
# car3.workk()               


















# class Bank:
#     def calcolatour(self):
#         print("كباسح")
    
# class Saving (Bank) :
     
#     def calcolatour(self):
#         print("%5")
# class Student(Bank):
#     def calcolatour(self):
#         print("no money")

# bank1=[ Saving(),Student()]

# for bank in bank1 :
#     bank.calcolatour()









# class Carctar:
#     def __init__(self,name,health):
#         self.name=name
#         self.__health=health

#     def show__health(self):
#         print(self.name," health : ",self.__health)

#     def damge(self,damge):
#         if damge>0:
#             self.__health-=damge
#         if self.__health<0:
#             self.__health=0

#     def attack(self):  
#         print("i am attack")

# class Warrior(Carctar):
#     def attack(self):
#         print(self.name,"sord")             
        
# class Archer(Carctar):
#     def attack(self):
#         print(self.name,"arch")             
        
# class Magic(Carctar):
#     def attack(self):
#         print(self.name,"magic")   

# players=[
#     Warrior('son',100),
#     Archer("madara",200),
#     Magic('kepa',150)

#      
# for play in players:
#     play.attack()
#     play.damge(43)   
#     play.show__health()      
#     print('--------------------------------------------------------------------------------------------') 
                

from abc import ABC , abstractmethod
class Menu(ABC):
    def __init__(self,name,price):
        self.name=name 
        self.__price=price
    def Get_price(self):
        return self.__price
    @abstractmethod
    def Total(self,quantity):
        pass                        
class Food(Menu):
    def Total(self, quantity):
        m=quantity*self.Get_price()
        a=m*0.10
        return m+a
class Drink(Menu):
    def Total(self, quantity):
        m=quantity*self.Get_price() 
        return m
class Desert(Menu):
    def Total(self, quantity):
        m=quantity*self.Get_price()
        a=m*0.10
        return m-a
class Invoice:
    def __init__ (self):
        self.items = []

    def add_item(self, item, quantity):
        self.items.append((item, quantity))

    def print_invoice(self):
        print("===== Restaurant zero =====")
        total = 0

        for item, qty in self.items:
            item_total = item.Total(qty)  # Polymorphism
            print(item.name, "x", qty, "=", round(item_total, 2))
            total += item_total

        print("------------------------------")
        print("Total =", round(total, 2), "EGP")
        print("==============================")
burger=Food("Burger",150)
twist=Drink("Twist",25)
cake=Desert("chcolote",530)
inovice=Invoice()
inovice.add_item(burger,2)
inovice.add_item(twist,5)
inovice.add_item(cake,3)
inovice.print_invoice()






