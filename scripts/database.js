const database = {

    fish: [
    {
        
        id: 1,
        Name: "Jimmy",
        Length: 4.6,
        Food: "Fish Food",
        Location: "Florida",
        Image: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    },
    {
        id: 2,
        Name: "Davy",
        Length: 10.25,
        Food: "Fish Food",
        Location: "Greece",
        Image: "https://cdn.pixabay.com/photo/2022/07/11/11/01/fishes-7314666__340.jpg"
    },
    {
        id: 3,
        Name: "Betty",
        Length: 7.37,
        Food: "Fish Food",
        Location: "California",
        Image: "https://www.peta.org/wp-content/uploads/2019/08/iStock-1160758684_NONTANUN-CHAIPRAKON-1-602x301.jpg"
    },
    {
        id: 4,
        Name: "Layla",
        Length: 12.23,
        Food: "Fish Food",
        Location: "Ohio",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWfiS2koTfZIupWegYaGjZ9nSbujRvhl1STmw5Pt_HgYs0mZv44RjLc4r0wie7GgME2I&usqp=CAU"
    },
    {
        id: 5,
        Name: "Johnny",
        Length: 3.22,
        Food: "Fish Food",
        Location: "South Carolina",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSKdUJSQfgy_MLOTTZ-Wo4334pQqPl3xntQ&usqp=CAU"
    }
]
}



export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}