/*
	- Innholdsfortegnelse -

		model.input
		model.content
		model.database
*/

// model.pages.archive.content.displayedArchiveEntries
// model.content.archive.displayedArchiveEntries
// model.input.entry
// model.pages.entry.input

let model =
{
	// User Input
	input:
	{
		// home: {},
		entry: 
		{
			// model.pages.entry.input.title
			title: 'Entry title...|',
			
			assets: // Assets[i] index represents position in view
			[
				{
					type:'text',    // Text/Local files(recordings)/Embeds/etc
					data:'text...|',// Data related to type
				},
			],

			mood: 4,
			
			tags: 
			[
				'#kjøre på',
				'#kline til',
			],

			permission: 'private',
        },
	
		archive: 
		{
			search: 'Search..|',    // Innhold/Tittel/hashtags | hyttetur #sunny #feelingblue | 
			filterEnabled: false,   // enabled = false : Date filtering, hashtags filtering. 
			sort: 'newest',
		},	
	},

	// Dynamic content
	content:
	{
		// home: {},
		// entry: {},
		archive: 
		{
			displayedArchiveEntries: [0, 1, 2], // model.pages.archive.content.displayedArchiveEntries
		},	
	},

	// Permanent data
	database:
	{
		archive: 
        [
			// Example entry db content
            {
                title: 'Feeling Blue', 
                permission: 'private', 
                date: '01.11.2020', 
                assets: 
                [
                    {
                        type:'text',
                        data:'Lorem Ipsum',
                    },
                    {
                        type:'video',
                        data:'https://something.com/shortURL'
                    },
                ], 
                mood: 0, 
                tags: ['#Mood', '#Life', '#TIL'],
            },
        ]	
	}
};
