#'''
#将某个文件改为字符串的形式
#'''
import os
import traceback 

try:
	srcpath='D:\\work\\html\\ScriptGame\\src\\html\\snake.html'
	tarpath='D:\\work\\html\\ScriptGame\\src\\html\\snake_str.txt'

	source = open(srcpath, 'r',encoding='utf-8')
	target=open(tarpath,'w',encoding='utf-8')

	lines=source.readlines()
	n=0
	for line in lines:
		line=line.strip('\n')
		li=line.replace('"','\\"')
		if len(lines)-n==1:
			li='" '+li+' "'
		else:
			li='" '+li+' "+'
		#print(li.encode("utf-8", "replace"))
		target.write(li+'\n')
		n+=1
	source.close()
	target.close()
	print('处理成功')
	os.system('start '+tarpath)
	#input()
except : 
        print( traceback.print_exc()  )
        input()
