What is Site Assembler?
=======================
This project is a starting point for new static sites that want to take advantage of modular markup.  Using this baseline project a site can be created using a layout that applies to all pages.  Each page can be created as a template and partials can be created for reusable assets.  All of these items are then brought together using the excellent assemble.io

How to use this project
=======================
Here are the steps required to get a new site running using this project.
1. Fork this repository
1. Install the node.js modules using npm.
1. Build the site using grunt.

```
npm install
grunt
```

At this point the build folder should now contain new generated html files.


Creating your own content
=========================
The following files are included for convenience and example purposes only.  They should be deleted before begining a new project.
* partials/call-to-action.hbs
* templates/about.hbs
* templates/index.hbs

#### Creating templates for your own content
The templating engine behind the project is handlebars.  All layouts/partials/templates using this templating format.



#### Templates
Templates are the files that will eventually be generated as HTML files.  These are the files that will define the site pages themselves. Create new pages by adding new ```.hbs``` files to the ```templates``` folder.  These files will be generated as ```.html``` files in the ```build``` folder.  

### Layouts
Layouts wrap the templates with additional markup.  The default ```layout.hbs``` is the perfect place to put global site header and footer markup.

#### Partials
Partials are reusable markup that can be shared between templates.  Create new ```.hbs``` files in the ```partials``` folder, then in the desired location of the template insert the following: ```{{>name-of-partial}}``` (the name of the partial is the file name without the .hbs extension)



Additional information
======================

#### Workflow Automation
The ```gruntfile.js``` has been created to automate the most common tasks when generating static sites.  In addition to site assembly, the grunt configuration has been created to compile LESS stylesheets to CSS, and use ```grunt-watch``` to run these tasks automatically when files are modified.  To star the automated watcher simply run ```grunt watch``` the system will then look for changes to layouts, partials, templates and less files.  

#### Live Reload
The ```gruntfile.js``` has also been created to work with live reload.  Every time the assemble and LESS tasks are run they will notify a live reload client.  This can be accomplished two ways:
1. Run ```grunt watch``` as described above
1. Use the LiveReload client to skip the command line altogether.  Enable the "Run a custom command after processing changes" option and set the command to ```grunt```.
