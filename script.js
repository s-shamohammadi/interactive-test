const ListExam = 
    [
        //word
        [
            {
                name: 'آزمون 1',
                description: 'موضوع',
                link: 'word/index.html'
            },
                        {
                name: 'آزمون 1',
                description: 'موضوع',
                link: 'word/index.html'
            },
                        {
                name: 'آزمون 1',
                description: 'موضوع',
                link: 'word/index.html'
            },
                        {
                name: 'آزمون 1',
                description: 'موضوع',
                link: 'word/index.html'
            },
                        {
                name: 'آزمون 1',
                description: 'موضوع',
                link: 'word/index.html'
            },
                        {
                name: 'آزمون 1',
                description: 'موضوع',
                link: 'word/index.html'
            },
                        {
                name: 'آزمون 1',
                description: 'موضوع',
                link: 'word/index.html'
            },
        ],
        //Excel
        [

        ],
        //PowerPoint
        [

        ],
        //MySQL
        [

        ],
        //Visio
        [

        ],
        //OneNote
        [

        ],
        //Publisher
        [

        ],
        //Access
        [

        ],
        //Access
        [

        ],
        //Access
        [

        ],
        //Access
        [

        ],
        //Access
        [

        ],
        //Access
        [

        ],
        //Access
        [

        ],
        //Access
        [

        ]
    ];
 
 function showModal(index) {
    debugger
    ListExam[index].forEach(element => {
        const newLi = document.createElement("li");
        newLi.classList.add("my-class", "my-class-2");
        const newA = document.createElement("a");
        newA.classList.add("link-exam");
        newA.innerText = element.name;
        newA.href = element.link;
        const newP = document.createElement("p");
        newP.innerText = element.description;
        newP.classList.add("my-class");
        newLi.appendChild(newA);
        newLi.appendChild(newP);
        document.getElementById("exams").appendChild(newLi);
    });
 }   