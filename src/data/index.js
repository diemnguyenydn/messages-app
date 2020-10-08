export const dataMsg = [
    {
        id: 1,
        name: 'User 1',
        avatar: 'https://png.pngtree.com/png-clipart/20190706/original/pngtree-character-girl-avatar-illustration-png-image_4381942.jpg',
        messages: [
            {
                id: 1,
                message: 'Hello',
                isCreated: true,
                created: '15:00'
            },
            {
                id: 2,
                message: 'How are you',
                created: '15:10',
                isCreated: false
            },
            {
                id: 2,
                message: 'I am good',
                created: '15:12',
                isCreated: false
            },

        ],
        lastMessage: "I am good",
        lastMessageTimeStamp: '15:12'
    },
    {
        id: 2,
        name: 'User 2',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXvbdPl_ClRdZ0QGV8cvJX2sknUj410-beAg&usqp=CAU',
        messages: [
            {
                id: 1,
                message: '4444444',
                isCreated: false,
                created: '15:00'
            },
            {
                id: 2,
                message: '11111111111',
                created: '15:10',
                isCreated: true
            },
            {
                id: 2,
                message: 'hhhhhhhh',
                created: '15:12',
                isCreated: true
            },

        ],
        lastMessage: "hhhhhhhhh",
        lastMessageTimeStamp: '15:12'
    },
    {
        id: 3,
        name: 'User 3',
        avatar: 'https://img.favpng.com/3/7/23/login-google-account-computer-icons-user-png-favpng-ZwgqcU6LVRjJucQ9udYpX00qa.jpg',
        messages: [
            {
                id: 1,
                message: 'bbbbbbbbbb',
                isCreated: true,
                created: '15:00'
            },
            {
                id: 2,
                message: 'How are you',
                created: '15:10',
                isCreated: false
            },
            {
                id: 2,
                message: 'qqqqqqqqq',
                created: '15:12',
                isCreated: true
            },

        ],
        lastMessage: "qqqqqqqqq",
        lastMessageTimeStamp: '15:12'
    },
]

export default {
    dataMsg
}