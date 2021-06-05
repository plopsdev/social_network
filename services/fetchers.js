const fetchProfilePosts = (userId) => {
    if (userId === 2){
        return(
            [
                {
                    id: 1,
                    user: {
                        id: 2,
                        name: "Rodrigo Akore",
                        picture: "https://www.puttyandpaint.com/images/uploads/artistworks/18560/cache/foto_mago1__sized_center_m.jpg"
                    },
                    image: "https://i.pinimg.com/originals/d7/5f/76/d75f76058e7138decf45d6d8824e3017.jpg",
                    likes: 1400,
                    description: "Nice picture"
                },
                {
                    id: 4,
                    user: {
                        id: 2,
                        name: "Rodrigo Akore",
                        picture: "https://www.puttyandpaint.com/images/uploads/artistworks/18560/cache/foto_mago1__sized_center_m.jpg"
                    },
                    image: "https://scontent.fbru2-1.fna.fbcdn.net/v/t1.6435-9/54522205_783922261978059_6547374469600509952_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=CtbIdraxkUsAX_bRDJb&_nc_oc=AQn5q3Ya0gHUe_-NgVhzyb5D-GZXO18X5ZL-jjj0m9Dt98eV3UITRb3P7RnEGnfp940&tn=Go94Dos7Lfk-oNg_&_nc_ht=scontent.fbru2-1.fna&oh=fb91a5ce4aa260aa1673781d277b0dc0&oe=60DCDFF3",
                    likes: 1000,
                    description: "Cool picture"
                },
                {
                    id: 5,
                    user: {
                        id: 2,
                        name: "Rodrigo Akore",
                        picture: "https://www.puttyandpaint.com/images/uploads/artistworks/18560/cache/foto_mago1__sized_center_m.jpg"
                    },
                    image: "https://i.pinimg.com/originals/c3/71/2f/c3712f09f5a7648f2433bc03359a36be.jpg",
                    likes: 800,
                    description: "wooooow"
                },
                {
                    id: 6,
                    user: {
                        id: 2,
                        name: "Rodrigo Akore",
                        picture: "https://www.puttyandpaint.com/images/uploads/artistworks/18560/cache/foto_mago1__sized_center_m.jpg"
                    },
                    image: "https://i.pinimg.com/originals/94/ac/6c/94ac6c94edd10c08409939327ed0b60a.png",
                    likes: 4,
                    description: "not bad eh"
                }
            ]
        )
    }
    else if (userId === 1){
        return (
            [
                {
                    id: 2,
                    user: {
                        id: 1,
                        name: "HoneyBrush_",
                        picture: "https://lh3.googleusercontent.com/proxy/7a7-lxtQUFo1IHoblrKRYLu-Lq4J4clyGzrYHG_Q8bGUAFOI2wfvwv-pqFKcqMmyWCfbZySd0dUlDR48eVspIT4wIFZ3xxyzyby0sNHHwxNn5EsOag"
                    },
                    image: "https://instagram.flwo4-1.fna.fbcdn.net/v/t51.2885-15/e35/79643933_105678890869727_2438031310643065780_n.jpg?tp=1&_nc_ht=instagram.flwo4-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=w_KHti4Ya1sAX-Ly5xo&edm=AP_V10EAAAAA&ccb=7-4&oh=3498b56244fa0dfedaaf2808bf9595a9&oe=60AA8BD5&_nc_sid=4f375e",
                    likes: 201,
                    description: "Très jolie photo que j'ai prise"
                },
                {
                    id: 3,
                    user: {
                        id: 1,
                        name: "HoneyBrush_",
                        picture: "https://lh3.googleusercontent.com/proxy/7a7-lxtQUFo1IHoblrKRYLu-Lq4J4clyGzrYHG_Q8bGUAFOI2wfvwv-pqFKcqMmyWCfbZySd0dUlDR48eVspIT4wIFZ3xxyzyby0sNHHwxNn5EsOag"
                    },
                    image: "https://lh3.googleusercontent.com/proxy/7a7-lxtQUFo1IHoblrKRYLu-Lq4J4clyGzrYHG_Q8bGUAFOI2wfvwv-pqFKcqMmyWCfbZySd0dUlDR48eVspIT4wIFZ3xxyzyby0sNHHwxNn5EsOag",
                    likes: 1750,
                    description: "Figurine sympa"
                },
                {
                    id: 7,
                    user: {
                        id: 1,
                        name: "HoneyBrush_",
                        picture: "https://lh3.googleusercontent.com/proxy/7a7-lxtQUFo1IHoblrKRYLu-Lq4J4clyGzrYHG_Q8bGUAFOI2wfvwv-pqFKcqMmyWCfbZySd0dUlDR48eVspIT4wIFZ3xxyzyby0sNHHwxNn5EsOag"
                    },
                    image: "https://scontent.fbru2-1.fna.fbcdn.net/v/t1.6435-9/195073350_2581861878624354_7905994935857476864_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=gehyhkzPZBsAX8OD8al&_nc_ht=scontent.fbru2-1.fna&oh=1c88a07f9110a790092c978294c8b9bd&oe=60DCEB12",
                    likes: 12000,
                    description: "petite gargouille"
                },
                {
                    id: 8,
                    user: {
                        id: 1,
                        name: "HoneyBrush_",
                        picture: "https://lh3.googleusercontent.com/proxy/7a7-lxtQUFo1IHoblrKRYLu-Lq4J4clyGzrYHG_Q8bGUAFOI2wfvwv-pqFKcqMmyWCfbZySd0dUlDR48eVspIT4wIFZ3xxyzyby0sNHHwxNn5EsOag"
                    },
                    image: "https://scontent.fbru2-1.fna.fbcdn.net/v/t1.6435-9/169971461_2532500580227151_783311640437354374_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_ohc=Ce6D2T5LPK4AX_Tyafm&_nc_ht=scontent.fbru2-1.fna&oh=fcd2d4372e49e249b04898bd5f35ee49&oe=60DB55B2",
                    likes: 8000,
                    description: "cool"
                }
            ]
        )
    }
}

export {
    fetchProfilePosts
}