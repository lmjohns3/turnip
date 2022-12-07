import os
import setuptools

readme = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'README.md')

setuptools.setup(
    author='lmjohns3',
    author_email='lmjohns3@gmail.com',
    classifiers=['License :: OSI Approved :: MIT License'],
    description='Web interface/player for your beets library',
    entry_points=dict(console_scripts=[
        'turnip-server = turnip.server:main',
        'turnip-player = turnip.player:main',
    ]),
    install_requires=['beets', 'click', 'flask', 'flask-cors', 'flask-sqlalchemy', 'requests'],
    keywords='music player database web',
    license='MIT',
    long_description=open(readme).read(),
    name='turnip',
    packages=['turnip'],
    url='http://github.com/lmjohns3/turnip/',
    version='0.0.1',
)
