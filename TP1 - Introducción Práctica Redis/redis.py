import redis
from random import randint


server = redis.Redis("localhost", 6379, 0)
"""
#1) 
top = 0
while (top<10000):
    server.set(top,randint(100000000, 500000000))
    top = top + 1
   
while (top>-1):
    valor = server.get(top)
    print valor
    top = top - 1

    
#2)
lista=[]
lista.append(server.keys('*'))
for clave in lista:
    server.move(clave,1)

#3)  

server = redis.Redis("localhost", 6379, 0)
toplista = 0
while (toplista<150):
    server.lpush("lista",randint(100, 500))
    toplista = toplista + 1


while (toplista>-1):
    valor = server.lindex("lista",toplista)
    print valor
    toplista = toplista - 1

#4) 

print "Valor 18"
valor18 =  server.lindex("lista",18)
server.linsert("lista","after",valor18, "Python") 
valor75 =  server.lindex("lista",75)
server.linsert("lista","before",valor75, "Nodejs")   

toplista =0
while (toplista<21):
    valor = server.lindex("lista",toplista)
    print valor
    toplista = toplista + 1

#5)

server = redis.Redis("localhost", 6379, 0)
print server.keys('*')

#6)


lista = server.sort("lista",0,-1,None,None,True)
print lista


#7)
server = redis.Redis("localhost", 6379, 1)
print server.flushdb()
"""
  
  
