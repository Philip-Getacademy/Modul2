let model =
{

    currentPage: 'displayEntry',
	previousPage: '--',
	
    //View
    pages:
    {
        home:
        {
            content:
            {
                // dynamic content range
            },
        },

        entry:
        {
            // model.pages.entry.input
            input:
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
            
            content: 
            {
                // dynamic content range // read entry
            },
        },

        archive: 
		{
            input: 
            {
                search: 'Search..|',    // Innhold/Tittel/hashtags | hyttetur #sunny #feelingblue | 
				filterEnabled: false,   // enabled = false : Date filtering, hashtags filtering. 
                sort: 'newest',
            },
            
            content: 
            {
                displayedArchiveEntries: [0, 1, 2], // model.pages.archive.content.displayedArchiveEntries
			},			
        },
	},

 
	
    database: 
    {
        archive: 
        [
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
    },
}