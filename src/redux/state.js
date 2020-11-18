let state =
    {
        profilePage: {
            posts: [
                {id: 1, message: 'text 1', likeCount: 25},
                {id: 2, message: 'text 2', likeCount: 92},
                {id: 3, message: 'text 3', likeCount: 27},
                {id: 4, message: 'text 4', likeCount: 5},
                {id: 5, message: 'text 5', likeCount: 75}
            ],

        },
        dialogsPage:{
            dialogs: [
                {id: 1, name: 'bot 1'},
                {id: 2, name: 'bot 2'},
                {id: 3, name: 'bot 3'},
                {id: 4, name: 'bot 4'},
                {id: 5, name: 'bot 5'}
            ],
            messages: [
                {id: 1, message: 'text 1'},
                {id: 2, message: 'text 2'},
                {id: 3, message: 'text 3'},
                {id: 4, message: 'text 4'},
                {id: 5, message: 'text 5'}
            ]
        }

    }
export default state;