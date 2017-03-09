import React from 'react';
import Highlight from 'react-highlight';

const showcaseItems = [
    {
        id: 'norman-doors-and-the-web',
        title: 'Frustrating doors: The principles of human centered design',
        date: '4th March, 2017',
		img: 'img/blog/doors/door.jpg',
        content: (
            <div>
                <p>Imagine you are walking towards the door in the photo below. When you reach it, do you think you should push, or pull to open the door?</p>
                <p>&nbsp;<img className="center" title src="../img/blog/doors/normandoors.jpg" alt="Norman Doors" /></p>
                <p>Not sure? I’m sure we’ve all encountered a door like this at some point, with a handle that looks like you should pull it, except you actually need to give it the old push. It’s not our fault as the ‘user’ that we have struggled with the door, awkwardly pulling only to find we should be pushing - the design of the door has failed to communicate how we should interact with it.</p>
                <p dir="ltr">There is, in fact, a name given to these kinds of ambiguous, poorly designed doors - they are called <em>Norman Doors</em>. These doors are named after Don Norman, an expert in design and cognitive science, who wrote about such poorly designed doors in his book <a title="The Design Of Everyday Things" href="https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654/ref=pd_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=8Y6W789CRC4SG76VHT5F" target="_blank">The Design of Everyday Things</a>. That book, first published in 1988, is today considered something of a canonical work on design because it explores the principles of functionality and usability. To Norman, these doors are a prime example of the importance of considered and thoughtful design. Today, it is quite common for designers to refer to any ambiguously designed thing as a Norman Door.</p>
                <div className="embed-container">
                    <iframe src="https://www.youtube.com/embed/yY96hTb8WgI" width={320} height={240} frameBorder={0} id="widget2" />
                </div>
                <p dir="ltr">The web has its fair share of these so-called Norman Doors. Websites that are hard to navigate because you don’t know where the navigation is. Buttons that don’t look like buttons.</p>
                <p dir="ltr">As a designer, it is always my goal to improve the experience people have using my products - I want their interaction with my website to be productive and unobstructive. So it is important that my work has a design process that seeks to stop such '<em>Norman Door'</em> situations from popping up.</p>
                <p dir="ltr">Norman advocates a design process that focuses on the people who use the products we are designing, utilising principles of interaction to improve the experience. This approach to design has come to be known as User Experience design, though Norman himself prefers to call this <strong>Human Centred Design</strong>, where the focus of the designer is on how people will interact with the product, and the ways in which the product can engage those people in a productive interaction. In The Design of Everyday Things, Norman sets out some principles that can help designers to build products that are usable and accessible.</p>
                <p dir="ltr">When considering the usability of something, Norman says there are two aspects which influence how functional something is - <strong>discoverability</strong> and <strong>understanding</strong>.</p>
                <h2 dir="ltr">Discoverability</h2>
                <p dir="ltr">The ability to discover what operations I can perform as a user is a vital quality of a usable product. It might seem obvious, but being able to understand what something can do, and how to do it, is the magic that maketh a well designed thing. People need to be able to answer the question, “What can I do with this thing?”, and this is what discoverability is all about.</p>
                <blockquote>Design is really an act of communication, which means having a deep understanding of the person with whom the designer is communicating.
                  <p>- Donald Norman, The Design of Everyday Things</p>
                </blockquote>
                <p>The discoverability of something is manifested in the interaction between the user and the designed thing. But what are the specific factors that determine how 'discoverable' the functionality of your product is? Norman breaks it down into five principles&nbsp;which we can use to guide our designs: <strong>Affordances</strong>, <strong>Signifiers</strong>, <strong>Constraints</strong>, <strong>Mapping</strong>, and <strong>Feedback</strong>.</p>
                <h3><strong>1. Affordances</strong>&nbsp;</h3>
                <p><strong>Define what actions are possible.</strong></p>
                <p>This refers to the physical capabilities of the designed thing. For example, a door can open, and that is an <em>affordance</em> which has been planned in the design.</p>
                <p><img className="center" title src="../img/blog/doors/affordances2.gif" alt="Affordances" /></p>
                <p>Affordances in web design are the functionality built into the website by the designers and developers. In the example above, this mobile menu (an example of the 'off-canvas navigation' pattern) opens thanks to the affordances implemented on the website. It might seem obvious, but these affordances are the foundation of usability.</p>
                <h3><strong>2. Signifiers&nbsp;</strong></h3>
                <p><strong>Specify how people discover these possibilities.</strong></p>
                <p>These are elements which communicate where the action should take place. For example, a handle on a door is a visual signifier that the door can be opened.</p>
                <p><img className="center" title src="../img/blog/doors/signifier.jpg" alt="Signifier" /></p>
                <p>Call to action buttons are a common example of a signifier - they are a visual signifier which tries to grab the user's attention and get them to interact. These kinds of signifiers need to be obvious, and should communicate their intended purpose.</p>
                <h3><strong>3. Constraints</strong></h3>
                <p><strong>Restrict possible actions and ease interpretation.</strong></p>
                <p>For example, a push plate on a door doesn’t allow people to pull on the door, establishing a constraint that will stop people from incorrectly using the door.</p>
                <p><img className="center" title src="../img/blog/doors/constraints.gif" alt="Constraints" /></p>
                <p>By placing limits on what the user can do, you can guide their interaction and avoid confusion. An example of this in web design is error handling, where forms will give helpful feedback to the user to avoid unproductive exchanges (for example, if the user forgets to put their name in a support request form). The example in the image above shows a form that doesn't allow users to submit a form with incorrectly formatted emails.</p>
                <h3><strong>4. Mapping</strong>&nbsp;</h3>
                <p><strong>Establish the relationship between elements.</strong></p>
                <p>An example for this is the mapping of&nbsp;<span style={{fontFamily: '"Open Sans", Ubuntu, sans-serif', fontSize: 18, fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 'normal'}}>light&nbsp;</span><span style={{fontFamily: '"Open Sans", Ubuntu, sans-serif', fontSize: '1.125rem'}}>switches that specifies which switch controls which light.</span></p>
                <p><img className="center" title src="../img/blog/doors/mapping.gif" alt="Mapping" /></p>
                <p>In web design, it is important to establish how elements are related to one another, and to enforce consistent patterns of interaction. This will help the user to understand the intent and purpose of elements, allowing them to navigate the site without frustration. In the example above, the designer has done a great job of establishing the relationship between the tabs and the tab content, using animation to communicate the way the tabs are controlled.</p>
                <h3><strong>5. Feedback</strong>&nbsp;</h3>
                <p><strong>Communicate the result of an action.</strong></p>
                <p>Elements which let the user know how an action was received. They allow users to interpret the outcome of their actions.</p>
                <p><img className="center" title src="../img/blog/doors/feedback3.gif" alt="Feedback" /></p>
                <p>Feedback plays a very important role on the web, letting users know how their actions have been received. In this example, Twitter has implemented a fun little animation to indicate the ‘like’ action has been successful.&nbsp;</p>
                <h2>Understanding</h2>
                <p>Besides discoverability, the other half of the usability equation that Norman talks about is the concept of <strong>understanding</strong>. Users who interact with your design will come to build a conceptual model of how the thing acts, based on the processes outlined under <strong>discoverability</strong>.&nbsp;</p>
                <p>It is the goal of human centered design to have your users <em>understand</em> your website, and to avoid the frustration that results from confusion. By aligning the users' expectations with their experience, you can ensure that people will be able to use your website or product in a way which feels easy and productive.</p>
                <h2>Implementing <em>Human Centred Design</em> principles</h2>
                <p>At Internetrix, our internal design processes are built around human centred design principles, and we try to implement Norman's principles in all our projects.&nbsp;The following practices are just some of the processes to put in place to promote human centered design:</p>
                <ul><li><strong>User Testing</strong> - By allowing people to test and deliver feedback, you can gain valuable insight on the usability of your product before you send it out in the wild.</li>
                  <li><strong>Iterative Design</strong>&nbsp;- Another of Norman's insights, it is important to refine and revisit your design as user feedback and other new data brings to light areas for improvement.&nbsp;</li>
                  <li><strong>Accessibility </strong>- With the web, it is important to provide a great experience to all of your users, and as such it is vital that you take care to implement designs which are accessible and consider a wide spectrum of people.</li>
                  <li><strong>Progressive Enhancement</strong> - The capabilities of devices and browsers moves fast, so making sure to deliver a functional experience to users is important.</li>
                </ul><p>By carefully considering your users and their experience, you can avoid the kinds of frustrating experiences that badly designed doors so famously cause. By focusing on these factors of discoverability in your website or product, you take a step in the direction of happy and frustration-free customers, which can then lead to a happy and frustration-free <em>you</em>.</p>
            </div>
        )
    },
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
