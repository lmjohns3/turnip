import os
import setuptools

readme = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'README.md')

setuptools.setup(
    name='turnip',
    version='0.0.1',
    packages=setuptools.find_packages(),
    requires=['beets', 'flask-sqlalchemy'],
    author='lmjohns3',
    author_email='lmjohns3@gmail.com',
    description='Web interface/player for your beets library',
    long_description=open(readme).read(),
    license='MIT',
    keywords='music player database web',
    url='http://github.com/lmjohns3/turnip/',
    classifiers=['License :: OSI Approved :: MIT License'],
)
