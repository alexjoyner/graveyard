from setuptools import setup, find_packages
setup(
	name='ir900_datlogger',
	sdk_version='',
	version='0.0.1',
	author='Alex Joyner',
	author_email='alex.joyner@evanselectricalservicesllc.com',
	description='EES Datalogger file for inhand ir915 router',
	license='PRIVATE',
	packages = find_packages('src'),
	package_dir={ '' : 'src' },
	zip_safe=False,
	install_requires=[
	],
	entry_points = """
		[console_scripts]
		ir900_datlogger = Application:main
		"""
)
