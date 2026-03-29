# sentanc = input(" enter your sentac")
# word =sentanc.split()
# longest=""
# for i in word :
#     if len (i) > len (longest):
#       longest = i

# print("longest : ", longest)

# sentac =input("enter your name : ")
# letters=0
# spaces=0
# for ch in sentac :
#     if ch==" ":
#         spaces+=1
#     else:
#         letters+=1

# print('spaces is : ',spaces)
# print('letters is : ',letters)

# sentac=input('enter your name : ')
# text=sentac.split()
# sw=[text[:-1]for text in sentac]
# sw=set(text)
# cc=set(sw[:-1])
# result=" ".join(sw)


# print('result is : ',result)
# print(result)

# for n in range(3):
#   number=int(input("enter your key"))
#   if number==1234 :
#     print("you have an exam tomorrow get up and study")
#   else :
#     print("go study you will fail")



# for h in range(0,6):
#      if h==3 :
#         continue
#      print(h) 
       



# list = []
# while True :
#     user =input("Add item : ")
#     if user=="done":
#        break
#     else :
#        list.append(user)
# print("your shopping list ",list)




students =['mohamed','mariam','ahmed',"omar",'yousef'] 
print("list students : ",students)  
kill =input("1 (reverce) : 2 (sort) : 3 (add)  : ")
if kill =="1":
    students.reverse()
    print("reverce : ",students)
elif kill =="2":
    students.sort()
    print('sort : ',students)
elif kill =="3":
    name=input("add a new name : ")   
    students.append(name) 
    print("update a new name : ",students)
else :
   print ("its false ")    