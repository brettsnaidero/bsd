import React from 'react';
import Highlight from 'react-highlight';

const showcaseItems = [
    {
        id: 'uxofasandwich',
        title: 'The UX of a Sandwich',
		img: 'img/work/mmj.png',
        content: (
            <div>
                <p>Firstly let's address some immediate questions that you probably have:</p>
                <p><strong><em>Is this guide really comprehensive and encyclopedic?</em></strong></p>
                <p>Nope. That was lie. It was also a test to see if you had your critical thinking cap on, congratulations on questioning everything you held to be true.</p>
                <p>This guide is actually pretty much as lean as possible, so don't expect it to answer all your questions - if you don't know what NPM is, for example, I'd suggest you spend a lazy Sunday Googling it, because that's outside the scope of this guide.&nbsp;</p>
                <p>However, this guide does try to cover all the stuff you need to know, in order to get up and running with a Gulp project. From there, you have a great jumping off point for more learning, or you can kind of ignore the magic and just reap the benefits.</p>
                <p><strong><em>What's NPM?</em></strong></p>
                <p>Come on mate, what did I just say.</p>
                <hr />
                <h3>Getting started - setting up your computer</h3>
                <p><img className="right" title="" src="assets/Uploads/npm.png" alt="Node JS and NPM" />Before we run off and begin the Gulp based merriment, we need to install the command line tools we need.</p>
                <p><strong>Installing <em>Node</em> and <em>NPM</em></strong></p>
                <p>If you haven't already, go download and install <a href="https://nodejs.org/en/">Node</a>&nbsp;on your computer. This comes with that lovely NPM thing you keep hearing about, so don't sweat that.</p>
                <p><strong>Installing <em>Gulp</em> Globally</strong></p>
                <p>We also need to install Gulp globally on the machine.&nbsp;</p>
                <p><code className=" line-numbers language-javascript">npm install <span className="token operator">--</span>global gulp<span className="token operator">-</span>cli</code></p>
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

                <Highlight className="javascript">
                    svg4everybody(); // run it now or whenever you are ready
                </Highlight>

                <p>Note that you can then go into the <strong>/foundation</strong> subfolder in your SASS folder, and easily remove/change settings as needed.</p>
            </div>
        )
    },
		{
        id: 'uxofasandwich',
        title: 'A comprehensive and encyclopedic guide to using NPM, Gulp, and SASS!',
				img: 'img/work/iydj.jpg',
        content: (
            <p><strong>MMJ</strong> are a leading Australian real estate agency, with offices across the country.</p>
        )
    },
		{
        id: 'uxofasandwich',
        title: 'A Complete Guide To Implementing An SVG Icon System',
				img: 'img/work/bowser.jpg',
        content: (
            <p><strong>MMJ</strong> are a leading Australian real estate agency, with offices across the country.</p>
        )
    },
		{
        id: 'uxofasandwich',
        title: 'Deciding to Design in the Browser',
				img: 'img/work/landl.jpg',
        content: (
            <p><strong>MMJ</strong> are a leading Australian real estate agency, with offices across the country.</p>
        )
    },
		{
        id: 'uxofasandwich',
        title: 'Fifth Article',
				img: 'img/work/polidex.jpg',
        content: (
            <p><strong>MMJ</strong> are a leading Australian real estate agency, with offices across the country.</p>
        )
    }
];

export default showcaseItems;
