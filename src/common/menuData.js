export const menuData = [
    { name: "Home", path: "/" },
    {
        name: "Tour Packages",
        subMenu: [
            {
                name: "International Tours", path: "international-tour",
                subMenu: [
                    { name: "Australia", path: "australia" },
                    { name: "India", path: "india" },
                    { name: "USA", path: "usa" },
                ]
            },
            {
                name: "Domestic Tours", path: "domestic-tour",
                subMenu: [
                    { name: "Australia", path: "australia" },
                    { name: "India", path: "india" },
                    { name: "USA", path: "usa" },
                ]
            },
            {
                name: "Spiritual Tours", path: "spiritual-tour",
                subMenu: [
                    { name: "Amarnath", path: "amarnath" },
                    { name: "Kedarnath", path: "kedarnath" },
                ]
            },
        ]
    },
    {
        name: "Our Services", path: 'services',
        subMenu: [
            { name: "Tour Package Booking", path: "tour-package-booking" },
            { name: "Hotel Booking", path: "hotel-booking" },
            { name: "Transport Booking", path: "transport-booking" },
            { name: "B2B Deals", path: "b2b-deals" }
        ]
    },
    { name: "Gallery", path: "gallery" },
    { name: "Blogs", path: "blogs" },
    { name: "Contact Us", path: "contact-us" },
];