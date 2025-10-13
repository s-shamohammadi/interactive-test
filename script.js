const ListExam = 
    [
        //word
        [
            
        ],
        //Excel
        [
            {
                number: 'آزمون 15',
                subject: 'اعتبارسنجی داده های ورودی، Data Validation، معتبرسازی داده های ورودی',
                //description: 'طراح: مائده قنوی',
                link: 'Excel/exam-15/story.html'
            },
            {
                number: 'آزمون 18',
                subject: 'مفهوم ماکرو، تب Developer، مدیریت ماکروهای ضبط شده',
                //description: 'طراح: مریم محمدخانی',
                link: 'Excel/exam-18/story.html'
            }

        ],
        //PowerPoint
        [

        ],
        //Access
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
        //GoogleTools
        [
            {
                name: 'آزمون 1',
                description: 'Gmail - ساخت حساب کاربری',
                link: 'GoogleTools/exam-01/story.html'
            },
            {
                name: 'آزمون 5',
                description: 'اسناد گوگل (Google Docs)',
                link: 'GoogleTools/exam-05/story.html'
            },
            {
                name: 'آزمون 6',
                description: 'جلسات آنلاین (Google Meet)',
                link: 'GoogleTools/exam-06/story.html'
            },
            {
                name: 'آزمون 7',
                description: 'فرم آنلاین (Google Forms)',
                link: 'GoogleTools/exam-07/story.html'
            }
        ],
        //RepairPc
        [

        ],
        //Linux
        [

        ],
        //windows11
        [

        ],
        //MAC
        [

        ],
        //Android
        [

        ],
        //AppInventor
        [

        ]
    ];
 
 function showModal(index) {
    document.getElementById("exams").innerHTML = "";
    ListExam[index].forEach(element => {
        const newLi = document.createElement("li");
        newLi.classList.add("item-exam", "my-class-2");
        const newA = document.createElement("a");
        newA.classList.add("link-exam");
        newA.innerText = element.number;
        newA.href = element.link;
        const newP = document.createElement("p");
        const newS = document.createElement("p");
        newS.classList.add("item-subject");
        newP.innerText = element.description;
        newS.innerText = element.subject;
        newP.classList.add("my-class");
        newLi.appendChild(newA);
        newLi.appendChild(newS);
        newLi.appendChild(newP);
        document.getElementById("exams").appendChild(newLi);
    });
 }   