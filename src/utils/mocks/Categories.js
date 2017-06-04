const Categories = {
    pressedId: '',
    activeItems: [],
    categories: [{
            "id": '1xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
            "pressed": true,
            "title": 'Category 1',
            "active": false,
            "categories": [],
            "items": [{
                    "id": '1',
                    "checked": false,
                    "title": 'To-Do Item #1',
                    "categories": [],
                },
                {
                    "id": '2',
                    "checked": false,
                    "title": 'To-Do Item #2',
                    "categories": []
                }
            ]
        },
        {
            "id": '2xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
            "pressed": false,
            "title": 'Category 2',
            "active": false,
            "categories": [{
                    "id": '21xxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
                    "pressed": false,
                    "title": 'Category 2 1',
                    "categories": [],
                    "items": [{
                            "id": '3',
                            "checked": false,
                            "title": 'To-Do Item #2 1',
                            "categories": []
                        },
                        {
                            "id": '4',
                            "checked": false,
                            "title": 'To-Do Item #2 2',
                            "categories": []
                        }
                    ],
                    "active": false
                },
                {
                    "id": '22xxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
                    "pressed": false,
                    "title": 'Category 2 2',
                    "categories": [],
                    "active": false
                },
                {
                    "id": '23xxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
                    "pressed": false,
                    "title": 'Category 2 3',
                    "categories": [],
                    "active": false
                }
            ],
            "items": []
        },
        {
            "id": '3xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
            "pressed": false,
            "title": 'Category 3',
            "active": false,
            "categories": [{
                    "id": '31xxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
                    "pressed": false,
                    "title": 'Category 3 1',
                    "categories": []
                },
                {
                    "id": '32xxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
                    "pressed": false,
                    "title": 'Category 3 2',
                    "active": false,
                    "categories": [{
                            "id": '321xxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
                            "pressed": false,
                            "title": 'Category 3 2 1',
                            "active": false,
                            "categories": [],
                            "items": [{
                                    "id": '5',
                                    "checked": false,
                                    "title": 'To-Do Item #3 2 1',
                                    "categories": []
                                },
                                {
                                    "id": '6',
                                    "checked": false,
                                    "title": 'To-Do Item #3 2 2',
                                    "categories": []
                                }
                            ]
                        },
                        {
                            "id": '322xxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
                            "pressed": false,
                            "title": 'Category 3 2 2',
                            "active": false,
                            "categories": []
                        }
                    ],
                }
            ],
            "items": []
        },

    ]
};

export default Categories;
