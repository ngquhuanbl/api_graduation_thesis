# API
## Task
### 1. Tạo mới một task
* Path: ```/annotation/task```
* Method: ```POST```
* Body: 
``` json 
{
	"project" : {
		"_id" : 12345,
		"name" : "thesis",
		"admin" : {
			"_id" : 12345,
			"email" : "nchconghung@gmail.com"
		},
		"projectManager" : {
			"_id" : 1234444,
			"email" : "buctuong@gmail.com"
		}
	},
	"datasets" : [
		{
			"_id" : 12345,
			"name" : "human"
		}
	],
	"tasks" : [
		{
			"_id" : 124334,
			"dataset" : 12345,
			"labeler" : {
				"_id" : 124324,
				"email" : "nchconghung@gmail.com"
			},
			"reviewer" : {
				"_id" : 3456776,
				"email" : "nchonghung.fit@gmail.com"
			},
			"createdAt" : 1586575158086
		}	
	],
	"tools" : [
		{
			"_id" : 123,
			"shape" : "polygon",
			"label" : "gai",
			"color" : "#000"
		},
		{
			"_id" : 1234,
			"shape" : "polygon",
			"label" : "ratnhieugai",
			"color" : "#F45A"
		}
	]
}
```
  * Response: 
  ``` json 
  {
    "status": 1,
    "data": null,
    "msg": "Khởi tạo thành công"
}
```

## Review 
### 1. Lấy danh sách dữ liệu đánh nhãn để review
* Path: ```/annotation/review```
* Method: ```GET```
* Param:
  * task: **int** - task hiện tại cần review 
  * pg_page: **int** - số trang hiện tại
  * pg_size: **int** - số lượng trên mỗi trang, nếu bằng 0 thì lấy hết
 * Ex: ```/annotation/review?pg_page=0&pg_size=4&task=1234```
 * Response:
 ```json 
 {
    "status": 1,
    "data": [
        {
            "task": 1234,
            "taskDetail": 2134,
            "image": 2345,
            "status": 0,
            "markingObjects": [
                {
                    "tool": 1234,
                    "data": {
                        "exterior": [
                            {
                                "x": 1.0,
                                "y": 2.45
                            },
                            {
                                "x": 0.0,
                                "y": 4.56
                            },
                            {
                                "x": 1.0,
                                "y": 3.45
                            }
                        ],
                        "interior": [
                            {
                                "objs": [
                                    {
                                        "x": 1.0,
                                        "y": 2.45
                                    },
                                    {
                                        "x": 0.0,
                                        "y": 4.56
                                    },
                                    {
                                        "x": 1.0,
                                        "y": 3.45
                                    }
                                ]
                            },
                            {
                                "objs": [
                                    {
                                        "x": 3.0,
                                        "y": 2.45
                                    },
                                    {
                                        "x": 4.0,
                                        "y": 4.56
                                    },
                                    {
                                        "x": 6.0,
                                        "y": 3.45
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            "reviewedAt": 1590466281500,
            "updatedAt": 1590466281500,
            "createdAt": 1590464805346,
            "_id": "5ecc91255784f04f569559df"
        }
    ],
    "msg": null
}
```
2. Gửi kết quả review
  * Path: ```/annotation/review```
  * Method: ```POST```
  * Ghi chú: Là cập nhật lại nên hãy gửi toàn bộ data đã được trả về và thay đổi, chỉ cần thay đổi status
  > -1: reject, 1: accept
  * Body: 
``` json 
  {
            "_id": "5ecc91255784f04f569559df",
            "image": 1234,
            "status": 1,
            "markingObjects": [
                {
				"tool" : 1234,
				"data" : {
					"interior" : [
						{
							"objs" : [
								{"x" : 1,"y" : 2.45},
								{"x" : 0,"y" : 4.56},
								{"x" : 1,"y" : 3.45}
							]
						},
						{
							"objs" : [
								{"x" : 3,"y" : 2.45},
								{"x" : 4,"y" : 4.56},
								{"x" : 6,"y" : 3.45}
							]
						}
					],
					"exterior" : [
						{"x" : 1,"y" : 2.45},
						{"x" : 0,"y" : 4.56},
						{"x" : 1,"y" : 3.45}
					],
					"bitmap" : null
				}
			}
            ],
            "reviewedAt": 0,
            "updatedAt": 1586707223490,
            "createdAt": 1586707223490
        }
```
  * Response:
``` json 
{
  "status": 1,
  "data": null,
  "msg": "Khởi tạo thành công"
}
```
## Marking
### 1. Gửi dữ liệu 
  * Path: ```/annotation/result```
  * Method: POST
  * Body:
  ``` json 
{
	"image" : {
		"_id" : 2345,
		"dataset" : 12345,
		"name" : "hcmus.png",
		"url" : "/resources/hcmus.png",
		"height" : 1080,
		"width" : 1920
	},
	"result" : {
		"task" : 1234,
		"taskDetail" : 2134,
		"markingObjects" : [
			{
				"tool" : 1234,
				"data" : {
					"interior" : [
						{
							"objs" : [
								{"x" : 1,"y" : 2.45},
								{"x" : 0,"y" : 4.56},
								{"x" : 1,"y" : 3.45}
							]
						},
						{
							"objs" : [
								{"x" : 3,"y" : 2.45},
								{"x" : 4,"y" : 4.56},
								{"x" : 6,"y" : 3.45}
							]
						}
					],
					"exterior" : [
						{"x" : 1,"y" : 2.45},
						{"x" : 0,"y" : 4.56},
						{"x" : 1,"y" : 3.45}
					],
					"bitmap" : null
				}
			}	
		]
	}
}
```
  * Response: 
``` json 
{
  "status": 1,
  "data": null,
  "msg": "Khởi tạo thành công"
}
```
### 2. Lấy file export
  * Path: ```/annotation/result```
  * Param: 
    * project: **int** - id của project
    * dataset: **int** - id của dataset
    * isAll: **int** - lấy kết quả của 1 dataset hay toàn bộ dataset của project
    > 0: chỉ một 1 dataset, 1: toàn bộ dataset (trong lúc này biến dataset có null cũng được)
    
    * choice: **int** - định dạng dữ liệu muốn trả về
    > 0: JSON, 1: CSV
  * Ex: ```/annotation/result?project=123&dataset=12345&isAll=0&choice=1```
  * Response: là file (xem file mẫu trong cùng folder), kèm theo status code: **200** - thành công và **500** - thất bại
  > Type: MediaType.APPLICATION_OCTET_STREAM_VALUE
  
