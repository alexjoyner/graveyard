from setuptools import setup, find_packages
setup(
	name='ir900_datalogger',
	sdk_version='',
	version='1.1.0',
	author='Alex Joyner',
	author_email='alex.joyner@evanselectricalservicesllc.com',
	description='EES Datalogger file for inhand ir915 router',
	license='PRIVATE',
	packages = find_packages('src'),
	package_dir={ '' : 'src' },
	zip_safe=False,
	install_requires=[
  'PyYaml==3.12',
  'requests==2.20.0',
  'modbus-tk==0.5.8',
	],
	entry_points = """
		[console_scripts]
		ir900_datlogger = Application:main
		"""
)
