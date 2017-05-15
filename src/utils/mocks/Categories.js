const Categories = [{
        "id": 1,
        "pressed": true,
        "title": 'Category 1',
        "active": false,
        "categories": [],
        "items": [{
                "checked": false,
                "title": 'To-Do Item #1',
                "categories": []
            },
            {
                "checked": false,
                "title": 'To-Do Item #2',
                "categories": []
            }
        ]
    },
    {
        "id": 2,
        "title": 'Category 2',
        "active": true,
        "categories": [{
                "id": 1,
                "title": 'Category 2 1',
                "categories": [],
                "active": false
            },
            {
                "id": 2,
                "title": 'Category 2 2',
                "categories": [],
                "active": false
            },
            {
                "id": 3,
                "title": 'Category 2 3',
                "categories": [],
                "active": false
            }
        ],
        "items": []
    },
    {
        "id": 3,
        "title": 'Category 3',
        "active": true,
        "categories": [{
                "id": 1,
                "title": 'Category 3 1',
                "categories": []
            },
            {
                "id": 2,
                "title": 'Category 3 2',
                "active": true,
                "categories": [{
                        "id": 1,
                        "title": 'Category 3 2 1',
                        "active": true,
                        "categories": []
                    },
                    {
                        "id": 2,
                        "title": 'Category 3 2 2',
                        "active": true,
                        "categories": []
                    }
                ],
            }
        ],
        "items": []
    }
];

export default Categories;