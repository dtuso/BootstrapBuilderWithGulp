**Full documenation (under construction) can/will be found here:**

https://github.com/dtuso/BootstrapBuilderWithGulp

About
=====


It builds and minifies the group of bootstrap less files into one bootstrap.min.css file. 




```
Because it makes your seem cool!
```

Install
=====

### Step 1: Clone & Modify

Clone the files to your harddrive.  Copy the gulpfile.js and package.json into your website's director.  Edit the gulpfile so the pathing to your less and css folders match up to your site.  As a default, we assume you have a ```./less``` folder and a ```./css```.

### Step 2: Install Dependencies

**Install global dependencies**

#### NodeJS

Make sure you have NodeJS installed. It's available for both Windows and OS X at [NodeJS](http://www.nodejs.org)

#### Gulp

This new repository requires [GulpJS](http://www.gulpjs.com) for running the build tasks. You'll need to make sure it's installed.

```
sudo npm install -g gulp
```

#### Package Dependencies

Before you do anything, it is important that you install any local dependencies associated to this repository via the ```package.json``` file.
Dependencies are installed via the node package manager, ```npm``` so you have to make sure you have node installed.
See [Node Website](http://www.nodejs.org/) for more information.

Once you've ensured node is installed, open your project folder in terminal or the git shell. Then type this command:

```
npm install
```

This will find and install any dependencies you have listed in the ```package.json``` file.

Tasks
=====

Tasks are now executed with [GulpJS](http://www.gulpjs.com) instead of Grunt. It would be helpful to get more
acquainted with Gulp before continuing.


#### STYLES

Compile and minify any less files you have in your LESS folder. The compiled CSS, gets copied
to the CSS folder.

```
gulp styles
```


#### WATCH

A watch task is set up so that any changes made to any of the above less files, the ```STYLES```  will automatically get run.
For example, if you make a change to your html file, upon save, Gulp will execute the templates task.

```
gulp watch
```