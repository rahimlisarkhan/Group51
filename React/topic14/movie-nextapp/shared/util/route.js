export const route = {
    main: {
        href: "/",
        children: {
            movie: {
                title: "Movie",
                href: "/movie",
                children: {
                    home: {
                        title: "Home",
                        href: "/movie/dashboard",
                    }
                }
            },
            login: {
                title: "Log out",
                href: "/login"
            }
        }
    }
}