import React from 'react';

const showcaseItems = [
    {
        id: 'mmj',
        title: 'MMJ Real Estate',
        subtitle: 'Real Estate Website',
        image: 'img/work/mmj.png',
        width: 360,
        height: 450,
        period: '2016-2017',
				team: 'Internetrix',
        client: 'MMJ Real Estate',
				expertise: [
					'Design',
          'Front End Development',
          'React'
				],
				link: 'http://mmjrealestate.com.au',
        description: (
            <p><strong>MMJ</strong> are a leading Australian real estate agency, with offices right across the country. I collaborated with them on their new website, desgining a stylish new web home for the brand.</p>
        ),
        imageList: [
            {
                type: 'image',
                content: 'img/work/show-mmj.jpg'
            },
						{
							type: 'text',
							content: `MMJ are a highly respected property management brand, so when we started working on their new website together, it needed to meet their high standards. I'm very happy with what we ended up with, as the collaborative design process brought us to a very stylish and uncompromising website, which takes the MMJ brand to exciting new places, while delivering a highly functional and friendly user experience.`
						},
            {
                type: 'image',
                content: 'img/work/mmj-wireframes.jpg'
            },
            {
							type: 'text',
							content: `I worked closely with MMJ through the planning process, working together to identify the goals of the project. This process included sitemapping, information architecture planning, and then creating high-fidelity mock-ups.`
						},
						{
                type: 'image',
                content: 'img/work/show-mmj2.jpg'
            },
            {
                type: 'text',
                content: `Finally, I worked on the front-end development of the website, building a highly performant and content flexible website. I worked with a back-end developer on a React implementation to handle the property search functions of the site. I'm very happy with the results, with a fast and stylish web presence representing the forward-thinking MMJ brand.`
            }
        ]
    },
    {
        id: 'illawarradj',
        title: 'Illawarra DJ',
        subtitle: 'Entertainment Business',
        image: 'img/work/iydj.jpg',
        width: 240,
        height: 320,
        period: '2016',
        client: 'Myself',
				expertise: [
					'Logo Design',
					'Branding',
					'UI/UX',
					'CMS Development'
				],
				link: 'http://illawarradj.com.au',
        description: (
            <p>A side project developed by me and a friend, I designed the digital presence of this business from the ground up.</p>
        ),
        imageList: [
            {
                type: 'image',
                content: 'img/work/show-iydj.jpg'
            },
						{
							type: 'text',
							content: 'Another side project of mine, the Illawarra DJ site gave people on the South Coast an easy way to organise a DJ for their parties and events. This was a project that was cooked up by a friend of mine, and I took on the design and website development for the idea.'
						},
						{
                type: 'image',
                content: 'img/work/show-iydj2.jpg'
            },
            {
							type: 'text',
							content: `I designed the brand for the site first, putting together an angular and geometric logo and pairing it with a dark, club-inspired colour scheme to give the site a stylish vibe. This brand was then applied to the website, which I built into a simple CMS installation to give us quick control over the content on the site.`
						}
        ]
    },
    {
        id: 'servoscanner',
        title: 'ServoScanner',
        subtitle: 'Cheap Petrol Finder',
        image: 'img/work/bowser.jpg',
        width: 240,
        height: 320,
        period: '',
        client: '',
				expertise: [
					'Branding',
					'React',
					'Full Stack Development'
				],
				link: 'https://servoscanner.info/',
        description: (
            <p>A simple browser app for finding cheap petrol prices nearby, which could save you hundreds in petrol costs each year.</p>
        ),
        imageList: [
            {
                type: 'image',
                content: 'img/work/show-bowser1.jpg'
            },
						{
							type: 'text',
							content: 'In late 2016, I took a General Assembly course to build up my Javascript skills. As part of the course, I completed this as a major project, utilising React to develop a simple web app for finding cheap petrol. I hooked in to a freely available API provided by the NSW government, in order to visualise Petrol Stations and their daily set prices, allowing people to quickly find the cheapest petrol available to them.'
						}
        ]
    },
    {
        id: 'leagueandlegends',
        title: 'League & Legends',
        subtitle: 'E-Commerce Website',
        image: 'img/work/landl.jpg',
        width: 240,
        height: 320,
        period: '',
        client: '',
				expertise: [
          'Information Architecture',
					'UX Design',
					'Front End Development'
				],
				link: 'http://leagueandlegends.com.au',
        description: (
            <p><strong>League &amp; Legends</strong> are an NRL merchandise store. I designed the new responsive home of this e-commerce success story.</p>
        ),
        imageList: [
            {
                type: 'image',
                content: 'img/work/show-landl.jpg'
            },
            {
                type: 'text',
                content: 'In early 2015, the Internetrix team were tasked with the responsive redesign of the League & Legends website to increase mobile friendliness, in recognition to the fact that it would lead to higher conversion rates.',
            },
            {
                type: 'image',
                content: 'img/work/show-landl2.jpg'
            },
            {
                type: 'text',
                content: 'Since we completed the responsive upgrade, not only have League and Legends seen a rapid rise in conversion rates, but their website has also been ‘visually refreshed’, helping to better reflect the vibrant energy of the League & Legends brand.'
            }
        ]
    },
    {
        id: 'polidex',
        title: 'Polidex',
        subtitle: 'Politician Reference Site',
        image: 'img/work/polidex.jpg',
        width: 240,
        height: 320,
        period: '',
        client: '',
				expertise: [
					'Branding',
					'Full Stack Development',
          'React'
				],
				link: 'http://polidex.com.au',
        description: (
            <p><strong>Polidex</strong> is a side-project I began in 2015, with the aim of making it a little easier to keep track of Australian politics.</p>
        ),
        imageList: [
            {
                type: 'image',
                content: 'img/work/show-polidex.png'
            },
            {
              type: 'text',
              content: 'Built with the React Javascript library, the site uses public data to generate a directory of Australian federal politicians, with some insightful information on each politician. The directory is easily searchable, and allows users to quickly sort through the politicians currently sitting in our two parliamentary houses.'
            }
        ]
    },
    {
        id: 'internetrix',
        title: 'Internetrix',
        subtitle: 'Digital Agency',
        image: 'img/work/internetrix.jpg',
        width: 240,
        height: 320,
        period: '2015-2016',
        client: 'Internetrix',
				expertise: [
					'Branding',
					'UX Design',
					'Front End Development'
				],
        description: (
            <p>I led the front-end development at this growing digital agency from Wollongong.</p>
        ),
        imageList: [
            {
                type: 'image',
                content: 'img/work/show-irx.jpg'
            },
						{
                type: 'text',
                content: 'When I started at Internetrix as an Interactive Designer in 2014, the agency was undergoing a shift in brand, as it moved into a new physical space and new ownership took helm. I had a unique opportunity to contribute to the development of the Internetrix brand over my 4 years there, working on the internal website, branding, marketing, internal processes, and much, much more.'
            },
						{
                type: 'image',
                content: 'img/work/show-irx2.jpg'
            }
        ]
    }
];

export default showcaseItems;
