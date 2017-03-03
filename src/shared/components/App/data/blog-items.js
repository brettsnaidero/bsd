import React from 'react';
import Highlight from 'react-highlight';

const showcaseItems = [
    {
        id: 'npm-gulp-and-sass',
        title: 'A comprehensive and encyclopedic guide to using NPM, Gulp, and SASS! (For Designers)',
        date: '20th September, 2016',
		img: 'img/work/mmj.png',
        content: (
            <div>
                <p>Firstly let's address some immediate questions that you probably have:</p>
                <h5>Is this guide really comprehensive and encyclopedic?</h5>
                <p>Nope. That was lie. It was also a test to see if you had your critical thinking cap on, congratulations on questioning everything you held to be true.</p>
                <p>This guide is actually pretty much as lean as possible, so don't expect it to answer all your questions - if you don't know what NPM is, for example, I'd suggest you spend a lazy Sunday Googling it, because that's outside the scope of this guide.&nbsp;</p>
                <p>However, this guide does try to cover all the stuff you need to know, in order to get up and running with a Gulp project. From there, you have a great jumping off point for more learning, or you can kind of ignore the magic and just reap the benefits.</p>
                <h5>What's NPM?</h5>
                <p>Come on mate, what did I just say.</p>
                <hr />
                <h3>Getting started - setting up your computer</h3>
                <p>
                    <img className="right" title="" src="../img/blog/npm.png" alt="Node JS and NPM" />
                    Before we run off and begin the Gulp based merriment, we need to install the command line tools we need.
                </p>
                <h5>Installing <em>Node</em> and <em>NPM</em></h5>
                <p>If you haven't already, go download and install <a href="https://nodejs.org/en/">Node</a>&nbsp;on your computer. This comes with that lovely NPM thing you keep hearing about, so don't sweat that.</p>
                <h5>Installing <em>Gulp</em> Globally</h5>
                <p>We also need to install Gulp globally on the machine.&nbsp;</p>

                <Highlight className="js">
                    {"npm install --global gulp"}
                </Highlight>

                <p>Then we're ready spaghetti.</p>

                <hr />

                <h3>Setting up a basic Gulp project</h3>
                <h5>Covered in this guide: <em>Initialising a Gulp project</em>, <em>installing dependencies</em>,&nbsp;<em>SASS</em></h5>
                <p>Alrighty folks, let's get stuck into some fun stuff. Let's start said stuff the way we always begin fun things - by opening up the <strong>command line</strong>! I'll wait for the cheers of support to die down, and then we can begin.</p>
                <ol>
                    <li>&nbsp;'cd' into the project directory (ie. the folder with your project in it).</li>
                    <li>Type&nbsp;<code className=" language-javascript">npm init</code> and answer the questions. For any questions you don't have an answer for, just hit enter.</li>
                    <li>Then type <code className=" language-javascript">npm install gulp gulp<span className="token operator">-</span>sass gulp<span className="token operator">-</span>cssnano gulp<span className="token operator">-</span>autoprefixer gulp<span className="token operator">-</span>sourcemaps <span className="token operator">--</span>save</code> and hit enter.</li>
                    <li>When this has finished, you should see a new file in your project folder called <strong>package.json</strong>, and a new folder called <strong>node_modules</strong>. One important thing to note, if this is a Git project, you should remove the node modules folder from the Git repo by adding it to the <strong>.gitignore</strong> file</li>
                    <li>Create a new file in the directory called <em><strong>Gulpfile.js</strong></em></li>
                    <li>Put the following code into it:</li>
                </ol>

                <Highlight className="js">
                    {"// Include dependencies\nvar gulp = require('gulp');\nvar sass = require('gulp-sass');\nvar cssnano = require('gulp-cssnano');\nvar autoprefixer = require('gulp-autoprefixer');\nvar sourcemaps = require('gulp-sourcemaps');\n// SASS task\ngulp.task('sass', function () {\n\tgulp.src(['./sass/*.scss', './sass/**/*.scss'])\n\t.pipe(sourcemaps.init())\n\t.pipe(sass().on('error', sass.logError))\n\t.pipe(autoprefixer({\n\t\tbrowsers: ['last 2 versions'],\n\t\tcascade: false\n\t}))\n\t.pipe(sourcemaps.write('./maps/'))\n\t.pipe(gulp.dest('../css/'))\n});"}
                </Highlight>

                <p>Note that you can then go into the <strong>/foundation</strong> subfolder in your SASS folder, and easily remove/change settings as needed.</p>
                <p>The commands this setup gives you in your command line are&nbsp;<code class=" language-javascript">gulp sass</code> and <code class=" language-javascript">gulp watch</code>.</p>
                <p>Basically, <code class=" language-javascript">gulp sass</code> will run the compilation for you, and then end. <code class=" language-javascript">gulp watch</code> on the other hand, will watch the sass files for changes, so when you save any of the files, it will automagically re-run the compilation for you.</p>
                <hr />
                <h3>Adding Foundation or other CSS frameworks</h3>
                <p>If you want to take full advantage of Foundation's SASS build, then you can add Foundation to your Gulp workflow.</p>
                <ol>
                    <li>Go to the <a href="https://github.com/zurb/foundation-sites">Foundation for Sites Github page</a>, and download the folder (Or use Bower or NPM to install it from the command line).</li>
                    <li>Put that downloaded Foundation folder into your project's plugins folder (eg. <strong>project/js/plugins/foundation-sites</strong>).</li>
                    <li>Open up your Gulpfile.js file, and find the SASS task, and then find the line with: <br/>
                    <Highlight className="js">
                        {".pipe(sass()).on('error', sass.logError))"}
                    </Highlight></li>
                    <li>We're going to change it to:<br />
                        <Highlight className="js">
                            {".pipe(sass({ \n\tincludePaths: [ \n\t\t'./bower_components/foundation-sites/scss'\n\t]\n}).on('error', sass.logError))"}
                        </Highlight>
                    </li>
                    <li>Make sure to change the path in that new line to point to the foundation folder you just put in your project folder, <strong>foundation-sites/scss</strong>.</li>
                    <li>Now in your project's SASS folder, you're going to want to add a subfolder called '<em>foundation</em>'. In this folder, copy and paste the <strong>_global.scss</strong> and <strong>foundation.scss</strong> files from&nbsp;<strong>project/js/plugins/foundation-sites/scss</strong>. Rename <strong>foundation.scss</strong> to <strong>_foundation.scss</strong>.</li>
                    <li>In your main stylesheet, now you can add the following lines where needed to include foundation.</li>
                </ol>
                <Highlight>
                    {"// Foundation\n@import 'foundation/_foundation';\n@import 'foundation/_global';\n@include foundation-everything;"}
                </Highlight>
                <p>Note that you can then go into the <strong>/foundation</strong> subfolder in your SASS folder, and easily remove/change settings as needed.</p>
            </div>
        )
    },
    {
        id: 'svg-icon-system',
        title: 'Implementing An SVG Icon System',
        date: '4th April, 2016',
		img: 'img/work/mmj.png',
        content: (
            <div>
                <p className="intro"><strong>Why write about SVG in 2016?</strong> Well I think that although a lot has been said of the benefits of SVG icon systems, there remains a lot of people who still see them as a bit of an unknown. The specifics of how to implement SVG in particular can get some short shrift (although there are some great articles out there). So I thought I'd tell you about one specific use case for SVG, and how to go about implementing that: using <strong>an SVG icon system</strong>, ideally to replace your icon fonts and sprited background-images.</p>
                <p>Having used this system for a little while now, I'm finally sold that SVG's make for the best icon system available. So what makes a good icon system? Here's a list of criteria for what makes a good icon system (in my opinion):</p>
                <ul><li><strong>Easily editable: </strong>We should be able to add and remove icons from the set very quickly and easily.</li>
                  <li><strong>Resolution independent / Vector:</strong> The icons should look as crisp as possible on any screen type.</li>
                  <li><strong>Small file size: </strong>Our system should take as little toll on page loading as possible!</li>
                  <li><strong>Utilising spriting and caching: </strong>We should be able to make use of these techniques to minimise the burden on loading.</li>
                  <li><strong>Interactive: </strong>The ability to interact and style the icons using CSS is a huge plus, allowing to more easily manipulate the size, colour, and styling of the icons.</li>
                  <li><strong>Semantic: </strong>The icon system should comply with accessibility standards, and should be bespoke in it's purpose and meaning.</li>
                </ul><p>While older techniques have individually managed to tick a lot of these boxes, an SVG icon system can tick <strong>all</strong> of these boxes, and once you're versed in the technique, it can be quick and easy to implement and maintain.&nbsp;</p>
                <h2>Before We Start: Some Helpful Base Knowledge</h2>
                <p>It can be helpful to have a basic understanding of some of the fundamentals about SVG, so we can understand how our icon system will work. The first thing you should know is how SVG <em>looks</em>.</p>
                <p>By this I mean how the <em>markup</em> for SVG looks. If you open an SVG file in a text editor, you'll see it looks a bit like HTML, with tags defining the structure of the file. This is because SVG's are XML based, which makes them great for the web.</p>
                <Highlight>
                    {'<svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\t<rect width="100%" height="100%" fill="red" />\n\t<circle cx="150" cy="100" r="80" fill="green" />\n\t<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>\n</svg>'}
                </Highlight>
                <p>Now there's a bunch of different ways we can use SVG in our websites:</p>
                <ul><li>Embedding this SVG markup directly on our page,</li>
                  <li>Linking an SVG file in an &lt;img&gt; tag,</li>
                  <li>Setting an SVG file as a background image with CSS.</li>
                </ul><p>These techniques all have there benefits, but the technique we're going to be using today involves a kind of hybrid of embedding and linking. Hopefully that's mysterious enough to get you to read on...</p>
                <div className="message">Just a heads up that in this tutorial we'll be using a task runner (choice of <strong>Grunt</strong> or <strong>Gulp</strong>). If you're not using a task runner, then you may want to tackle learning about those before you try and use SVG icons. Chris Coyier wrote <a title="Grunt for People Who Think Things Like Grunt are Weird and Hard" href="https://24ways.org/2013/grunt-is-not-weird-and-hard/" target="_blank">a great article</a> a while back which got me on my way with these, and I'd recommend giving it a read.</div>
                <h2>Getting Started: Sourcing Your Icons</h2>
                <p>The first step in getting an icon system on your site is sourcing some icons. The only, perhaps obvious, caveat to this is that we're going to want <strong>vector</strong> icons to make use of the benefits of SVG. For the purposes of this tutorial, let's go grab some icons from <a href="http://www.flaticon.com/">flaticon.com</a>.</p>
                <p>We want individual, one colour icons at this point. Later we can talk about minimising the file size, and even adding a second colour, but for now this will do.</p>
                <div className="captionImage center">
                    <img className="center" title src="assets/Uploads/ouricons.jpg" alt="Our SVG icons for this tutorial." />
                    <br />
                    <p className="caption center">Icons! This is what we're talking about.</p>
                </div>
                <div className="message"><strong>Important note for those using Illustrator:</strong> If you're exporting your SVG files from Illustrator, then all your icons should be made pure black, as in #000000. This is so you can add colour to them using CSS later. You can read more about this <a title="SVG Gotcha #1" href="https://css-tricks.com/gotchas-on-getting-svg-into-production/#article-header-id-5" target="_blank">here</a>.</div>
                <p>Once we've got our individual SVG icons to start with, we just put the files for these in a folder in our project directory (Something like <strong><em>directory/images/svg-icons/iconname.svg</em></strong>), naming them something simple we can reference later with ease.</p>
                <p><img className="center" title src="assets/Uploads/svgfolder.jpg" alt="SVG's in a folder." /></p>
                <p>So you have all your individual icons, and you could go and use them by directly copying them into your page. Hold your horses though, because if you were to do that then you wouldn't get the benefits of caching that comes from having the icons sprited. To do this, we'll be combining those icons into one larger sprite file.</p>
                <h2>Spriting Your Icons</h2>
                <p>Now you could maybe do this manually, but that's a task that would take a lot of time and effort (and would need to be redone every time you wanted to change the icon set). Luckily, some clever people have created grunt and gulp (pick your poison) tasks that take care of this for us.</p>
                <p>Basically, with these tasks, we just need to point to the individual icons, and tell the task where to output the sprited file. We can also pass a few nifty options, but basically when the task is run, a file will be generated which combines all the icons.</p>

                <h4>If you use <strong>Gulp</strong> - <a title="Gulp SVGStore" href="https://github.com/w0rm/gulp-svgstore" target="_blank">https://github.com/w0rm/gulp-svgstore</a></h4>
                <p>Open your command line of choice, navigate to your project directory, then type:</p>
                <Highlight>{'npm intall gulp-svgstore gulp-svgmin --save'}</Highlight>
                <p>This will download and install the task locally, from which point you can open your gulpfile.js and configure the task.</p>

                <Highlight>{"grunt.loadNpmTasks('grunt-svgstore');\ngrunt.initConfig({\n\tsvgstore: {\n\toptions: {\n\t\tprefix : 'icon-', // This will prefix each ID\n\t\tsvg: { // will add and overide the the default xmlns='http://www.w3.org/2000/svg' attribute to the resulting SVG\n\t\t\tviewBox : '0 0 100 100',\n\t\t\txmlns: 'http://www.w3.org/2000/svg'\n\t\t}\n\t},\n\t\tyour_target: {\n\t\t\tfiles: {\n\t\t\t\t'images/sprite.svg': ['images/svg-icons/*.svg']\n\t\t\t}\n\t\t},\n\t},\n});\n\ngrunt.registerTask('spritesvg', ['svgstore']);"}</Highlight>
                <p>Now, from your command line, you can run <code className=" language-powershell">gulp spritesvg</code> and your sprite file will be generated for you, in a jiffy!</p>
                <Highlight>{'<svg xmlns="http://www.w3.org/2000/svg">\n\t<symbol id="codepen" viewBox="0 0 64 64">\n\t\t<title>CodePen</title>\n\t\t<path etc.../>\n\t</symbol>\n\t<symbol id="youtube" viewBox="0 0 64 64">\n\t\t<title>YouTube</title>\n\t\t<path etc.../>\n\t</symbol>\n\t<symbol id="twitter" viewBox="0 0 64 64">\n\t\t<title>Twitter</title>\n\t\t<path etc.../>\n\t</symbol>\n</svg>'}</Highlight>
                <p>To add icons to your sprite in the future, all you need to do is add the SVG file to your source folder, and then simply run the grunt/gulp task again. It's really, really easy.</p>
                <h2>Using Your Icons</h2>
                <p>Now that you have your icons sprited, they're ready to use, it's time to introduce you to the markup which will represent your icons in the HTML.</p>
                <Highlight>{'<svg>\n\t<use href="images/sprite.svg#icon-name"></use>\n</svg>'}</Highlight>
                <p>What the &lt;use&gt; tag allows us to do is reference a specific symbol from an SVG file, using an ID. Modern browsers will also let you point towards an external file, as you can see above. This is fantastic because it means we can cache the SVG file, as well as getting the performance benefits of spriting (Just the one HTTP request, thanks)!</p>
                <h2>Supporting Older Browsers</h2>
                <p>How far you want to go in terms of supporting older browsers is up to you really, but the least I'd recommend is to use the javascript plugin <a title="svg4everybody on Github" href="https://github.com/jonathantneal/svg4everybody" target="_blank">svg4everybody</a>, which will let you support browsers that don't understand external references in &lt;use&gt; tags. For these browsers, svg4everybody will instead load the SVG file directly onto the page (and hide it), and then update those references to be internal. Pretty nifty.</p>
                <p>To use svg4everybody, download it <a title="svg4everybody" href="https://github.com/jonathantneal/svg4everybody" target="_blank">directly from Github</a> or install it via Bower, if that's a thing you do:</p>
                <Highlight className="js">{"bower install svg4everybody --save"}</Highlight>
                <p>Then, include the svg4everybody javascript file on your page, and call it:</p>
                <Highlight className="html">{'<script src="/path/to/svg4everybody.js"></script>\n<script>\nsvg4everybody(); // run it now or whenever you are ready\n</script>'}</Highlight>
                <p>And that's all there is to it! Easy as pie. Of course, if you need to provide support for legacy browsers such as old IE versions, than you can go even further and provide PNG fallbacks for those older browsers that don't support SVG. If that sounds like something you need, then check out the svg4everybody github page for more information.</p>
            </div>
        )
    }
];

export default showcaseItems;
