# sentence=input('enter your name : ')
# word=sentence.split()
# print('num of words : ' , len(word))
#                                         -----------------------------
# text = input('enter somthing : ')
# upper = 0
# lower = 0
# for ch in text :
#   if ch.isupper() :
#     upper+= 1
#   elif ch.islower() :
#     lower+= 1

# print(' uper case : ' ,upper)
# print(' lower case : ' ,lower)

#                                           ----------------------------

# sentence = input (' enter a sentence : ')
# words = sentence.split()
# longest = ""
# for w in words :
#     if len (w) > len (longest) :
#         longest = w

# print ( 'longest : ' , longest)



#                                           ----------------------------

# from textblob import TextBlob

# print("hello 😊")
# print("exit'\n")

# for _ in range(3):  
#     text = input("how are you ")

#     if text.lower() == 'exit':
#         print("by ")
#         break

#     blob = TextBlob(text)
#     mood = blob.sentiment.polarity

#     if mood > 0.3:
#         print("🙂 you happy")
#     elif mood < -0.3:
#         print("😢 you said")
#     else:
#         print("😐 you tired \n")

# sentence = input("Enter a sentence: ")

# words = sentence.split()          
# unique_words = set(words)        

# result = " ".join(unique_words)   

# print("Sentence with no repeated words:")
# print(result)
 #                                     ---------------------
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

#  
# 

#------------------------ ----------------------
# print('im elam hello')
# while True :
#   user_input=input("you : ")
  
#   if user_input=='bye' :
#     print('good')
#     break
#   if user_input.lower()=="hi" :
#     print(" elam : hello")
#   elif user_input.lower()=='your name':
#     print('elam : i am elam ')
#   elif user_input.lower()== 'my name is mohamed' :
#     print('elam : hello mohamed ')
#   elif user_input.lower()== 'you can make module' :
#     print('elam :yes , sure mr.mostafa you can do it ')
#   else:
#     print('elam: i dont understand ')




# name={
#     13 : 'mohamed ' ,
#     20 : ' abdelrahman ' ,
#     22 : " ali " ,
#     17 : " eyad " , 
# }
# name[ 18 ]='omar'
# print(name)
# name[ 17 ]=' amr '
# print(name)
# # name.pop( 22 )
# # print(name)
# # name[22]
# print(name.get(22,'not found'))
# name.clear()
# print(name)


# name =int(input("enter your number"))
# if name%2==0 :
#   print('even')
# else :
#   print('odd')
  







# ------------------------------------



# my_dict = {'0' : 1, '1' : 2, '2' : 3 }

# key = int(input("Enter key to check : "))

# if key in my_dict.values():
#     print("Result : True")
# else:
#     print("Result : False")


























# number = int(input('enter your number '))
# if number>=0 :
#     print("positive")
# else :
#      print("negitive")


# print("hello user")


# frist =int(input("enter your firist number "))
# socend =int(input("enter your second number "))
# third =int(input("enter your third number "))
# def hhhh(frist , socend , third):

#   if frist >= socend and frist >= third :
#     print("the bigest number frist : " , frist)

#   elif socend > frist and socend >= third :
#     print("the begist number socend : " , socend)

#   elif third > frist and third > socend :
#     print("the bigest number third : " , third)

# #   else :
# #     print("the bigest number third : " , third)
# print(hhhh(frist , socend , third))






# ch=("i love python ")
# leter=input("enter your lettr : ")
# text=0
# for i in ch :
#     if leter==i :
#         text+=1
# print("numer of : ",leter ,"is =  ",text)  
  


# list = [10, 11, 12, 13, 14, 15]
# remove = []

# for item in list:
#     remove.insert(0,item)

# print(remove)

# -----------------------------------------------------------------------------------------
# def check_dict(d):
#     while True:
#         key = input("\nEnter key to check (or type 'exit' to quit): ")
#         if key.lower() == 'exit':
#             print(" Goodbye!")
#             break
#         elif key in d:
#             print(f" Key '{key}' found → Value = {d[key]}")
#         else:
#             print(f" Key '{key}' not found.")

# my_dict = {'0': 1, '1': 2, '2': 3}
# print("Dictionary:", my_dict)

# check_dict(my_dict)





# for number in range(3):
# number=int(input("enter your key"))



# def app(y,u):
#     x=y*u 
#     return x
# print(app(8,5))    
# name= input("enter yoour name : ")
# birth = input("enter your birth day : ")
# def account (name ,birth):
#    user=name+birth
#    return user
# print("your user name will b : ",account(name,birth))

# def  rfange(num) :
#     for i in range(1,11) :
#       print(f"{num}  *  {i} = {num * i}")
# num=int(input("enter your number : "))   
# print(rfange(num))  
# -------------------------------------------------------------------------------------------------
# n=int(input())
# x=0
# for _ in range(n):
#     s=input()

#     if '++' in s :
#         x += 1

#     else:
#         x-=1

# print(x)
# --------------------------------------------------------------------------------------------------
# t=int(input())
# for _ in range(t):
#     n , k = map(int,input().split())
#     a=list(map(int,input().split()))
#     if k==1 :
#         if a==sorted(a):
           
#           print("yes")
    
     
#         else    :
#           print('no')
#     else :
#        print("yes")






# n=int(input())
# if n%2==0:
#     print(n/2)
# else:
#     print(-(n+1)//2)




# v=int(input())
# for _ in range(v):
#     n=int(input())
#     a=list(map(int,input().split()))
#     from collections import defaultdict
#     cnt=defaultdict(int)
    
#     for x in a:
#        c=x.bit_length()-1
#        cnt[c]+=1
#     ans =0
#     for k in cnt.values():
#         ans+=k*(k-1)//2
#     print(ans)




# v=int(input())
# for _ in range (v):
#     n=int(input())
#     a=list(map(int,input().split()))

#     l=0
#     r=n-1
#     min=1
#     max=n
#     while l<r:
#         if a[l]==min:
#             l+=1
#             min+=1
#         elif a[l]==max:
#             l+=1
#             max -=1
#         elif a[r]==min:
#             r-=1
#             min +=1
#         elif a[r]==max:
#             r-=1
#             max-=1
#         else:
#             break
#     if l<r:
#         print(l+1,r+1)
#     else:
#         print(-1)   
