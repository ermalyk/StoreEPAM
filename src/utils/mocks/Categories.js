const Categories = [{
        "id": 1,
        "level": 1,
        "pressed": true,
        "title": 'Category 1',
        "categories": [],
        "items": [{
                "checked": false,
                "title": 'To-Do Item #1'
            },
            {
                "checked": false,
                "title": 'To-Do Item #2'
            }
        ]
    },
    {
        "id": 2,
        level: 1,
        "title": 'Category 2',
        "categories": [{
                "id": 1,
                "title": 'Category 2 1'
            },
            {
                "id": 2,
                "title": 'Category 2 2'
            },
            {
                "id": 3,
                "title": 'Category 2 3'
            }
        ],
        "items": []
    },
    {
        "id": 3,
        "level": 1,
        "title": 'Category 3',
        "categories": [{
                "id": 1,
                "title": 'Category 3 1',
            },
            {
                "id": 2,
                "title": 'Category 3 2',
                "categories": [{
                        "id": 1,
                        "title": 'Category 3 2 1',
                    },
                    {
                        "id": 2,
                        "title": 'Category 3 2 2'
                    }
                ],
            }
        ],
        "items": []
    }
];

export default Categories;