
const obj = {
    "page_url": "/a1",
    "page_type": "0",
    "children": [{
        "page_url": "/a1/b1",
        "page_type": "0",
        "children": [{
            "page_url": "/a1/b1/c1",
            "page_type": "0",
            "children": [{
                "page_url": "/a1/b1/c1/d1",
                "page_type": "1",
            },
                {
                    "page_url": "/a1/b1/c1/d2",
                    "page_type": "1",
                },
                {
                    "page_url": "/a1/b1/c1/d3",
                    "page_type": "1",
                },
                {
                    "page_url": "/a1/b1/c1/d4",
                    "page_type": "0",
                },
                {
                    "page_url": "/a1/b1/c1/d5",
                    "page_type": "0",
                }
            ]
        },
            {
                "page_url": "/a1/b1/c2",
                "page_type": "0",
                "children": [{
                    "page_url": "/a1/b1/c2/d1",
                    "page_type": "1",
                },
                    {
                        "page_url": "/a1/b1/c2/d2",
                        "page_type": "0",
                        "children": [{
                            "page_url": "/a1/b1/c2/d2/e1",
                            "page_type": "1",
                        },
                            {
                                "page_url": "/a1/b1/c2/d2/e2",
                                "page_type": "0",
                            },
                            {
                                "page_url": "/a1/b1/c2/d3/e3",
                                "page_type": "1",
                            }
                        ]
                    },
                    {
                        "page_url": "/a1/b1/c2/d3",
                        "page_type": "1",
                    }
                ]
            }
        ]
    },
    {
        "page_url": "/a1/b2",
        "page_type": "0",
    }]
};

/**
 * param obj 数据
 * param findLayer 指定层数
 * param currentLayer 当前层数
 * return page_url 返回page_type为0的指定层数的第一个page_url
 */

function findPageUrl(obj = {}, findLayer = 0, currentLayer = 0) {
    let value = obj;
    if(Array.isArray(obj)){
        value = obj.shift();
    }
    const type = value.page_type;
    const url = value.page_url;
    const child = value.children;
    if(findLayer === currentLayer){
        if(type === '0') {
            return url;
        }else if(obj.length){
            return findPageUrl(obj, findLayer, currentLayer);
        }else {
            return null;
        }

    }
    return findPageUrl(child, findLayer, currentLayer + 1);
}

console.log(findPageUrl(obj, 3, 0));
