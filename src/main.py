
import sys
import MessageChannel
from multiprocessing import Process
import Processor

def init():
#add user-defined appplication function
	print 'start program for here'
	MessageChannel.stop()
	
def usage():
	print 'add help info'
	sys.exit(255)
	
def main(argv=sys.argv):
	import getopt
	import RouterInfo

	short_args="h:"
	long_args=[
		"help",
	]
	MessageChannel.logconfig('debug')
	RouterInfo.set_exec_env(argv[0])
	arguments = argv[1:]
	try:
		opts, args = getopt.getopt(arguments, short_args, long_args)
	except:
		usage()

	for option, value in opts:
		if option in ('-h', '--help'):
	    		usage()

	app = Processor.Pyapp()
	app.run()		
		
if __name__=='__main__':
	main()
