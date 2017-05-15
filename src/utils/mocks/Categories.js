const Categories = [{
        "id": 1,
        "level": 1,
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
        level: 1,
        "title": 'Category 2',
        "active": false,
        "categories": [{
                "id": 1,
                "title": 'Category 2 1',
                "categories": []
            },
            {
                "id": 2,
                "title": 'Category 2 2',
                "categories": []
            },
            {
                "id": 3,
                "title": 'Category 2 3',
                "categories": []
            }
        ],
        "items": []
    },
    {
        "id": 3,
        "level": 1,
        "title": 'Category 3',
        "active": false,
        "categories": [{
                "id": 1,
                "title": 'Category 3 1',
                "categories": []
            },
            {
                "id": 2,
                "title": 'Category 3 2',
                "categories": [{
                        "id": 1,
                        "title": 'Category 3 2 1',
                        "categories": []
                    },
                    {
                        "id": 2,
                        "title": 'Category 3 2 2',
                        "categories": []
                    }
                ],
            }
        ],
        "items": []
    }
];

export default Categories;