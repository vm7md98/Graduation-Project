<img src="https://hct.ac.ae/wp-content/themes/HCTtheme/assets/images/logo.svg" alt="HCT Logo" width="400" height="124">

# Final Year Project
# _Universities Registration System_
**By Mohammed, Bineid**

_Project Supervisor: Dr. Madeleine Togher_

## Glossary
-	HTA – Hierarchical Task Analysis, describes an activity in terms of its specific goals, subgoals, operations, and plans.
-	UI – User Interface, the point of human-computer interaction and communication in a device.
-	UX – User Experience.
-	ERD – Entity Relationship Diagram, is a graphical representation that depicts relationships among people, objects, places, concepts or events within a system.
-	OOP – Object-oriented programming, “refers to computer programming model that organizes software design around data, or objects, rather than functions and logic”.
-	Framework – a tool that provides ready-made components or solutions that are customized in order to speed up development such as Node.js.
-	MVC – Model-View-Controller, a design pattern used to achieve separation of concerns.
-	IDE – Integrated Development Environment.

## Chapter 1: Introduction
### 1.1	Context and motivation
When I was a second-year student trying to register my courses, I was having many problems, such as what course should I register for? How many courses can I take? Am I allowed to take this course? Because of these questions, I was forced to ask my advisor. This process is repeated every semester and most students face these problems. Therefore, the inspiration and the whole idea came from the beginning of the problem. The main reason why we started this project is that there was a problem that the collage did not solve yet. As a team, we are motivated by our passion for making something useful for the long term and to know our limits and skills. Thus, we have this project idea where we plan on finding solutions to these problems by utilizing smarter solutions such as Internet of things (IoT) to improve the efficiency, enhance the system, optimize the parking utilization, reduce cost and time when using the parking system or even managing it. This project will focus on solving the problems one by one, along with having additional features included to furthermore enhance the user’s experience


### 2.2	Problem statement
In every semester we are facing a problem with lack/surplus of classes due to having unbalanced number of lecturer and students. In 2020 fall semester, SMC student had a math course “Applied Mathematics” registered in his schedule. The problem is the system only allowing 10 students as minimum and they were 8 students only, but the registration system already accepted it and submit the request. Therefore, the lecturer cancels the course and who had 4 courses left with 3 courses which leads to more academic issues. The thought of doing this whole project was to solve this type of a problem and catch irregular behavior in the registration system.
To summarize our problem with the current registration system:
-	The main problem is having lack/surplus number of classes.
-	The system is not counting the number of students in every course and because of that we don’t know how many classes we need for every course.
-	The system is slow and freezes sometimes. 
-	Time: The process itself is bad and slow because there are too many people involved therefore, we need to make it auto-register or at least reduce the number of interactions between students, advisors, and others.
-	Human error: for example, register for courses for another major.
-	Lack of feedback: student (user) should get Immediate feedback on their actions for example: when they register/drop to a course or not met the minimum credit.

### 1.3	Project objectives
HCT registration system is a system that provides and manages college courses. Their goal is to provide a fast, secure, and easier way to register courses to students across all HCT campuses. 
HCT registration system providing a lot of services for student such as: Prepare for Registration, Register for Classes, Plan Ahead, Browse, View Registration Information, Browse Course Catalog.
The above services work efficiently but it is missing some important features/services. One of these features is having a lack/surplus of classes due to having unbalanced number of lecturer and students. Currently system is not counting and dividing the classes based on the number of student and lecturer. This problem would affect every stakeholder (Students, Lecturers, Advisors, Supervisors, Administrations) in a separate way. For students, this will affect them by having the minimum/maximum number of credits, for ex. If a student had 4 courses and then they decided to cancel his 4th course, then he will stick with 3 course which will leave him with 9 credits, and this is not allowed due to HCT regulations. For Lecturers, the system will keep adding/dropping courses from their schedule, and this will confuse the lecturers. As an advisor, the students will ask the advisor frequently to send a request to the administrations to open/add new courses which will lead to consume more unneeded effort and time to the advisor. As a supervisor, he will have to check for the number of registered students in each course to open classes manually which leading to a lot of human errors. For administrations, they will have to deal with the massive number of courses requests that are coming from the supervisors.
### Solution
Our solution to this problem will be create a new feature/service that will count the needed classes numbers based on the student courses registration. This solution will solve a lot of problems that we have talked about previously. It will help the students to get enough classes in every semester. Lecturers can be prepared before the semester starts. It will save a lot of time and effort on advisors. As a supervisor, she/he will have enough data to decide the classes number. Eventually, administration will know the number of classes, budgets, and lecturers needed in every semester. This solution will benefit HCT organization in every aspect, from the financial to the operational processes. We believe that it will lead to less human errors and will add a high value to HCT registration system effectively.

## Chapter 2: Domain related Concepts and Systems
### 2.1	Introduction
The first and foremost purpose of the assignment was to test and analyze the whole system that how it going to be built and how it’s going to fulfill the requirements of the institution. The analysis and design part provides a comprehensive idea about the view that how the system will look after the completion and how it will get, store and transfer the data and also gives an idea about the data processing inside the system. The system analysis part will provide the cost idea and also provide the UML model of this system so, it would be easy for the developers to read this document and start the development process step by step. The edge system analysis provides us is that it enables us to decrease the risks and deal will all the sensitive components efficiently. 



### 2.2	Adopted Methodology
As we know that the system is for a Higher College have clear requirements about new system, each and every term associated with the system is well defined and well explained that shows that the requirements of the system are very clear and understandable, due to the reason we choose to use the waterfall methodology for this project. Waterfall methodology is very basic software development methodology which were being use over the decades for software development and system development. 
We have some advantages of this model, due to these advantages many of the organization still using this model on and off for their projects.

- I.	Easy to understand:
This is sequential and hierarchal model thus easy to understand for people within the team and outside the team like clients. It provides a complete life cycle for controlling and organizing software development projects.

- II.	Focus on goal:
Every team whether they are part of development team or part of design team, every person has a common goal to complete this project. They share common goal and stay stick on one point to complete their work in assigned time frame as in shown in `Figure 1`.



- III.	Coordination between teams:
This development model allows departmentalization and managerial controls. They focus to coordinate with each team and provide a specific time frame to each of them to complete their work on time. In this model team’s coordination is easy when a design team finish their work and complete design phase, they handover all the material to development team to start coding the design.

![Figure 1](https://user-images.githubusercontent.com/56771415/188312468-081a10d2-95d0-4cb8-a927-7602ff966154.png)

Where the requirements of a system are not subject to change, we use waterfall methodology as this development methodologies gives us a clear roadmap and help us to focus on our goal. We are using waterfall for the project because it allows the owner to have control over system development team and system development progress can be access easily.



### 2.3	Technical feasibility / Literature Review
In September 2020, SMC student had a course registered in his schedule with 12 credits. The problem is the system only allowing 10 students as minimum and they were 8 students only and the registration system already accepted it and submit the request. Therefore, the lecturer cancels the course and who had 4 courses left with 3 courses. Therefore, the lecturer cancels the course and who had 4 courses left with 3 courses. This problem leads to more academic issues. After discovering this problem, we read several pieces of literature about course registration systems.
One of the literatures Ruben Estevez, S. R. (2013) found or mentions in his research that there are actually some researchers who built an auto-registered system in which they used "genetic algorithms to generate satisfactory schedules" and found that the algorithms reduced the time needed to create course schedules, and the resulting schedules satisfy instructors. There are also other researchers who have built a system using wireless application protocol which enables the student to register over mobile but still requires the presence of students on campus. However, the problem is none of them mention how the user feels about for example: "the usability of course, registration systems. Can users learn to use a course registration system easily? Can they use it properly? Are they satisfied with the system?".

(LI, Y. ,2017) wrote a paper about Add-on Course Registration System and he/she talk about the problems, business component, technology component, Disadvantages and advantageous but he/she mention one feature about the system that I think it’s important and it will add a lot to our system which is Provide Course Recommendation Ranking and Reviews for example: student can tell how many credit he/she need to complete and what courses they have not scheduled for yet. Also, there is another paper written by Qurban A. Memon, M. S. (2005) about a similar feature called course priority, which suggests what course student should add or prioritize first.

Y. Peng, N. Liu, Y. Li and Z. Shao paper he says that the online course registration system is a critical component of the educational administration system, which includes registration guidance, registration control, undergraduate and graduate course registration, retaking and retesting, dropping a course in the middle of the semester, and information exchange, among other things. In April 2009, Tsinghua University's new course registration system became live. After implementing he found the new system enhanced the registration procedure, established common course registration for undergraduate and graduate students, and supported instructional activities across the spring, summer, and autumn semesters by allowing students to register for courses willingly. This article discusses the new online course registration system's design and execution, including the registration method, technical architecture, and system design.

Also, Parthiban, K; Nataraj, R. V says Each program has its requirements. Course registration is crucial at educational institutions throughout the academic system. Managing course registration for a semester is a time-consuming job that incorporates various factors such as course design, teacher assignment, and timetable.

Furthermore, course registration for FCFS-based registration will be more time consuming because it will need selecting numerous course instructors who will be teaching multiple courses. This study primarily focuses on investigating a Service Oriented Architecture by combining the curriculum, instructor management, and schedule management in order to provide students with a highly available, dependable online course registration platform. In our project we need a database to save our data and records after reading many papers we are looking about the difference between different types of databases. A. Boicea, F. Radulescu, Laura Ioana Agapin.   This paper compares and contrasts Oracle Database, a SQL database management system, and Mongo DB, a No SQL document-oriented database management system. Theoretical differences, features, constraints, integrity, distribution, system requirements, architecture, query, and insertion times are among the comparison factors.
We also researched the technical aspects, and we found that our project is possible to implement by using the MongoDB extension that the JavaScript programming language support. The most extensive defect of using this method is that we need to learn monody from scratch.


### 2.4	Operational Feasibility
The proposed service will have a positive effect on the organization structure and procedures because it will be less interaction between student, advisor, and others, which means it will reduce the errors that’s made by humans; therefore, it will save time and effort. Our system will fit the current registration system as it is a new function of it, therefore it has a small effect on day-to-day operations. The only sensible change that may occur is the classes counter that the system is missing.

### 2.5	Schedule Feasibility
I used [MS Project](https://en.wikipedia.org/wiki/Microsoft_Project) to create a plan for the schedule and time management as shown in `Figure 2` and `Figure 3`.

![Figure 2](https://user-images.githubusercontent.com/56771415/188312927-d9e753c4-2964-4f67-8b8b-91f7d3d6fde0.png)
![Figure 3](https://user-images.githubusercontent.com/56771415/188312940-ece5cbce-602e-461c-9aa8-57d91d30e873.png)


### 2.6	Economic Feasibility
Here is the table that shows the cost in `Table 1`.

![Table 1](https://user-images.githubusercontent.com/56771415/188313100-99815d71-ca65-4d04-b784-b155e2f893ff.png)

### 2.7	Risk ,anagement
Risk management is the process of identifying, analyzing, and responding to project risks. It includes risk description, probability, impact, and how to mitigate these risks. Risk management also includes accepting risk.

### 2.7.1	Risk Register
Here is the table that shows the Register Risk in `Table 2`.

![Table 2](https://user-images.githubusercontent.com/56771415/188313245-e5a9f800-6c7b-47a5-b299-b099f947fe59.png)


### 2.8	Requirements gathering
Here is the table that shows the Requirements gathering in `Table 3`.

![Table 3](https://user-images.githubusercontent.com/56771415/188313282-e1c90283-8c03-45b5-9149-458242ed71fe.png)

### 2.8	Conclusion
We believe that our system will solve two major problems we have in our current system, which is the lack of classes and the time needed to register for classes. We will solve the first problem which is lack of classes by counting the number of student for each course then display it in the form of report to supervisor which will give him accurate number for each course then he/she can decide how many classes he/she need to open and how many instructors needs for each course. For the second problem, our system will suggest or recommend courses to a student, depending on his/her semester or credit and prioritize the course the student need to complete first.
By fixing these two problems, we will reduce the amount of interaction between the advisor and student and that will make course registration faster, easier and less stressful for both student and advisor.

## Chapter 3: Computing-based Solution/System Analysis
### 3.1	Introduction
The first and foremost purpose of the assignment was to test and analyze the whole system that how it going to be built and how it’s going to fulfill the requirements of the institution. The analysis and design part provides a comprehensive idea about the view that how the system will look after the completion. The system analysis part will provide Domain requirements, Functional requirements, and Non-functional requirements.

### 3.2	Domain requirements
- System must be efficient to fetch complete student information from the college system to calculate courses and generate plan for each student.
- System must provide reliable information and if the number of course is less than 4 ask the student to choose another course so he can take 4 courses in one semester.
- Any student profile which is incomplete or insufficient for generating a course plan will not be entertained in this new registration system.

### 3.3 Functional requirements
Functional Requirements: Which are the essential things (functions) we want the system to do so we can focus on the important thing and not get distracted. (Specifies things the system should do)
 
1.	Authentication				
2.	Authorization levels
3.	Create reports for supervisor
4.	Send verification code after login
5.	Send notification to students after drop/add any course  
6.	Generate courses for students
7.	Calculate how many classes needed for each course
8.	Advisor can drop /add courses for students
9.	Students can drop /add courses.
10.	Checking if student need to repeat the course
11.	Provide courses depending on the student data such as GPA, semester
12.	Advisor can remove or give permission to allow student to add/delete courses
13.	Student can view his courses
14.	Supervisor (admin) can add new user
15.	Supervisor (admin) can delete a user

### 3.4 Non-functional requirements
Non-Functional Requirements: The behavior of the system like user experience, general characteristics and some features.

1.	Responsive website
2.	Usability: How easily users will interact with the web
3.	Reliability: Reduce or remove all the bugs
4.	Mobile version or an app
5.	Color blind mode
6.	Dark mode
7.	Provide courses with time
8.	Prioritize or suggest important courses for student
9.	Notify advisor if student change any course without permission
10.	The application should work in most browser such as Safari, Firefox.
11.	Provide auto-register button that register student automatically depending on student data

### 3.5 Conclusion
In conclusion, chapter 3 should provide us with all requirements we need to build the system or what is important to our system and what is not important. Therefore, we will evaluate system according to these requirements. 

## Chapter 4: Computing-based Solution/System Design, Implementation, Test and validation
### 4.1 Introduction
The purpose of this chapter is to check if the product is ready to be in the stage of full production and product launch also, we will explain the two different phases we went through which design and implantation. 

### 4.2	Testing Techniques
In this section we will explain how we test our product which is a web application, and how we may deploy the application in the cloud. In this part we will not test the product in terms of code like last assignment, therefore we will not use things like Black-Box or Grey-Box but the test will be more general or from user perspective, for example usability test or functionalities test.

- Testing
The goal of the testing phase is to ensure that the product is ready for launch. Therefore, the product will be tested in various aspects with different techniques and the aspects are functionality testing, usability testing, UI (User Interface) testing, compatibility (Configuration) testing and testing in controlled environment.   
Functionality Testing
First, functional testing is where we test or check if the system operates correctly without any problems. In this part we will do the following testing: Links testing, Forms testing, Cookies testing.

- Links Testing:
In this part we will test emails, links pages that are not referenced, no broken links and Outbound links.

- Forms Testing:
In this part we will test data input, form option (drop-down list) and required input.  

- Cookies Testing:
In this part we will test the application with disabled cookies, with enabled cookies and check the security aspects when removing the cookies.

#### 4.2.1	Functionality Testing Result
- Links Testing Result as shown in `Table 4`.

![Table 4](https://user-images.githubusercontent.com/56771415/188356837-5748cc03-2a24-4cf1-bd4c-d8f1e49c1233.png)

- Discussion
First email testing, we used email in three places, when the user registered in the system `Figure 4`. Second, when the user logins the system will send the authentication code to the email `Figure 5`. Third, when the student adds any new course `Figure 6`. For the three other tests they all success, we referenced all the pages, we didn’t have broken links and we don’t have any outbound links.

![Figure 4](https://user-images.githubusercontent.com/56771415/188357130-a92ace4a-83d5-4644-b635-9da090aafc77.png)
![Figure 5](https://user-images.githubusercontent.com/56771415/188357573-c7431b05-a755-4afc-9ab8-07c29a13f74c.png)

![Figure 6](https://user-images.githubusercontent.com/56771415/188357161-599fae26-0876-421e-9086-5ccdea85bff3.png)

- Forms Testing Result as shown in `Table 5`

![Table 5](https://user-images.githubusercontent.com/56771415/188357406-1b35ebd2-e663-484d-ac0d-dce3ff4917e5.png)

- Discussion
We have three pages that need to be tested and they are login, signup and authentication. Login page and authentication page their data input has no problem, but signup page `Figure 7` has many problem that why we failed in this test. For example, we can register a user using numbers for first name and last name, therefore we need to add validation. Also, if we enter any letter in semester field the system will freeze and the system will need to be restarted because we need to enter a number but there is no validation. Form option and required input are both successful in the test phase for all pages.

![Figure 7](https://user-images.githubusercontent.com/56771415/188357501-ac1bc582-1a22-44ed-ad8a-1adc150827e0.png)

- Cookies Testing Result as shown in `Table 6`

![Table 6](https://user-images.githubusercontent.com/56771415/188357748-09651b2e-3143-4ef9-bb9b-5fc6be4593e6.png)

- Discussion
We used cookies in the project to increase the security aspect. Therefore, the user with no cookies and the user that is using the wrong cookies should not be able to enter the application. First, we test the application with disabled cookies and the result was success because we cannot pass authentication page and it does not matter what the code, we enter it will always response with "Invalid code" as we can see in `Figure 8` and that because to register authentication code in the database we need to use cookies. Enabled cookies test was a success because the website operated with no problem. Finally, removing the cookies test also passes the test because whenever we delete it will redirect the user to the login page.

![Figure 8](https://user-images.githubusercontent.com/56771415/188357899-a8c90a7d-f0ee-4062-909e-abe86833f21e.png)

- Functionality Final Testing Result as shown in `Table 7`

![Table 7](https://user-images.githubusercontent.com/56771415/188358002-0afcf44c-d545-499d-a1e9-44d736096a89.png)

- Discussion
To summarize the result of the functionality test, we succeeded in two tests, which is links test and cookies test but we failed in one test which is form test. Therefore, according to the results the system needs more validations on the signup page and beside that everything operates with no problem.  

#### 4.2.2	Usability Testing
Second, usability testing is where we evaluate our web page by acting like we are the users. This test helps us to know about the user perspective and according to (Arthana, 2019) good usability ensure users are happy and will return to using the system, However, it only consist of two part which are the navigation test and content test.

- Navigation testing:
This test consists of two parts which are checking if all pages are understandable and easy to use, and if there is an access to home page and logout button from all pages.

- Content testing:
In this test we need to check spelling mistakes and grammar, images or inputs are placed properly with proper sizes, using the right color palette of the site and font sizes.

#### Usability Testing Result
- Navigation Testing Result as shown in `Table 8`

![Table 8](https://user-images.githubusercontent.com/56771415/188358173-4c5c5da4-53da-41b8-95d9-a12c7d479456.png)

- Discussion
I think we made the website very easy to understand by removing any additional images and animation, and for the second point the user can access the home page and logout button from any page as we can see in `Figure 9`.

![Figure 9](https://user-images.githubusercontent.com/56771415/188358239-dff402c8-1b20-4369-8157-59a6802a024c.png)

- Content Testing Result as shown in `Table 9`

![Table 9](https://user-images.githubusercontent.com/56771415/188358284-f5026f56-a622-4927-b51f-4a7b91267ed6.png)

- Discussion
For the first point, we don’t have grammar or spelling mistakes because our website is very simple and most of the time we use one word or two  to explain the instructions. For the second point, we don’t have any images but for inputs we used bootstrap therefore bootstrap is responsible for the size. For the third point, I tried to use the right color such as green color to register a course as we can see in `Figure 11` also, I used some icons as we can see in `Figure 10`.

![Figure 11](https://user-images.githubusercontent.com/56771415/188358501-d23ecc4a-159e-4a21-bde2-a3ef7cb06257.png)
![Figure 10](https://user-images.githubusercontent.com/56771415/188358507-1987bf7a-f794-4505-b4e4-41eed518b52b.png)

- Usability Final Testing Result as shown in `Table 10`

![Table 10](https://user-images.githubusercontent.com/56771415/188358553-c528bed9-1b02-40f7-8efa-0a05551de78f.png)

- Discussion
To summarize the results of the usability test, we succeeded in both navigation testing and content testing. Therefore, according to the results the project succussed in usability test.

#### 4.2.2 (User Interface) Testing
Third, UI testing is where we test the graphics user interface of our product. In this part we will test the website with different screen resolutions such as personal computer  (1920 ×1080 dot), laptop (1280 × 800 dot) and mobile (2532 x 1170 pixels).

- UI (User Interface) Final Testing Result as shown in `Table 11`

![Table 11](https://user-images.githubusercontent.com/56771415/188358750-fd5c9983-980c-449e-ac2a-96061284e89f.png)

- Discussion
We developed the application using a PC which is 1920 x 1080, therefore, the application would operate without any problems if we used a similar resolution or higher. However, for laptop and mobile the application is not compiled with them and has many problems, for example, as we can see in `Figure 12` or `Figure 13` the button for register is disappeared.

_Laptop resolution_

![Figure 12](https://user-images.githubusercontent.com/56771415/188358794-f40664bf-cc23-49bc-aa92-c67cca4d131a.png)

_Mobile resolution_

![Figure 13](https://user-images.githubusercontent.com/56771415/188358810-e6cc9e33-d711-4b5a-a2ac-08ac766db5f4.png)




#### 4.2.4 Compatibility Testing
#### 4.2.5 Testing in Controlled Environment & Survey 
#### 4.2.6	Final Testing Result 

### 4.3	Validation Techniques
#### 4.3.1	Discussion

### 4.4 Design
#### 4.4.1	Visibility
#### 4.4.2	Feedback
#### 4.4.3	Affordances
#### 4.4.4	Constraints
#### 4.4.5 Consistency
#### 4.4.6	Accessibility
#### 4.4.7	Discussion

### 4.5	Hierarchical Task Analysis (HTA)
#### 4.5.1 HTA for student (To register)
#### 4.5.2	HTA for admin (To add a new user)
#### 4.5.3	HTA for admin (To download a report)

### 4.6 Pages
#### 4.6.1 login.ejs 
#### 4.6.2	authentication.ejs 
#### 4.6.3 index.ejs
#### 4.6.4 signup.ejs
#### 4.6.5 report.ejs 
#### 4.6.6	studentList.ejs 
#### 4.6.7 studentList.ejs 
#### 4.6.8	showCourse.ejs 

## 4.7 Implementation
#### 4.7.1	Technologies 

#### 4.7.2	File structure
##### 4.7.2.1	app.js
##### 4.7.2.2	package.json 
##### 4.7.2.3	package-lock.json 
##### 4.7.2.4	middleware
##### 4.7.2.5	node_modules 
##### 4.7.2.6	public 
##### 4.7.2.7	views 

### 4.7.3	Model-View-Controller (MVC)
### 4.7.4 Exports Modules
### 4.7.5	Routing
### 4.7.6	Functions
### 4.7.7	Validation
### 4.7.8	Models
### 4.7.9	Algorithm
### 4.7.10	webController.js
### 4.7.11	authMiddleware.js

## Chapter 5: Conclusion
### 5.1	Summarize
### 5.2	Reflection
### 5.3	Future development


## References

Retrieved 4 24, 2002, from https://iopscience.iop.org/article/10.1088/1742-6596/1165/1/012012/pdf#page=1
Chauhan, D., & Bansal, K. (2017, February ). Using the Advantages of NOSQL: A Case Study on MongoDB. Recent and Innovation Trends in Computing and Communication. Retrieved 3 18, 2022, from https://www.researchgate.net/profile/Divya-Chauhan-4/publication/349110376_Using_the_Advantages_of_NOSQL_A_Case_Study_on_MongoDB/links/6021154d92851c4ed5580298/Using-the-Advantages-of-NOSQL-A-Case-Study-on-MongoDB.pdf#page=1
Frees, S. (2015, January). A Place for Node.Js in the Computer Science Curriculum. Computing Sciences in Colleges. Retrieved 3 18, 2022, from https://www.researchgate.net/profile/Scott-Frees/publication/271849731_A_Place_for_NodeJs_in_the_Computer_Science_Curriculum/links/54d4db340cf2970e4e63c479/A-Place-for-NodeJs-in-the-Computer-Science-Curriculum.pdf#page=1
Glenn, & Glenn , S. (2001, August). Testing a Website: Best Practices. Retrieved 4 24, 2022, from https://www.heromotocorp.com/en-in/uploads/Annual_Reports/pdf/20130315113443-pdf-68.pdf#page=1
Miller, E. (2000). WebSite Testing. Software Research, Inc. Retrieved 4 24, 2022, from http://www.lieb.com/Readings/evalid%20site%20testing.pdf#page=1
Visočnik, V. (2018). Comparison of JWT and OAuth 2.0 authorisation and. University of Maribor. Retrieved 18 3, 2022, from https://core.ac.uk/download/pdf/159753962.pdf#page=1
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
- [1] 	V. Korhonen, “Chapter 10 - Dialogic literacy: A sociocultural literacy learning approach,” in Practising Information Literacy, S. T. Annemaree Lloyd, Ed., Chandos Publishing, 2010, pp. 211-226.
- [2] 	S. Suryawanshi, B. R. Chakravarthi, M. Arcan and P. B. Buitelaar, “Multimodal Meme Dataset (MultiOFF) for Identifying Offensive Content in Image and Text,” Multimodal Meme Dataset (MultiOFF) for Identifying Offensive Content in Image and Text, pp. 33-38, 2020. 
- [3] 	“drivendata,” [Online]. Available: https://www.drivendata.org/competitions/64/hateful-memes/. [Accessed 21 8 2021].
- [4] 	F. Yus, “Multimodality in Memes: A Cyberpragmatic Approach,” pp. 3-16, 2018. 
- [5] 	“Republic of Ireland: Copyright FAQs,” [Online]. Available: https://iaml-uk-irl.org/copyright-faqs-%E2%80%94-ireland#7. [Accessed 22 8 2021].
- [6] 	“9gag,” [Online]. Available: https://9gag.com/. [Accessed 22 8 2021].
- [7] 	“Meme Templates,” [Online]. Available: https://imgflip.com/. [Accessed 22 8 2021].
- [8] 	“Selenium,” [Online]. Available: https://www.selenium.dev/. [Accessed 21 8 2021].
- [9] 	X. Zhou, C. Yao, H. Wen, Y. Wang, S. Zhou, W. He and J. Liang, “EAST: An Efficient and Accurate Scene Text Detector,” p. 1, 2017. 
- [10] 	ZER-0-NE, “EAST Detector for Text Detection,” [Online]. Available: https://github.com/ZER-0-NE/EAST-Detector-for-text-detection-using-OpenCV. [Accessed 22 8 2021].
- [11] 	Fleron-X, “How to make bounding box around text-areas in an image? (Even if text is skewed!!),” [Online]. Available: https://stackoverflow.com/questions/54821969/how-to-make-bounding-box-around-text-areas-in-an-image-even-if-text-is-skewed. [Accessed 22 8 2021].
- [12] 	A. Rosebrock, “OpenCV Text Detection (EAST text detector),” [Online]. Available: https://www.pyimagesearch.com/2018/08/20/opencv-text-detection-east-text-detector/. [Accessed 22 8 2021].
- [13] 	G. Roy, A. Alekhin and V. R. Shrimali, “Github,” [Online]. Available: https://github.com/opencv/opencv/blob/1f726e81f91746e16f4a6110681658f8709e7dd2/samples/dnn/text_detection.py#L86. [Accessed 22 8 2021].
- [14] 	S. K, “Non-maximum Suppression (NMS),” [Online]. Available: https://towardsdatascience.com/non-maximum-suppression-nms-93ce178e177c. [Accessed 22 8 2021].
- [15] 	T. Fuentes, “What is a Meme?,” [Online]. Available: https://www.seventeen.com/life/tech-social-media/a26065897/what-is-a-meme/. [Accessed 22 8 2021].
